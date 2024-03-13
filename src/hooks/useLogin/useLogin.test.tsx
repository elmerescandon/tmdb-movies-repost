import { act, renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ReactElement } from 'react';
import store from '../../state/store';
import mockServer from '../../utils/testing/mockServer';
import useLogin from './useLogin';

describe('useLogin hook testing', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  afterEach(() => mockServer.resetHandlers());
  it('Should work the hook', async () => {
    const wrapper = ({ children }: { children: ReactElement }) => (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
    const { result } = renderHook(() => useLogin(), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe('');
    });

    await act(() => {
      result.current.requestToken();
    });
  });
});
export {};
