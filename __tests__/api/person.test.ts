function makeRequest() {
  return new Request('http://localhost/api/person', { method: 'GET' });
}

describe('GET /api/person', () => {
  let GET: (req: Request) => Promise<Response>;

  beforeAll(async () => {
    ({ GET } = await import('@/app/api/person/route'));
  });

  it('returns 200 with JSON', async () => {
    const res = await GET(makeRequest());
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.name).toBe('Myles Yeo Tan');
  });

  it('includes aliases array', async () => {
    const res = await GET(makeRequest());
    const json = await res.json();
    expect(json.aliases).toContain('Myles Tan');
  });

  it('includes credentials', async () => {
    const res = await GET(makeRequest());
    const json = await res.json();
    expect(json.credentials.some((c: string) => c.includes('RFP'))).toBe(true);
    expect(json.credentials.some((c: string) => c.includes('CTA'))).toBe(true);
  });

  it('includes social links', async () => {
    const res = await GET(makeRequest());
    const json = await res.json();
    expect(json.social.linkedin).toContain('linkedin.com');
    expect(json.social.youtube).toContain('youtube.com');
  });

  it('sets cache-control header', async () => {
    const res = await GET(makeRequest());
    expect(res.headers.get('Cache-Control')).toContain('max-age=86400');
  });
});
