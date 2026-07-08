import { render } from '@testing-library/react'
import { CheckIcon, GraduationCapIcon } from '@/components/icons'

describe('icons', () => {
  it('renders an svg that accepts className', () => {
    const { container } = render(<CheckIcon className="w-4 h-4" />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveClass('w-4')
  })

  it('is hidden from screen readers by default', () => {
    const { container } = render(<GraduationCapIcon />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })
})
