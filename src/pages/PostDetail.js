import React  from 'react';
import { Grid, Comments, Detail } from './index';

const PostDetail = (props) => {
    
    return (
        <React.Fragment>
            <Grid padding="16px">
                {/* 상세페이지 카드 */}
                <Grid is_flex>
                    <Detail />
                </Grid>

                <hr style={{
                    height: '2px'}}/>
                <Grid>
                    <Comments/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default PostDetail;