import { render, screen } from '@testing-library/react'
import Tutors from '@/components/Tutors'

describe('Tutors', () => {
  it('renders the section heading', () => {
    render(<Tutors />)
    expect(
      screen.getByRole('heading', { name: /meet our tutors/i })
    ).toBeInTheDocument()
  })

  it('renders a tutor card with name, school, and specialty', () => {
    render(<Tutors />)
    expect(
      screen.getByRole('heading', { level: 3, name: /kushal jivan/i })
    ).toBeInTheDocument()
    expect(
      screen.getByText(/virginia tech · applied math & computer science/i)
    ).toBeInTheDocument()
    expect(screen.getByText(/math · cs · reading & writing · sat/i)).toBeInTheDocument()
  })
})
