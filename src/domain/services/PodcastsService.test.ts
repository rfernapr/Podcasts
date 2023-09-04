import { PodcastService } from './PodcastsService';
import { mockPodcastRespository } from '../../infrastructure/repositories/mockPodcasts.repository';

describe('Test PodcastsService', () => {

    const service = new PodcastService(mockPodcastRespository);

    test('should return podcasts', async () => {
        const results = await service.getPodcasts();
        expect(results.length > 0);
    });

    test('should return podcast detail', async () => {
        const results = await service.getPodcastDetail("1234");
        expect(results.length > 0);
    });
    
});