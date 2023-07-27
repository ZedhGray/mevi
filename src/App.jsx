import './App.css'
import Navbar from './components/Navbar'
import PackCard from './components/PackCard'
import jsonData from './utils/jsonData.json'

function App() {
  return (
    <div className="App">
      {/** Header con logo y nav */}
      <Navbar />
      {/** Hero */}
      <section id="inicio" className="inicio">
        <div className="contenido-banner">
          <img src="../assets/LogoMeviMoreliaRem.png" alt="Heroimg" />
        </div>
        <div className="contenido-banner">
          <h1>MEVI MORELIA</h1>
          <h2>¡Bienvenido al futuro de la energía!</h2>
        </div>
      </section>
      {/** Packages */}
      <section id="Packages" className="Packages">
        <div className="contenido-seccion">
          <div className="item-seccion">
            <PackCard
              key={jsonData[0].id}
              title={jsonData[0].title}
              subtitle={jsonData[0].subtitle}
              precio={jsonData[0].precio}
            />
          </div>
          <div className="item-seccion">
            <PackCard
              key={jsonData[1].id}
              title={jsonData[1].title}
              subtitle={jsonData[1].subtitle}
              precio={jsonData[1].precio}
            />
          </div>
          <div className="item-seccion">
            <PackCard
              key={jsonData[2].id}
              title={jsonData[2].title}
              subtitle={jsonData[2].subtitle}
              precio={jsonData[2].precio}
            />
          </div>
          <div className="item-seccion">
            <PackCard
              key={jsonData[3].id}
              title={jsonData[3].title}
              subtitle={jsonData[3].subtitle}
              precio={jsonData[3].precio}
            />
          </div>
          <div className="item-seccion">
            <PackCard
              key={jsonData[4].id}
              title={jsonData[4].title}
              subtitle={jsonData[4].subtitle}
              precio={jsonData[4].precio}
            />
          </div>
          <div className="item-seccion">
            <PackCard
              key={jsonData[5].id}
              title={jsonData[5].title}
              subtitle={jsonData[5].subtitle}
              precio={jsonData[5].precio}
            />
          </div>
        </div>
      </section>
      {/** Models */}
      {/** Contact US */}
      {/**Footer */}
      <footer className="footer"></footer>
    </div>
  )
}

export default App
