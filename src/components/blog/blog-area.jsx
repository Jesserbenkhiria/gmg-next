import React from 'react';
import blog_data from '../../data/blog-data';
import BlogItems from './blog-items';

// blog_items
const blog_items = blog_data.filter(blog => blog.blog_page);

const BlogArea = () => {
  return (
    <>
      <div className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="postbox__wrapper">
                {/*BlogItems start*/}
                <BlogItems itemsPerPage={20} items={blog_items} />
                {/*BlogItems end*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArea;
