import { Mail, Linkedin, Github } from "lucide-react"
import './Links.css'
import useSystemTheme from "./hooks/useSystemTheme"

const Links = () => {
  const isDarkTheme = useSystemTheme();
  const ColorTheme = isDarkTheme ? ColorThemes.dark : ColorThemes.light

  return (
    <div className="links">
      <a className="link" href="mailto:hello@adiwadaskar.com">
        <Mail {...ColorTheme.mail} size={24} strokeWidth={1.8}/>
      </a>
      <a className="link" href="https://www.linkedin.com/in/adiwadaskar" target="_blank">
        <Linkedin {...ColorTheme.default} size={23} strokeWidth={0.3}/>
      </a>
      <a className="link" href="https://github.com/adiwadaskar" target="_blank">
        <Github {...ColorTheme.default} size={23} strokeWidth={1}/>
      </a>
    </div>
  )
}

const ColorThemes = {
  dark: {
    mail: {
      color: 'black',
      fill: 'gray',
    },
    default: {
      color: 'gray',
      fill: 'gray',
    },
  },
  light: {
    mail: {
      color: 'white',
      fill: 'gray',
    },
    default: {
      color: 'gray',
      fill: 'gray',
    },
  },
}

export default Links
