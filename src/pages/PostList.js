import React from 'react';
import Post from '../components/Post';
import { Grid,Button } from "../elements";
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postCreators } from '../redux/modules/post';

const PostList = (props) => {
    const { history } = props;
    const dispatch = useDispatch();
    const lists = useSelector((state) => state.post.list);

    React.useEffect(() => {
        dispatch(postCreators.getPostMiddleware());
    },[])


    return (
        <React.Fragment>
            <Grid padding="20px 0px" is_grid >
                    {lists.map((list) => {
                        return(
                            <Grid margin="8px 0px" padding="90px">
                                <Post key={list.id} {...list}/>
                            </Grid>
                        )
                    })}
            </Grid>
            <Button
          is_float
          _onClick={() => {
            history.push("/write");
          }}
        >
          +
        </Button>
        </React.Fragment>
    );
};

PostList.defaultProps = {
}
    

export default PostList;