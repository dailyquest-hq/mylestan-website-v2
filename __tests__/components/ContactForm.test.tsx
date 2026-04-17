import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactPage from '@/app/contact/page';

// Mock next/link
jest.mock('next/link', () => ({ children, ...props }: any) => <a {...props}>{children}</a>);

// Mock next/image
jest.mock('next/image', () => (props: any) => <img {...props} />);

// Mock lucide-react
jest.mock('lucide-react', () => ({
  Facebook: () => <svg data-testid="icon-facebook" />,
  Instagram: () => <svg data-testid="icon-instagram" />,
  Linkedin: () => <svg data-testid="icon-linkedin" />,
  Youtube: () => <svg data-testid="icon-youtube" />,
  CheckCircle: () => <svg data-testid="check-circle" />,
}));

// Mock asset imports
jest.mock('@/assets/shared/social-1.jpg', () => ({ src: '/social-1.jpg' }), { virtual: true });
jest.mock('@/assets/shared/social-2.jpg', () => ({ src: '/social-2.jpg' }), { virtual: true });
jest.mock('@/assets/shared/social-3.jpg', () => ({ src: '/social-3.jpg' }), { virtual: true });
jest.mock('@/assets/shared/social-4.jpg', () => ({ src: '/social-4.jpg' }), { virtual: true });
jest.mock('@/assets/shared/social-6.jpg', () => ({ src: '/social-6.jpg' }), { virtual: true });

describe('Contact Form', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders all form fields', () => {
    render(<ContactPage />);

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('submit button exists and says "SEND MESSAGE"', () => {
    render(<ContactPage />);

    const submitButton = screen.getByRole('button', { name: /send message/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('shows "SENDING..." and disables button while loading', async () => {
    const user = userEvent.setup();

    // Return a promise that never resolves so we can inspect the loading state
    (global.fetch as jest.Mock).mockReturnValue(new Promise(() => {}));

    render(<ContactPage />);

    await user.type(screen.getByLabelText('Name'), 'Test User');
    await user.type(screen.getByLabelText('Email'), 'test@example.com');
    await user.type(screen.getByLabelText('Message'), 'Hello there!');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /sending\.\.\./i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /sending\.\.\./i })).toBeDisabled();
    });
  });

  it('shows success state after successful submit', async () => {
    const user = userEvent.setup();

    (global.fetch as jest.Mock).mockResolvedValue({ ok: true });

    render(<ContactPage />);

    await user.type(screen.getByLabelText('Name'), 'Test User');
    await user.type(screen.getByLabelText('Email'), 'test@example.com');
    await user.type(screen.getByLabelText('Message'), 'Hello there!');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByTestId('check-circle')).toBeInTheDocument();
      expect(screen.getByText('Message Received')).toBeInTheDocument();
    });

    // Form should no longer be visible
    expect(screen.queryByLabelText('Name')).not.toBeInTheDocument();
  });

  it('shows error message after failed submit', async () => {
    const user = userEvent.setup();

    (global.fetch as jest.Mock).mockResolvedValue({ ok: false });

    render(<ContactPage />);

    await user.type(screen.getByLabelText('Name'), 'Test User');
    await user.type(screen.getByLabelText('Email'), 'test@example.com');
    await user.type(screen.getByLabelText('Message'), 'Hello there!');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/something went wrong/i)
      ).toBeInTheDocument();
    });

    // Form should still be visible
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  it('resets to form view after clicking "Send another message"', async () => {
    const user = userEvent.setup();

    (global.fetch as jest.Mock).mockResolvedValue({ ok: true });

    render(<ContactPage />);

    await user.type(screen.getByLabelText('Name'), 'Test User');
    await user.type(screen.getByLabelText('Email'), 'test@example.com');
    await user.type(screen.getByLabelText('Message'), 'Hello there!');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText('Message Received')).toBeInTheDocument();
    });

    const resetButton = screen.getByRole('button', { name: /send another message/i });
    await user.click(resetButton);

    await waitFor(() => {
      expect(screen.getByLabelText('Name')).toBeInTheDocument();
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Message')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    });

    // Success state should be gone
    expect(screen.queryByText('Message Received')).not.toBeInTheDocument();
  });
});
