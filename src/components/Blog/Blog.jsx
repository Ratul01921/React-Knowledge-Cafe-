import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog, handleAddToBookmarks, handleReadingTime}) => {
    const { id, cover, title, author_img, author, posted_date, reading_time, hashtag } = blog
    return (
        <div>

            <div className="m-5 p-4 space-y-2">
                <img className="w-full" src={cover} alt="" />
                <div className="flex justify-between items-center ">
                    <div className="flex justify-center items-center gap-4">
                        <img className="w-16 h-16 object-cover rounded-full" src={author_img} alt="" />
                        <div>
                            <p className="text-2xl font-bold">{author}</p>
                            <p className="text-sm font-semibold ">{posted_date} </p>
                        </div>
                    </div>
                    <div className="flex gap-2 ">
                        <p>{reading_time} min read</p>
                        <button onClick={() => handleAddToBookmarks(blog)} className="text-2xl"><FaBookmark></FaBookmark></button>
                    </div>
                </div>
                <h1 className="text-4xl font-bold">{title}</h1>
                <p>{hashtag}</p>

                <div  >
                    <button onClick={() => handleReadingTime(id, reading_time)}  className="text-purple-800 font-bold underline">Mark as read </button>
                </div>

                
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blog;