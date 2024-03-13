import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import mockServer from '../../../utils/testing/mockServer';
import Login from './Login';
import store from '../../../state/store';

describe('Login page testing', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  afterEach(() => mockServer.resetHandlers());
  it('Should display the title', () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByText(/filmoteca/i)).toHaveTextContent('Filmoteca');
    const inputLogin = getByPlaceholderText(/username/i) as HTMLInputElement;
    fireEvent.change(inputLogin, { target: { value: 'raulestu' } });
    expect(inputLogin.value).toBe('raulestu');
  });
});
