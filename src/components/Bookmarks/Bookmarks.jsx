import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='w-1/3 '>
            <div className='bg-purple-300 p-4 mt-6'>
                <h3>Spent time on read : {readingTime} min</h3>
            </div>
            <div className='bg-gray-300 pt-4 mt-4'>
            <h3>Bookmarked Blogs: {bookmarks.length}</h3>


{
    bookmarks.map((bookmark, idx) => <Bookmark key={idx}
         bookmark={bookmark}></Bookmark>)
}
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;