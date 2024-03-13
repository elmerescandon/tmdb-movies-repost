import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../../../state/store';
import mockServer from '../../../utils/testing/mockServer';
import Movie from './Movie';

describe('Movie page testing', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  afterEach(() => mockServer.resetHandlers());
  it('Should display all information', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/411']}>
          <Movie />
        </MemoryRouter>
      </Provider>,
    );
    await waitFor(() => {
      expect(screen.getByText(/143/i)).toHaveTextContent('143');
    });
  });
});
