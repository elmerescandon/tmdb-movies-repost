import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../state/store';
import Home from './Home';

describe('Movie page testing', () => {
  it('Should display all information', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );
    await waitFor(() => {
      expect(screen.queryByText(/movies/i)).toHaveTextContent('Movies');
      expect(screen.queryByText(/tv/i)).toHaveTextContent('TV Shows');
    });
  });
});
