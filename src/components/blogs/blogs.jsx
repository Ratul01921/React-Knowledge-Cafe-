
import { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';
const Blogs = ({handleAddToBookmarks, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className='w-2/3'>
            <h1 className='text-4xl'>Blogs: {blogs.length}</h1>

            <div className='space-y-8'>
                {
                    blogs.map(blog =>
                         <Blog key={blog.id} 
                         handleAddToBookmarks={handleAddToBookmarks}
                         handleReadingTime={handleReadingTime}
                         blog={blog}
                         ></Blog>)
                }
            </div>
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookmarks : PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blogs;