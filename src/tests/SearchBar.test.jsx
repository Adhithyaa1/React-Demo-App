import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';


test('updates value on typing', () => {
let value = '';
const handleChange = (v) => (value = v);


render(<SearchBar value={value} onChange={handleChange} />);


const input = screen.getByPlaceholderText(/search/i);
fireEvent.change(input, { target: { value: 'john' } });


expect(value).toBe('john');
});