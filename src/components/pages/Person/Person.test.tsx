import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Person from './Person';
import store from '../../../state/store';
import mockServer from '../../../utils/testing/mockServer';

describe('Person page testing', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  afterEach(() => mockServer.resetHandlers());
  it('Should display all information', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/7624']}>
          <Person />
        </MemoryRouter>
      </Provider>,
    );
    await waitFor(() => {
      expect(screen.getByText('Stan Lee')).toHaveTextContent('Stan Lee');
      expect(screen.getByText(/writing/i)).toHaveTextContent('Known for: Writing');
    });
  });
});
