import './App.css'
import { Link } from 'react-router-dom';

const App = () => {
  return (
   <div className="main-contents">
    <Link to="https://main-site-nissy.netlify.app"><h1>本ページに飛ぶ</h1></Link>
   </div> 
  )
}

export default App
