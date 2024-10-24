
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/Bookmarks/bookmarks';

function App() {

  
  return (
    <>
     <Header></Header>
     <div className='md:flex w-11/12 mx-auto'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
      
      
    </>
  )
}

export default App
