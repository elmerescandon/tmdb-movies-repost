import { TVShowActionType } from '../action-types';

interface SetNameTVShowAction {
  type: TVShowActionType.SET_NAME;
  payload: string;
}

interface UnsetNameTVShowAction {
  type: TVShowActionType.UNSET_NAME;
}

interface DefaultNothing {
  type: '';
}

type TVShowActions =
  | SetNameTVShowAction
  | UnsetNameTVShowAction
  | DefaultNothing;

export default TVShowActions;
