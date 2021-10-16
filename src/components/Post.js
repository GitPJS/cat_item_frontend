import React from 'react';
import { Grid, Text, Image } from "../elements";
import { history } from "../redux/configureStore";

const Post = (props) => {

    return (
        <React.Fragment>
            <Grid box_shadow="5px 5px 5px 5px gray" hover _onClick={() => {
                                history.push(`/post/${props.postId}`);
                            }}>
                <Image src={props.image} />
                <Text >{props.title}</Text>
                <Text >{props.content}</Text>
            </Grid>
        </React.Fragment>
    );
};

export default Post;