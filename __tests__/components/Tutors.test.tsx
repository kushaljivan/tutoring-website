import { render, screen } from '@testing-library/react'
import Tutors from '@/components/Tutors'

describe('Tutors', () => {
  it('renders the section heading', () => {
    render(<Tutors />)
    expect(
      screen.getByRole('heading', { name: /meet our tutors/i })
    ).toBeInTheDocument()
  })

  it('renders at least three tutor cards with school and specialty', () => {
    render(<Tutors />)
    const cards = screen.getAllByRole('heading', { level: 3 })
    expect(cards.length).toBeGreaterThanOrEqual(3)
    expect(screen.getAllByText(/class of/i).length).toBeGreaterThanOrEqual(3)
  })
})
