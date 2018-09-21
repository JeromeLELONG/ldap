import React, { Component } from 'react';
import logo from './react.svg';
import './Home.css';
import './animate.css';
import { elastic as Menu } from 'react-burger-menu';
import 'bootstrap/dist/css/bootstrap.css';


require('create-react-class');
//import 'create-react-class';
//import ReactDataGrid from 'react-data-grid';
//const ReactDataGrid = require('react-data-grid');

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#9599ad',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#9599ad'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

class Home extends Component {
  state = { styleButton: "btn btn-primary"  };
  constructor(props, context) {
    super(props, context);
    this.createRows();
    this._columns = [
      { key: 'id', name: 'ID' },
      { key: 'title', name: 'Title' },
      { key: 'count', name: 'Count' } ];

    this.state = { styleButton: "btn btn-primary" };
  }
  
  createRows = () => {
    let rows = [];
    for (let i = 1; i < 1000; i++) {
      rows.push({
        id: i,
        title: 'Title ' + i,
        count: i * 1000
      });
    }

    this._rows = rows;
  };

  rowGetter = (i) => {
    return this._rows[i];
  };

  showSettings (event) {
    event.preventDefault();

  }

  enterButton = () => {
    this.setState({styleButton: "btn btn-primary animated focusBig"});
  };

  leaveButton = () => {
    this.setState({styleButton: "btn btn-primary"});
  };
  
  render() {
    return (
      <div className="Home">
            <Menu styles={ styles }>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
      <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
    </Menu>
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
        <button type="button" onMouseEnter={this.enterButton} onMouseLeave={this.leaveButton} className={this.state.styleButton}>Primary</button>
        {/*(() => {if(0) return <ReactDataGrid
        columns={this._columns}
        rowGetter={this.rowGetter}
        rowsCount={this._rows.length}
        minHeight={500} />;
        })()*/}
      </div>
    );
  }
}



export default Home;