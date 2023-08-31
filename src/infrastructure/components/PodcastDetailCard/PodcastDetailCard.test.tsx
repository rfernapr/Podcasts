import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PodcastDetailCard } from './PodcastDetailCard';

describe('Test Podcast Detail Card', () => {

    const podcastImage = "https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg";
    const podcastName = "The Joe Budden Podcast";
    const podcastArtist = "The Joe Budden Network";
    const podcastDescription = "Lorem ipsum dolor sit amet...";
    const podcastId = 1234;

    const component = (
        <MemoryRouter>
            <PodcastDetailCard
                podcastArtworkUrl={podcastImage}
                podcastName={podcastName}
                podcastArtist={podcastArtist}
                podcastDescription={podcastDescription}
                podcastId={podcastId}
            />
        </MemoryRouter>
    )

    test('has image', () => {
        render(component);
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
    });

    test('has title', () => {
        render(component);
        const title = screen.getByText(podcastName);
        expect(title).toBeInTheDocument();
    });

    test('has author', () => {
        render(component);
        const author = screen.getByText("by " + podcastArtist);
        expect(author).toBeInTheDocument();
    });

    test('has description', () => {
        render(component);
        const description = screen.getByText(podcastDescription);
        expect(description).toBeInTheDocument();
    });

});