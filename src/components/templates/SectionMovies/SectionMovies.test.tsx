import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import mockServer from '../../../utils/testing/mockServer';
import SectionMovies from './SectionMovies';

describe('Testing section movies', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  afterEach(() => mockServer.resetHandlers());
  test('Should display all movie data', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <SectionMovies />
      </MemoryRouter>,
    );
    await waitFor(() => {
      expect(screen.queryByText('No movies were found...')).not.toBeInTheDocument();
      expect(screen.getByText(/puss in boots/i)).toHaveTextContent('Puss in Boots: The Last Wish');
      expect(screen.getByText(/avatar: the way/i)).toHaveTextContent('Avatar: The Way of Water');
    });
  });
});
