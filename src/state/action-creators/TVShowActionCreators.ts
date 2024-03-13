import { TVShowActionType } from '../action-types';

export const tvShowSetTitle = (name: string) => ({
  type: TVShowActionType.SET_NAME,
  payload: name,
});

export const tvShowUnsetTitle = () => ({
  type: TVShowActionType.UNSET_NAME,
});
