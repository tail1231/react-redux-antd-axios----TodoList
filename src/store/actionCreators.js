import {
  CHANG_INPUT_VALUE,
  ADD_LIST_ITEM,
  DEL_LIST_ITEM,
  INIT_LIST_ITEM
} from "./actionTypes";
import axios from "axios";

export const getInputValueAction = value => ({
  type: CHANG_INPUT_VALUE,
  value
});
export const getAddListItemAction = value => ({
  type: ADD_LIST_ITEM
});
export const getDelListItemAction = index => ({
  type: DEL_LIST_ITEM,
  index
});
export const initListItemAction = data => ({
  type: INIT_LIST_ITEM,
  data
});

export const getTodoList = () => {
  return (dispatch) => {
    axios
      .get("https://www.easy-mock.com/mock/5dbce35e7a0e617ae42ee25c/todolist/todolist")
      .then(res => {
        const action = initListItemAction(res.data.data.list);
        dispatch(action);
      });
  };
};
