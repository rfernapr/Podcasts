import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test App', () => {
    test('has header', () => {
        render(<App />);
        const headerTitle = screen.getByText("Podcaster");
        expect(headerTitle).toBeInTheDocument();
    });
});