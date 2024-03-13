import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ReactElement } from 'react';
import useAuth from './useAuth';
import store from '../../state/store';
import mockServer from '../../utils/testing/mockServer';

describe('useAuth hook testing', () => {
  beforeAll(() => mockServer.listen());
  afterAll(() => mockServer.close());
  afterEach(() => mockServer.resetHandlers());
  it('Should work the hook', async () => {
    const wrapper = ({ children }: { children: ReactElement }) => (
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>{children}</MemoryRouter>
      </Provider>
    );
    const { result } = renderHook(() => useAuth(), {
      wrapper,
    });
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe('');

    await waitFor(() => {
      result.current.serverLogIn({
        id: '123456789',
        password: 'raul123',
        userName: 'rauloestu',
      });
    });
  });
});
export {};
