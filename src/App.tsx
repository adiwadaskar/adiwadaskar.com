import ProfilePic from './assets/profile_pic.png';
import Links from './Links'

import './App.css'

function App() {
  return (
    <div className="app">
      <img className="profile-pic" src={ProfilePic} alt="Profile"/>
      <div className="title">Adi Wadaskar</div>
      <div>Engineer</div>
      <div>Check out the <a href="https://www.youtube.com/watch?v=wcj48JE5Xk4" target="_blank">coolest thing I built</a></div>
      <Links/>
    </div>
  )
}

export default App
