import nodemailer from 'nodemailer';

jest.mock('nodemailer', () => ({
  createTransport: jest.fn(() => ({
    sendMail: jest.fn().mockResolvedValue({ messageId: 'test-id' }),
  })),
}));

// Helper to get the current sendMail mock from the already-created transporter
function getSendMailMock() {
  const mockedCreateTransport = (nodemailer.createTransport as jest.Mock);
  return mockedCreateTransport.mock.results[0].value.sendMail as jest.Mock;
}

function makeRequest(body: object) {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('POST /api/contact', () => {
  // Import after mock is set up
  let POST: (req: Request) => Promise<Response>;

  beforeAll(async () => {
    ({ POST } = await import('@/app/api/contact/route'));
  });

  beforeEach(() => {
    getSendMailMock().mockClear();
    getSendMailMock().mockResolvedValue({ messageId: 'test-id' });
  });

  it('returns 200 on valid submission', async () => {
    const req = makeRequest({ name: 'John', email: 'john@example.com', message: 'Hello' });
    const res = await POST(req);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
  });

  it('returns 400 when name is missing', async () => {
    const req = makeRequest({ email: 'john@example.com', message: 'Hello' });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it('returns 400 when email is missing', async () => {
    const req = makeRequest({ name: 'John', message: 'Hello' });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it('returns 400 when message is missing', async () => {
    const req = makeRequest({ name: 'John', email: 'john@example.com' });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it('returns 500 when nodemailer throws', async () => {
    getSendMailMock().mockRejectedValueOnce(new Error('SMTP error'));
    const req = makeRequest({ name: 'John', email: 'john@example.com', message: 'Hello' });
    const res = await POST(req);
    expect(res.status).toBe(500);
  });
});
