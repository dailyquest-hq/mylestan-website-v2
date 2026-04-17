import { Resend } from 'resend';

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ data: { id: 'test-id' }, error: null }),
    },
  })),
}));

function getResendInstance() {
  return (Resend as jest.Mock).mock.results[0]?.value;
}

function makeRequest(body: object) {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

describe('POST /api/contact', () => {
  let POST: (req: Request) => Promise<Response>;

  beforeAll(async () => {
    ({ POST } = await import('@/app/api/contact/route'));
  });

  beforeEach(() => {
    jest.clearAllMocks();
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

  it('returns 400 for invalid email format', async () => {
    const req = makeRequest({ name: 'John', email: 'not-an-email', message: 'Hello' });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it('returns 400 when name exceeds 100 characters', async () => {
    const req = makeRequest({ name: 'a'.repeat(101), email: 'john@example.com', message: 'Hello' });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it('returns 400 when message exceeds 10000 characters', async () => {
    const req = makeRequest({ name: 'John', email: 'john@example.com', message: 'a'.repeat(10001) });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it('returns 500 when Resend throws', async () => {
    (Resend as jest.Mock).mockImplementationOnce(() => ({
      emails: { send: jest.fn().mockRejectedValue(new Error('API error')) },
    }));
    const req = makeRequest({ name: 'John', email: 'john@example.com', message: 'Hello' });
    const res = await POST(req);
    expect(res.status).toBe(500);
  });

  it('does not expose error details in response', async () => {
    (Resend as jest.Mock).mockImplementationOnce(() => ({
      emails: { send: jest.fn().mockResolvedValue({ data: null, error: { message: 'internal secret' } }) },
    }));
    const req = makeRequest({ name: 'John', email: 'john@example.com', message: 'Hello' });
    const res = await POST(req);
    expect(res.status).toBe(500);
    const json = await res.json();
    expect(JSON.stringify(json)).not.toContain('internal secret');
  });
});
