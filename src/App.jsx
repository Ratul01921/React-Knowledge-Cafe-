
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/Bookmarks/bookmarks';
import { useState } from 'react';

function App() {
 const [bookmarks, setBookmarks] = useState([]);
 const [readingTime, setReadingTime] = useState(0);

 const handleAddToBookmarks = blog => {
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks)
 }

 const handleReadingTime = (id, time) =>{
  const newReadingTime = parseInt(readingTime) + parseInt(time);
  setReadingTime(newReadingTime)
  const remainingBookMarks = bookmarks.filter(bookmark => bookmark.id !== id )
  setBookmarks(remainingBookMarks)
 }
  
  return (
    <>
     <Header></Header>
     <div className='md:flex w-11/12 mx-auto'>
     <Blogs handleAddToBookmarks ={handleAddToBookmarks } handleReadingTime={handleReadingTime} ></Blogs>
     <Bookmarks bookmarks = {bookmarks} readingTime ={readingTime}></Bookmarks>
     </div>
      
      
    </>
  )
}

export default App
