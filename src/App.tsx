import './App.css'
import { Link } from 'react-router-dom';

const App = () => {
  return (
   <div className="main-contents">
    <Link to="https://dummysite-nissy.netlify.app"><h1>本ページに飛ぶ</h1></Link>
    <p>＊現在掲載中のサイトは、チュートリアルをもとに作成したダミーサイトです。</p>
   </div> 
  )
}

export default App
