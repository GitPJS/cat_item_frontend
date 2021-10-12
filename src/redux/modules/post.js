import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import moment from "moment";
import { apis } from '../../lib/axios';
import {actionCreators as imageActions} from './image';

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST"

const setPost = createAction(SET_POST, (post_list) => ({post_list}))
const addPost = createAction(ADD_POST, (post_content) => ({post_content}))

const initialState = {
    list:[]
}

// middleware
const getPostMiddleware = () => {
    return (dispatch) => {
      apis
        .getPost()
        .then((res) => {
          const post_list = res.data;
          console.log(post_list);
          dispatch(setPost(post_list));
        })
        .catch((err) => {
          console.error(err);
        });
    };
  };

  const addPostMiddleware = (post_content) => {
    return(dispatch, getState, {history}) => {
      apis.createPost().then((res) => {
        dispatch(addPost(post_content));
        history.push('/');
        dispatch(imageActions.setPreview(null));
      }).catch((err) => {
        console.error(err);
      })
    }
  }

export default handleActions(
    {
        [SET_POST]: (state, action) =>
        produce(state, (draft) => {
          draft.list = action.payload.post_list;
        }),
        [ADD_POST]: (state, action) => 
        produce(state, (draft) => {
          draft.list.unshift(action.payload.post_content);
        })
    },
    initialState
);

const actionCreators = {
    setPost,
    getPostMiddleware,
    addPost,
    addPostMiddleware
  };
  
export { actionCreators };

