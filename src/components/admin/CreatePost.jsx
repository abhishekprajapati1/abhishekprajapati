import React, { Children, useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './styles/CreatePost.css';
const ContentChild = () => {
  return (
    <div className="con-card">
      <input type="text" name="heading" />
      <textarea name="post-content" id="description" rows='10' ></textarea>
    </div>
  )
}



const CreatePost = () => {
  // const [contentChildren, setContentChildren] = useState([]);
  const childData = [
    {
      id: 1,
      inputType: 'text',
      textareaRows: 10
    }
  ]
  const handleAddClick = () => {
    childData.push({
      id: childData[childData.length - 1]
    });
    // console.log(contentChildren);
    // setContentChildren(contentChildren);
  }



  return (
    <div className='createpost-wrapper'>
      <h1>Create <span style = {{color: '#FFB400'}}>Article</span> </h1>
      <form>
        <div className='input-item'>
          <label htmlFor="title">Post Title : </label>
          <input type="text" id='title' name='post-title' />
        </div>
        <div className='input-item'>
          <label htmlFor='thumbnail'>Thumbnail Photo :</label>
          <input type="file" name="thumbnail-photo" id="thumbnail" />
        </div>
        <div className="input-item">
          <label htmlFor="content">Content:</label>
          <div className="App">
                <CKEditor
                    editor={ ClassicEditor }
                    data="Create an Article"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        </div>
        <div className='create-post-button'>

          <Button className='button' variant='contained' color='success'>Add Post</Button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost;