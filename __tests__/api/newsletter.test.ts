import { Resend } from 'resend';

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ data: { id: 'test-id' }, error: null }),
    },
  })),
}));

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
    jest.clearAllMocks();
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

  it('returns 400 for invalid email format', async () => {
    const req = makeRequest({ email: 'not-an-email' });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it('returns 400 when email exceeds 254 characters', async () => {
    const req = makeRequest({ email: 'a'.repeat(246) + '@test.com' });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it('returns 500 when Resend throws', async () => {
    (Resend as jest.Mock).mockImplementationOnce(() => ({
      emails: { send: jest.fn().mockRejectedValue(new Error('API error')) },
    }));
    const req = makeRequest({ email: 'subscriber@example.com' });
    const res = await POST(req);
    expect(res.status).toBe(500);
  });

  it('does not expose error details in response', async () => {
    (Resend as jest.Mock).mockImplementationOnce(() => ({
      emails: { send: jest.fn().mockResolvedValue({ data: null, error: { message: 'internal secret' } }) },
    }));
    const req = makeRequest({ email: 'subscriber@example.com' });
    const res = await POST(req);
    expect(res.status).toBe(500);
    const json = await res.json();
    expect(JSON.stringify(json)).not.toContain('internal secret');
  });
});
