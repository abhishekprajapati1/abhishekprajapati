import React from 'react';
import {useParams} from 'react-router-dom';


const Blog = (props) => {
  const {id} = useParams();
  const posts = props.posts;
  const getPost = (post) => {
    if(post.id === parseInt(id)){
        return post;
    }
  }
  const post = posts.filter(getPost)[0];
//   console.log(post);


  return (
    <div className='blogpage-wrapper'>
        <div className="blog-title">
            <h1>{post.post_title}</h1>
        </div>
        <hr />
        <div className="post-content">
            {
                post.post_data.map((data)=>{
                    switch (data.type) {
                        case "paragraph":
                            return <p>{data.content}</p>
                            break;
                        case "code":
                            return <code>{data.content}</code>
                            break;
                        case "sub-heading":
                            return <h3>{data.content}</h3>
                            break;
                        default:
                            return <div></div>
                            break;
                    }
                    
                })
            }
        </div>
    </div>
  )
}

export default Blog