import './App.css'
import { Link } from 'react-router-dom';

const App = () => {
  return (
   <div className="main-contents">
    <Link to="https://main-site-nissy.netlify.app"><h1>メインページに移動</h1></Link>
   </div> 
  )
}

export default App
