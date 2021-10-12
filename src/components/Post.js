import React from 'react';
import { Grid, Text, Image } from "../elements";

const Post = (props) => {
    return (
        <React.Fragment>
            <Image src={props.image} />
            <Text>{props.content}</Text>
        </React.Fragment>
    );
};

export default Post;