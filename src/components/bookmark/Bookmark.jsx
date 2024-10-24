import PropTypes from "prop-types";


const Bookmark = ({bookmark}) => {
    const {title} = bookmark;

    return (
        <div className="bg-slate-400 text-xl m-2 p-4">
            <h3>{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;