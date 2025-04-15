import ProfilePic from './assets/profile_pic.png';
import Links from './Links'

import './App.css'

function App() {
  return (
    <div className="app">
      <img className="profile-pic" src={ProfilePic} alt="Profile"/>
      <div className="title">Adi Wadaskar</div>
      <div>I work on the web.</div>
      <div>TypeScript + React</div>
      <div>Last worked on: <a href="https://c3.ai/products/c3-ai-ex-machina/product/" target="_blank">Ex Machina</a></div>
      <div>Coolest thing I built: <a href="https://www.youtube.com/watch?v=wcj48JE5Xk4" target="_blank">Eternal Flight</a></div>
      <Links/>
    </div>
  )
}

export default App
