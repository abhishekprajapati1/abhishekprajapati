import React, { Component } from 'react'

export default class Blogs extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts:[],
    }
  }

  getDevPosts = async ()=>{
    // let devAPI = 'https://dev.to/api/articles?username=abhi0661236';
    let apiKey = `AIzaSyAYWWNpQOVhaMj42lhYso8y9XLpLXvHul0`;
    let bloggerApi = `https://www.googleapis.com/blogger/v3/blogs/8504306833601352345/posts?key=${apiKey}`;
    let response = await fetch(bloggerApi);
    let data = await response.json();
    let postArray = data.items;
    postArray.pop();
    this.setState({posts: postArray});
  }


  render() {
    this.getDevPosts();
    return (
      <div>
        <div className='title-section'>
          <h1>RECENT<span> BLOGS</span></h1><span className="title-bg">Resume</span>
        </div>
  
        <div className="posts-container">
          <div className="post-gallery">
            {
              (this.state.posts.length <= 0)?'':(
                this.state.posts.map((post) => {
                  let content = post.content.replace( /(<([^>]+)>)/ig, '');
                  content = content.replace(/&nbsp;/ig, ' ').substring(0, 150) + "...";
                  return (
                    <div className='post' key={post.id}>
                      {/* <img src={post.social_image} alt="post image" /> */}
                      <div>
                        <h2>{post.title}</h2>
                        <p>{content}</p>
                        <a href={post.url} target='_blank'>Read More</a>
                      </div>
                    </div>
                  )
                })
              )
            }
          </div>
  
        </div>
  
      </div>
    )
  }
}
