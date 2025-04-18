import { TNavItem } from '@/components/common/types';
import { UiContextState } from './UiContext';

type UiActionTypes = { type: '[Ui] - update loading'; payload: boolean };

const uiReducer = (state: UiContextState, action: UiActionTypes): UiContextState => {
  switch (action.type) {
    case '[Ui] - update loading':
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default uiReducer;
