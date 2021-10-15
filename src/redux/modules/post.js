import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import moment from "moment";
import { apis } from '../../lib/axios';
import { actionCreators as imageActions } from './image';

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DEL_POST = "DEL_POST"

const setPost = createAction(SET_POST, (post_list) => ({post_list}))
const addPost = createAction(ADD_POST, (post_content) => ({post_content}))
const editPost = createAction(EDIT_POST, (post_id,post_content)=>({post_id,post_content}))
const delPost = createAction(DEL_POST, (post_id)=>({post_id}))

const initialState = {
    list:[]
}

// middleware
const getPostMiddleware = () => {
    return (dispatch) => {
      apis
        .getPost()
        .then((res) => {
          const post_list = res.data.result;
          dispatch(setPost(post_list));
        })
        .catch((err) => {
          console.error(err);
        });
    };
  };

  const addPostMiddleware = (post_content,post_title) => {
    return(dispatch, getState, {history}) => {

      const _file = getState().image.file;
      console.log(_file)
      let formData = new FormData()
      formData.append("image", _file)
      apis.upload(formData).then((res) => {
        const content = {
          title:post_title,
          content:post_content,
          image: res.data.resizeUrl,
        }
        apis.createPost(content).then(() => {
          dispatch(addPost(content));
          history.push('/');
          dispatch(imageActions.setPreview(null));
        }).catch((err) => {
          console.error(err);
        })

      }).catch((err) => {

        console.error(err);
      })
      
      
    }
  }

  const editPostMiddleware = (post_id = null, post_content, post_title) => {
    return(dispatch, getState, {history}) => {
      
      if(!post_id){
        console.log("게시물 정보가 없어요!");
        return
      }

      const _image = getState().image.preview;
      const _post_idx = getState().post.list.findIndex((p) => p.postId.toString() === post_id);
      const _post = getState().post.list[_post_idx];

      if(_image === _post.image){
        const content = {
          title:post_title,
          content:post_content,
          image: _image,
        }
        apis.edit_Post(post_id, content).then(() => {
          dispatch(editPost(post_id, content));
          history.push('/');
          dispatch(imageActions.setPreview(null));
        }).catch((err) => {
          console.error(err);
        })
      }else{
        const _file = getState().image.file;
        console.log(_file)
        let formData = new FormData()
        formData.append("image", _file)
        apis.upload(formData).then((res) => {

          console.log(res.data.resizeUrl)

          const content = {
            title:post_title,
            content:post_content,
            image: res.data.resizeUrl,
          }

          apis.edit_Post(post_id, content).then(() => {
            dispatch(editPost(post_id, content));
            history.push('/');
            dispatch(imageActions.setPreview(null));
          }).catch((err) => {
            console.error(err);
          })
      }).catch((err) => {
        console.error(err);
      })
      }
    }
  }

  const deletePostMiddleware = (post_id) => {
    return (dispatch, getState, {history}) => {
      if (!post_id) {
        window.alert("삭제할 수 없는 게시글이에요!");
        return;
      }

      apis.delPost(post_id).then((res)=>{
        dispatch(delPost(post_id));
        history.replace("/");
      }).catch((err) => {
        console.error(err);
      })
    }
  }

  const getOnePostMiddleware = (post_id) => {
    return (dispatch, getState, {history}) => {
      apis.getOnePost(post_id).then((res) => {
        const post_list = res.data.result;
        dispatch(setPost([post_list]));
      })
      .catch((err) => {
        console.error(err);
      });
    }
  }

export default handleActions(
    {
        [SET_POST]: (state, action) =>
        produce(state, (draft) => {
          draft.list = action.payload.post_list;
          console.log(draft.list)
        }),
        [ADD_POST]: (state, action) => 
        produce(state, (draft) => {
          draft.list.unshift(action.payload.post_content);
        }),
        [EDIT_POST]: (state, action) => 
        produce(state, (draft) => {
         let idx = draft.list.findIndex((p) => p.postId.toString() === action.payload.post_id);
         draft.list[idx] = {...draft.list[idx], ...action.payload.post_content}
        }),
        [DEL_POST]: (state, action) => 
        produce(state, (draft) => {
          let idx = draft.list.findIndex((p) => p.postId.toString() === action.payload.post_id);
          if (idx !== -1) {
            draft.list.splice(idx, 1);
          }
        })
    },
    initialState
);

const actionCreators = {
    setPost,
    getPostMiddleware,
    addPost,
    addPostMiddleware,
    editPost,
    editPostMiddleware,
    delPost,
    deletePostMiddleware,
    getOnePostMiddleware
  };
  
export { actionCreators };

