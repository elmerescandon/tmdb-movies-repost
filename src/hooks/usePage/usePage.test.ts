import { act, renderHook } from '@testing-library/react';
import usePage from './usePage';

describe('usePage custom hook testing', () => {
  it('Should change page', () => {
    const { result } = renderHook(() => usePage(1, 100, 10));
    const [state, dispatch] = result.current;
    expect(state.page).toBe(1);

    act(() => {
      dispatch({ type: 'SET_PAGE', page: 4 });
    });
    expect(result.current[0].page).toBe(4);
  });

  it('Should change elements', () => {
    const { result } = renderHook(() => usePage(1, 100, 10));
    const [state, dispatch] = result.current;
    expect(state.elements).toBe(100);

    act(() => {
      dispatch({ type: 'SET_ELEMENTS', elements: 150 });
    });
    expect(result.current[0].elements).toBe(150);
  });

  it('Should change count', () => {
    const { result } = renderHook(() => usePage(1, 100, 10));
    const [state, dispatch] = result.current;
    expect(state.count).toBe(10);

    act(() => {
      dispatch({ type: 'SET_COUNT', count: 30 });
    });
    expect(result.current[0].count).toBe(30);
  });
});
