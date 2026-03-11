import React from 'react';
const PostItem = ({ post }) => (
  <div className="p-3 border mb-3 bg-light rounded shadow-sm">
    <h6 className="fw-bold text-danger text-uppercase">{post.title}</h6>
    <p className="small mb-0 text-secondary">{post.body}</p>
  </div>
);
export default PostItem;