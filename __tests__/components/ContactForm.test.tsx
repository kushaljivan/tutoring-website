import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '@/components/ContactForm'

describe('ContactForm', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/name \*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email \*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message \*/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('shows validation errors when submitting with empty required fields', async () => {
    render(<ContactForm />)
    await userEvent.click(screen.getByRole('button', { name: /send message/i }))
    expect(screen.getByText('Name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Message is required')).toBeInTheDocument()
  })

  it('shows success message after successful submission', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: true })
    render(<ContactForm />)
    await userEvent.type(screen.getByLabelText(/name \*/i), 'Jamie Smith')
    await userEvent.type(screen.getByLabelText(/email \*/i), 'jamie@example.com')
    await userEvent.type(screen.getByLabelText(/message \*/i), 'I need SAT help')
    await userEvent.click(screen.getByRole('button', { name: /send message/i }))
    await waitFor(() =>
      expect(screen.getByText('Message sent!')).toBeInTheDocument()
    )
  })

  it('shows error message when submission fails', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false })
    render(<ContactForm />)
    await userEvent.type(screen.getByLabelText(/name \*/i), 'Jamie Smith')
    await userEvent.type(screen.getByLabelText(/email \*/i), 'jamie@example.com')
    await userEvent.type(screen.getByLabelText(/message \*/i), 'I need SAT help')
    await userEvent.click(screen.getByRole('button', { name: /send message/i }))
    await waitFor(() =>
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    )
  })
})
