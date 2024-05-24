import video from "../assets/Tutorial.mp4"
import enSub from "../assets/subtitles.vtt"
import noSub from "../assets/noSub.vtt"
import image1 from "../assets/1.png"
import image2 from "../assets/2.png"
import image3 from "../assets/3.png"

import noText from "../assets/noText.json"
import enText from "../assets/enText.json"

import { Tooltip } from 'react-tooltip'
import { useState } from "react"

function Home() {
  const [lang, setLang] = useState(noText)

  document.title = lang?.title

  const changeTextToNO = () => {
    setLang(noText)
  }

  const changeTextToEN = () => {
    setLang(enText)
  }


  return (
    <>
      <div className="lang">
        <button onClick={changeTextToNO} disabled={lang?.lang === "NO"}>NO</button>
        <button onClick={changeTextToEN} disabled={lang?.lang === "EN"}>EN</button>
      </div>

      <h1>{lang?.heading?.title} <code>Guide</code></h1>
      <div className="card">
        <h2>{lang?.heading?.heading}</h2>
        <h3>{lang?.heading?.heading2}<a href="https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/">{lang?.click}</a></h3>
      </div>

      <div className='line'></div>

      <div className="card">
        <h3>{lang?.before?.heading}</h3>
        <ul className='list'>
          <li>{lang?.before?.step1}</li>
          <li>{lang?.before?.step2}</li>
          <li>{lang?.before?.step3}<a href="http://10.12.6.67">{lang?.click}</a></li>
        </ul>
      </div>

      <div className='line'></div>

      <div className="card">
        <h3>{lang?.video?.title}</h3>
        <video src={video} controls type="video/mp4" width="100%">
          <track default label="Norsk" kind="subtitles" srcLang="no" src={noSub} />
          <track default label="English" kind="subtitles" srcLang="en" src={enSub} />
        </video>
      </div>

      
      <div className="card">
        <h3>{lang?.commands?.title}</h3>
        <Tooltip anchorSelect=".sudo" place="top" style={{backgroundColor: "#000000"}}>
          {lang?.commands?.sudo}
        </Tooltip>
        <Tooltip anchorSelect=".systemctl" place="top">
          {lang?.commands?.systemctl}
        </Tooltip>
        <Tooltip anchorSelect=".echo" place="top">
          {lang?.commands?.echo}
        </Tooltip>
        <ul className="code-list">
          <li><a className="sudo">sudo</a> apt-get install gnupg curl</li>
          <li>curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
          </li>
          <li><a className="echo">echo</a> "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list</li>
          <li>sudo apt-get update</li>
          <li>sudo apt-get install -y mongodb-org</li>
          <li>sudo <a className="systemctl">systemctl</a> start mongod</li>
          <li>sudo systemctl daemon-reload</li>
          <li>sudo systemctl status mongod</li>
          <li>sudo systemctl enable mongod</li>
          <li>sudo systemctl restart mongod</li>
          <li>mongosh</li>
          <li>exit</li>
          <li>sudo nano /etc/mongod.conf</li>
          <li>mongosh [IP]</li>
          <li>sudo systemctl restart mongod</li>
          <li>mongosh [IP]</li>
        </ul>
      </div>

      <div className='line'></div>

      <div className="card">
        <h2>{lang?.guide?.image1?.title1}</h2>
        <img src={image1} alt={lang?.guide?.image1?.alt} />
        <h3>{lang?.guide?.image1?.title2}<br />{lang?.guide?.image1?.title3}</h3>
      </div>

      <div className='line'></div>

      <div className="card">
        <h3>{lang?.guide?.image2?.title}</h3>
        <img src={image2} alt={lang?.guide?.image2?.alt} />
      </div>

      <div className='line'></div>

      <div className="card">
        <h3>{lang?.guide?.image3?.title}</h3>
        <img src={image3} alt={lang?.guide?.image3?.alt}/>
      </div>

      <footer className="read-the-docs">
        {lang?.footer}
      </footer>
    </>
  )
}

export default Home
