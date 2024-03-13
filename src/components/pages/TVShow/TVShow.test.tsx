import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../state/store';
import TVShow from './TVShow';
import mockServer from '../../../utils/testing/mockServer';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    showId: '119051',
  }),
}));

describe('TV Show page testing', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  afterEach(() => mockServer.resetHandlers());
  it('Should display all information', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <TVShow />
        </BrowserRouter>
      </Provider>,
    );
    await waitFor(() => {
      expect(getByText(/2 seasons/i)).toBeInTheDocument();
    });
  });
});
