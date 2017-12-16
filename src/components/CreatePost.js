import React, { Component } from 'react';


let CreatePost = (props) => {
  return (
    <div className="Container">
      <div className="row">
        <div className="col-md-12">
          <form>
            <div class="form-group">
              <label for="title">Post Title</label>
              <input name="title" onChange={props.onChange} type="text" className="form-control" id="title" placeholder="Post Title"/>
            </div>
            <div class="form-group">
              <label for="body">Body</label>
              <input name="body" onChange={props.onChange} type="text" className="form-control" id="body" placeholder="post text"/>
            </div>
            <div class="form-group">
              <label for="author">Author</label>
              <input name="author" onChange={props.onChange}type="text" className="form-control" id="body" placeholder="post text" />
            </div>
              <button type="submit" className="btn btn-default" onClick={props.onSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default CreatePost;
