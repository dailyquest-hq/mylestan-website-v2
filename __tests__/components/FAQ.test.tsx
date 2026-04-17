import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FAQPage from '@/app/faqs/page';

// Mock next/link
jest.mock('next/link', () => ({ children, ...props }: any) => <a {...props}>{children}</a>);

// Mock motion/react — render children directly so accordion content is testable
jest.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

// Mock next/script — renders nothing (just injects JSON-LD)
jest.mock('next/script', () => (_props: any) => null);

// Mock lucide-react icons used in FAQItem (Plus / Minus) and the CTA button
jest.mock('lucide-react', () => ({
  Plus: () => <svg data-testid="icon-plus" />,
  Minus: () => <svg data-testid="icon-minus" />,
}));

// Mock schema helpers
jest.mock('@/lib/schemas', () => ({
  faqSchema: () => ({}),
  breadcrumbSchema: () => ({}),
}));

describe('FAQ Page', () => {
  it('renders FAQ questions', () => {
    render(<FAQPage />);

    expect(
      screen.getByText('What kind of services do you offer?')
    ).toBeInTheDocument();
  });

  it('hides FAQ answer by default', () => {
    render(<FAQPage />);

    // The answer text should not be visible (AnimatePresence only mounts when isOpen === true)
    expect(
      screen.queryByText(/crypto & trading insights/i)
    ).not.toBeInTheDocument();
  });

  it('aria-expanded is false by default on FAQ buttons', () => {
    render(<FAQPage />);

    // Only select FAQ toggle buttons (they have aria-controls, the CTA button does not)
    const buttons = screen.getAllByRole('button').filter(btn => btn.hasAttribute('aria-controls'));
    expect(buttons.length).toBeGreaterThan(0);
    buttons.forEach((btn) => {
      expect(btn).toHaveAttribute('aria-expanded', 'false');
    });
  });

  it('shows the answer after clicking the toggle button', async () => {
    const user = userEvent.setup();
    render(<FAQPage />);

    const firstButton = screen.getByRole('button', {
      name: /what kind of services do you offer\?/i,
    });

    await user.click(firstButton);

    expect(
      screen.getByText(/crypto & trading insights/i)
    ).toBeInTheDocument();
  });

  it('sets aria-expanded to true when the item is open', async () => {
    const user = userEvent.setup();
    render(<FAQPage />);

    const firstButton = screen.getByRole('button', {
      name: /what kind of services do you offer\?/i,
    });

    await user.click(firstButton);

    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('hides the answer again after clicking the toggle button a second time', async () => {
    const user = userEvent.setup();
    render(<FAQPage />);

    const firstButton = screen.getByRole('button', {
      name: /what kind of services do you offer\?/i,
    });

    // Open
    await user.click(firstButton);
    expect(screen.getByText(/crypto & trading insights/i)).toBeInTheDocument();

    // Close
    await user.click(firstButton);
    expect(
      screen.queryByText(/crypto & trading insights/i)
    ).not.toBeInTheDocument();
  });

  it('sets aria-expanded back to false after closing', async () => {
    const user = userEvent.setup();
    render(<FAQPage />);

    const firstButton = screen.getByRole('button', {
      name: /what kind of services do you offer\?/i,
    });

    await user.click(firstButton);
    expect(firstButton).toHaveAttribute('aria-expanded', 'true');

    await user.click(firstButton);
    expect(firstButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('only opens the clicked item, leaving others closed', async () => {
    const user = userEvent.setup();
    render(<FAQPage />);

    const firstButton = screen.getByRole('button', {
      name: /what kind of services do you offer\?/i,
    });
    const secondButton = screen.getByRole('button', {
      name: /do you work with individuals or groups\?/i,
    });

    await user.click(firstButton);

    expect(firstButton).toHaveAttribute('aria-expanded', 'true');
    expect(secondButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('answer div is linked via aria-controls', async () => {
    const user = userEvent.setup();
    render(<FAQPage />);

    const firstButton = screen.getByRole('button', {
      name: /what kind of services do you offer\?/i,
    });

    // aria-controls should point to an id that exists after opening
    const controlsId = firstButton.getAttribute('aria-controls');
    expect(controlsId).toBeTruthy();

    await user.click(firstButton);

    const answerDiv = document.getElementById(controlsId!);
    expect(answerDiv).toBeInTheDocument();
  });
});
