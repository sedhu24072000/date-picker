import { render, screen } from '@testing-library/react';
import Footer from './footer';

test('Footer Component', () => {
    render(<Footer />);

    const closeButton = screen.getByRole('button');
    expect(closeButton).toBeInTheDocument();
});
