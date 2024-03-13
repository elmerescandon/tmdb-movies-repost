import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Error from './Error';
import store from '../../../state/store';

const errorMessage = 'Oh no, looks like you entered the wrong page. Please return to home pressing on the masks!';
describe('Error page testing', () => {
  test('Should display error message', () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Error />
        </BrowserRouter>
      </Provider>,
    );
    expect(getByText(/oh no, looks like you entered/i)).toHaveTextContent(errorMessage);
  });
});

export {};
