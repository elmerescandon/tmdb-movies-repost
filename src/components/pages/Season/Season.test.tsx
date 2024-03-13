import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../state/store';
import Season from './Season';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    showId: '2153',
    seasonId: '1',
  }),
}));

describe('Movie page testing', () => {
  it('Should display all information', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Season />
        </BrowserRouter>
      </Provider>,
    );
    await waitFor(() => {
      expect(screen.queryAllByText(/season/i)).not.toBe(0);
    });
  });
});
