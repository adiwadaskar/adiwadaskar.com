import { Mail, Linkedin, Github } from "lucide-react"
import './Links.css'

const Links = () => {
  return (
    <div className="links">
      <a className="link" href="mailto:qyqomgxp6@mozmail.com">
        <Mail color="black" size={30} strokeWidth={1.5}/>
      </a>
      <a className="link" href="https://www.linkedin.com/in/adiwadaskar" target="_blank">
        <Linkedin color="black" size={28} strokeWidth={1.5}/>
      </a>
      <a className="link" href="https://github.com/adiwadaskar" target="_blank">
        <Github color="black" size={30} strokeWidth={1.5}/>
      </a>
    </div>
  )
}

export default Links
