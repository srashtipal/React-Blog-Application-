import React from 'react';
import {  Card, CardBody, CardText, } from 'reactstrap';
import { Link } from 'react-router-dom';

function Post({post={title:"This is default post title", content:"This is default post title"}}){
    return(
         <Card  className='border-0 shadow-sm mt-3'>
            <CardBody>
                <h1>
                    {post.title}
                </h1>
                <CardText>
                   {post.content.substring(0,60)}.....
                </CardText>
                <div>
                <Link className='btn btn-secondary border-0' to= '/posts'>Read More</Link>
                </div>
            </CardBody>
         </Card>
    )
}

export default Post;