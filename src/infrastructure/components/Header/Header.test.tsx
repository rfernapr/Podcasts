import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Test Header', () => {

    const component = (
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    )

    test('should have title', () => {
        render(component);
        const title = screen.getByText("Podcaster");
        expect(title).toBeInTheDocument();
    });
});