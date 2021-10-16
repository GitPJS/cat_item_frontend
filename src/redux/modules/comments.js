import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import moment from "moment";
import { apis } from '../../lib/axios';
import { actionCreators as commentsActions } from './comments';

const SET_COMMENTS = "SET_COMMENTS";
const ADD_COMMENTS = "ADD_COMMENTS";
const EDIT_COMMENTS = "EDIT_COMMENTS";
const DEL_COMMENTS = "DEL_COMMENTS";

const setComments = createAction(SET_COMMENTS, (replysampledata) => ({replysampledata}))

const initialState = {
    list:[]
}



