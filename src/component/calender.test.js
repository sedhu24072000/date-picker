import { render } from '@testing-library/react';
import Calendar from './calendar';

test('Calendar Component', () => {
    render(<Calendar />);

    const calendarCell = document.querySelector('.MuiDateCalendar-root'); // Adjust selector if neede
    expect(calendarCell).toBeInTheDocument();
});
