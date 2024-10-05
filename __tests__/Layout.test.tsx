import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from '../craft';

describe('Layout component', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Layout><div>Test content</div></Layout>);
    expect(getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Layout className="custom-class"><div>Test</div></Layout>);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
