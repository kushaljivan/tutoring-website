/**
 * @jest-environment node
 */
import { Resend } from 'resend'
import { POST } from '@/app/api/contact/route'

jest.mock('resend', () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({ data: { id: 'mock-id' }, error: null }),
    },
  })),
}))

function makeRequest(body: Record<string, unknown>) {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    process.env.RESEND_API_KEY = 'test-key'
    process.env.CONTACT_EMAIL = 'kushal@example.com'
  })

  it('returns 400 when name is missing', async () => {
    const res = await POST(makeRequest({ email: 'a@b.com', message: 'hi' }))
    expect(res.status).toBe(400)
  })

  it('returns 400 when email is missing', async () => {
    const res = await POST(makeRequest({ name: 'Jamie', message: 'hi' }))
    expect(res.status).toBe(400)
  })

  it('returns 400 when message is missing', async () => {
    const res = await POST(makeRequest({ name: 'Jamie', email: 'a@b.com' }))
    expect(res.status).toBe(400)
  })

  it('returns 200 with success:true on valid input', async () => {
    const res = await POST(
      makeRequest({ name: 'Jamie', email: 'jamie@example.com', message: 'Hello' })
    )
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.success).toBe(true)
  })

  it('returns 400 on malformed JSON body', async () => {
    const req = new Request('http://localhost/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: 'not valid json',
    })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('returns 200 silently when honeypot field is filled', async () => {
    const res = await POST(
      makeRequest({ name: 'Bot', email: 'bot@spam.com', message: 'Buy now!', _hp: 'trap' })
    )
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.success).toBe(true)
  })

  it('returns 500 when Resend reports an error', async () => {
    jest.mocked(Resend).mockImplementationOnce(() => ({
      emails: {
        send: jest.fn().mockResolvedValue({ data: null, error: { message: 'API failure' } }),
      },
    } as unknown as Resend))
    const res = await POST(
      makeRequest({ name: 'Jamie', email: 'jamie@example.com', message: 'Hello' })
    )
    expect(res.status).toBe(500)
  })
})
