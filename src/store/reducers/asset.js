import { createAction, handleActions } from "redux-actions";
export const updateBorrowAsset = createAction("UPDATE_BORROW_ASSET");
export const updateWithdraw = createAction("UPDATE_WITHDRAW");

const initialState = {
  b_asset_name: 'Tether',
  b_apm: 0.13,
  withdraw: ''
};


export default handleActions(
  {
    "UPDATE_BORROW_ASSET": (state, { payload } ) => ({
      ...state,
      b_asset_name: payload.b_asset_name,
      b_apm: payload.b_apm
    }),
    "UPDATE_WITHDRAW": (state, { payload } ) => ({
      ...state,
      withdraw: payload.withdraw,
    }),
  },
  initialState
);
