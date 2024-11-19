import { render } from '@testing-library/react';
import Icons from './icons';

test('Icons Component', () => {
    render(<Icons/>);

    const todayIcon =document.querySelector('div');
    expect(todayIcon).toBeInTheDocument();
});
