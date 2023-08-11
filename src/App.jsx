import './App.css'
import Navbar from './components/Navbar'
import PackCard from './components/PackCard'
import jsonData from './utils/jsonData.json'
import Socialbuttons from './components/Socialbuttons'

function App() {
  return (
    <div className="App">
      {/** Header con logo y nav */}
      <Navbar />
      {/** Hero */}
      <section id="inicio" className="inicio">
        <header className="contenedor-banner-imgs">
          <div className="contenido-banner-img1">
            <img src="../assets/MeviClean.png" alt="Heroimg" />
          </div>
          <div className="contenido-banner-img2">
            <img src="../assets/LogoMeviMoreliaRem.png" alt="Heroimg" />
          </div>
        </header>
        <div className="contenido-banner">
          <h1>MEVI MORELIA</h1>
          <h2>¡Bienvenido al futuro de la energía!</h2>
        </div>
      </section>
      {/** Packages */}
      <div className="Packtext">
        <h2>
          <span>Paquetes</span>
        </h2>
      </div>
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
      <div className="Packtext">
        <h2>
          <span>Modelos</span>
        </h2>
      </div>
      <section id="models" className="models">
        <div className="contenedor-models">
          {/**  CARD*/}

          <article className="contenido-models">
            <div className="book">
              <div className="contenido-m">
                <div className="contenido-m-img">
                  <img
                    src="../assets/resources/models/JAsolarpanel.png"
                    alt="Ja Solar panel"
                  />
                </div>
                <div className="contenido-m-text">
                  <h2>JA Solar panel</h2>
                  <span>550W</span>
                </div>
              </div>
              <div className="cover">
                <div>
                  <img
                    src="../assets/resources/models/JAsolar.png"
                    alt="Ja Solar panel"
                  />{' '}
                </div>
              </div>
            </div>
          </article>
          {/**  CARD*/}

          <article className="contenido-models">
            <div className="book">
              <div className="contenido-m">
                <div className="contenido-m-img">
                  <img
                    src="../assets/resources/models/longipanel.png"
                    alt="Ja Solar panel"
                  />
                </div>
                <div className="contenido-m-text">
                  <h2>LONGI Solar panel</h2>
                  <span>550W</span>
                </div>
              </div>
              <div className="cover">
                <div>
                  <img
                    src="../assets/resources/models/longi.png"
                    alt="Longi Solar panel"
                  />
                </div>
              </div>
            </div>
          </article>
          {/**  CARD*/}

          <article className="contenido-models">
            <div className="book">
              <div className="contenido-m">
                <div className="contenido-m-img">
                  <img
                    src="../assets/resources/models/raizenpanel.png"
                    alt="Ja Solar panel"
                  />
                </div>
                <div className="contenido-m-text">
                  <h2>Raizen Solar panel</h2>
                  <span>550W</span>
                </div>
              </div>
              <div className="cover">
                <div>
                  <img
                    src="../assets/resources/models/raizen.png"
                    alt="raizen Solar panel"
                  />{' '}
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/** Contact US */}
      <section className='Contact_Us'>
        <Socialbuttons />
      </section>
      {/**Footer */}
      <footer className="footer"></footer>
    </div>
  )
}

export default App
