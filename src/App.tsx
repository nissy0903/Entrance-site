import './App.css'
import { Link } from 'react-router-dom';

const App = () => {
  return (
   <div className="main-contents">
    <Link to="https://main-site-nissy.netlify.app"><h1>制作物1 : Toolbox</h1></Link>
    <p>便利機能を集めたアプリを制作しました。</p>
    <Link to="https://dynamic-pie-0fcaad.netlify.app/"><h1>制作物2 : 林檎ゲーム</h1></Link>
    <p> 自分の地元の青森県から着想を得て、林檎を時間内に収穫する数を競うゲームを作成しました。制限時間を設けてゲームに緊迫感が出るように工夫しました。また、プレイヤーを楽しませるため、点数に応じてスコア画面のメッセージが変化する、林檎の色がランダムに変化する、といったギミックを加えました。</p>
   </div>
  )
}

export default App
