import React from 'react';
import { Button, Card, CardBody, CardText } from 'reactstrap';

function Post({post={title:"This is default post title", content:"This is default post title"}}){
    return(
         <Card  className='border-0 shadow-sm mt-3'>
            <CardBody>
                <h1>
                    {post.title}
                </h1>
                <CardText>
                   {post.content}
                </CardText>
                <div>
                    <Button>Read More</Button>
                </div>
            </CardBody>
         </Card>
    )
}

export default Post;