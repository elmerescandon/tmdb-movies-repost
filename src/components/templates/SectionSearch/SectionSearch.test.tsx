import { MemoryRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import mockServer from '../../../utils/testing/mockServer';
import SectionSearch from './SectionSearch';

describe('Testing section search', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  afterEach(() => mockServer.resetHandlers());
  test('Should display search data', async () => {
    const { findByTestId, findByAltText } = render(
      <MemoryRouter initialEntries={['/search']}>
        <SectionSearch />
      </MemoryRouter>,
    );

    await waitFor(() => findByTestId('loader-container'));
    const imageContainer = await findByAltText('home-alone-wait');
    expect(imageContainer).toHaveAttribute('class', 'section-search__image--wait');
  });
});
