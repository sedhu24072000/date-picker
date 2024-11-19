import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should render the App without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});

