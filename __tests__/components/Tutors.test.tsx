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

  it('lists the founder first and the new tutors after', () => {
    render(<Tutors />)
    const names = screen
      .getAllByRole('heading', { level: 3 })
      .map((h) => h.textContent)
    expect(names).toEqual(['Kushal Jivan', 'Henock', 'Vanika', 'Shanmukha'])
    expect(screen.getAllByText('Founder')).toHaveLength(1)
    expect(screen.getAllByText('Tutor')).toHaveLength(3)
  })
})
