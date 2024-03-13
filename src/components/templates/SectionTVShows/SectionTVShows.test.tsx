import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import mockServer from '../../../utils/testing/mockServer';
import SectionTVShows from './SectionTVShows';

describe('Testing section tv shows', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  afterEach(() => mockServer.resetHandlers());
  test('Should display all tv shows data', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <SectionTVShows />
      </MemoryRouter>,
    );
    await waitFor(() => {
      expect(screen.queryByText('No TV shows were found...')).not.toBeInTheDocument();
      expect(screen.getByText(/wednesday/i)).toHaveTextContent('Wednesday');
      expect(screen.getByText(/ulice/i)).toHaveTextContent('Ulice');
    });
  });
});
