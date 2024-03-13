import { Dispatch, useReducer } from 'react';

interface State {
  page: number;
  elements: number;
  count: number;
}

type Action =
  | { type: 'SET_PAGE'; page: number }
  | { type: 'SET_ELEMENTS'; elements: number }
  | { type: 'SET_COUNT'; count: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_PAGE':
      return { ...state, page: action.page };
    case 'SET_ELEMENTS':
      return { ...state, elements: action.elements };
    case 'SET_COUNT':
      return { ...state, count: action.count };
    default:
      return state;
  }
};

const usePage = (
  initialPage: number,
  initialElements: number,
  initialCount: number,
): [State, (action: Action) => void] => {
  const [state, dispatch] = useReducer(reducer, {
    page: initialPage,
    elements: initialElements,
    count: initialCount,
  });
  return [state, dispatch] as [State, Dispatch<Action>];
};

export default usePage;
