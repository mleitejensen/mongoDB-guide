import './App.css'
import video from "./assets/GuideToMongoDB.webm"

function App() {

  return (
    <>
      <h1>MongoDB <code>Guide</code></h1>
      <div className="card">
        <h2>Her skal jeg gå igjennom oppsett av MongoDB lokalt på en ubunut maskin.</h2>
        <h3>For å finne ut mer om MongoDB kan du trykke <a href="https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/">her</a></h3>
      </div>
      <div className="card">
        <h3>Her er en video som går igjennom det.</h3>
        <video src={video} width="100%"></video>
      </div>
      <footer className="read-the-docs">
        Guide og nettside laget av Martin LJ
      </footer>
    </>
  )
}

export default App
