import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false
    };
  }

  mostrarOcultarMenu = () => {
    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible
    }));
  };

  seleccionar = () => {
    this.setState({
      menuVisible: false
    });
  };

  render() {
    const { menuVisible } = this.state;

    const navClassName = menuVisible ? 'responsive' : '';

    return (
      <div className="contenedor-header">
        <header>
          <div className="logo">
            <img src="../assets/LogoMeviRem.png" alt="logotransparente" />
            <a href="#">Mevi<span className="sp">Morelia</span></a>
          </div>
          <nav id="nav" className={navClassName}>
            <ul>
              <li><a href="#inicio" onClick={this.seleccionar}>INICIO</a></li>
              <li><a href="#Packages" onClick={this.seleccionar}>PAQUETES</a></li>
              <li><a href="#models" onClick={this.seleccionar}>MODELOS</a></li>
              <li><a href="#curriculum" onClick={this.seleccionar}>CONTACTANOS</a></li>
            </ul>
          </nav>
          <div className="nav-responsive" onClick={this.mostrarOcultarMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
