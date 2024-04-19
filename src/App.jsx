import './App.css'
import video from "./assets/Tutorial.mp4"
import enSub from "./assets/subtitles.vtt"
import noSub from "./assets/noSub.vtt"
import image1 from "./assets/1.png"
import image2 from "./assets/2.png"
import image3 from "./assets/3.png"

function App() {

  document.title = "Guide til MongoDB på ubuntu"

  return (
    <>
      <h1>MongoDB <code>Guide</code></h1>
      <div className="card">
        <h2>Her skal jeg gå igjennom oppsett av MongoDB lokalt på en ubunut maskin.</h2>
        <h3>For å finne ut mer om MongoDB kan du trykke <a href="https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/">her</a></h3>
      </div>

      <div className="card">
        <h3>Dette må du ha klart før du begynner.</h3>
        <ul className='list'>
          <li>En maskin som kjører Ubuntu</li>
          <li>Tilgang til internett</li>
          <li>Hvis du lurer på hvordan du lager en VM kan du klikke <a href="http://10.12.6.67">her</a></li>
          <li>Enda mer</li>
        </ul>
      </div>

      <div className="card">
        <h3>Her er en video som går igjennom det.</h3>
        <video src={video} controls type="video/mp4" width="100%">
          <track default label="English" kind="subtitles" srcLang="en" src={enSub} />
          <track default label="Norsk" kind="subtitles" srcLang="no" src={noSub} />
        </video>
      </div>

      
      <div className="card">
        <h3>Her er kommandoene som blir brukt i videoen.</h3>
        <ul>
          <li>sudo apt-get install gnupg curl</li>
          <li>curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
          </li>
          <li>echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list</li>
          <li>sudo apt-get update</li>
          <li>sudo apt-get install -y mongodb-org</li>
          <li>sudo systemctl start mongod</li>
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

      <div className="card">
        <img src={image1} alt="Mongosh terminal" />
        <h3>På linjen hvor det står "Connecting to:", er databse URI-en din. <br /> Denne trenger du når du skal koble til databasen igjennom javascript.</h3>
      </div>

      <div className='line'></div>

      <div className="card">
        <img src={image2} alt="Koble til database med javascript og mongoose" />
        <h3>Her er et eksempel på hvordan man kan koble til databasen med javascript og mongoose. Jeg vil anbefale å bruke mongoose over mongodb, fordi det er lettere å sette opp.</h3>
      </div>

      <div className='line'></div>

      <div className="card">
        <img src={image3} alt="Koble til database med javascript og mongodb" />
        <h3>Her er et eksempel på hvordan man kan koble til databasen med javascript og mongodb.</h3>
      </div>

      <footer className="read-the-docs">
        Guide og nettside laget av Martin LJ
      </footer>
    </>
  )
}

export default App
