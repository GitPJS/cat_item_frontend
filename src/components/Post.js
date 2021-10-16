import React from 'react';
import { Grid, Text, Image } from "../elements";

const Post = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Grid box_shadow="5px 5px 5px 5px gray" hover>
                    <Image src={props.image} />
                    <Grid padding="13px 0px 0px 0px">
                        <Text bold size="20px" >{props.title}</Text>
                        <Text>{props.content}</Text>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Post;