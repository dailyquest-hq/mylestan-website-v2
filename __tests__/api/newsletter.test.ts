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
  return new Request('http://localhost/api/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('POST /api/newsletter', () => {
  let POST: (req: Request) => Promise<Response>;

  beforeAll(async () => {
    ({ POST } = await import('@/app/api/newsletter/route'));
  });

  beforeEach(() => {
    getSendMailMock().mockClear();
    getSendMailMock().mockResolvedValue({ messageId: 'test-id' });
  });

  it('returns 200 on valid email', async () => {
    const req = makeRequest({ email: 'subscriber@example.com' });
    const res = await POST(req);
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.success).toBe(true);
  });

  it('returns 400 when email is missing', async () => {
    const req = makeRequest({});
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it('returns 500 when nodemailer throws', async () => {
    getSendMailMock().mockRejectedValueOnce(new Error('SMTP error'));
    const req = makeRequest({ email: 'subscriber@example.com' });
    const res = await POST(req);
    expect(res.status).toBe(500);
  });
});
