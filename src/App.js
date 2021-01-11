// import React from 'react'
import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
// import Footer from './Footer'
// import UpOrDown from './UpOrDown'
// import Messenger from './Messenger'
import Doggies from './Doggies'

class App extends Component {
  constructor(props) {
    super(props)

    console.log('constructor')

    this.state = {
      doggiesOpts: {
        order: 'asc', //possibilities: 'asc', 'desc', null
        headerTitle: 'Rescue Doggies',
        doggies: ['Emilka', 'Karas', 'Anzelm', 'Pimpek', 'Hipek', 'Pan Pyrka'],
        // .filter((d) => d.length <= 5)
        // .map((d) => 'Pies ' + d) // declarative (CO / WHAT)
        // .sort()
        // .reverse()
      },
      chuckNorrisQuotation: '',
    }

    this.changeDoggiesOrder = () => {
      var doggiesOpts = { ...this.state.doggiesOpts }

      switch (this.state.doggiesOpts.order) {
        case 'asc':
          doggiesOpts.order = 'desc'
          break

        case 'desc':
          doggiesOpts.order = null
          break

        case null:
          doggiesOpts.order = 'asc'
          break

        default:
          break
      }

      this.setState({ doggiesOpts })
    }
  }

  componentDidMount() {
    console.log('componentDidMount -- must fetch here')

    const chuckNorrisAPIUrl = 'https://api.chucknorris.io/jokes/random'
    fetch(chuckNorrisAPIUrl, {
      method: 'GET',
      mode: 'cors',
    })
      .then((resp) => resp.json())
      .then((j) => {
        let chuckNorrisQuotation = { ...this.state.chuckNorrisQuotation }
        chuckNorrisQuotation = j.value
        this.setState({ chuckNorrisQuotation })
      })
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    return (
      <div className="App">
        <div>{this.state.chuckNorrisQuotation}</div>
        <Doggies doggiesOpts={this.state.doggiesOpts} />
        <button onClick={this.changeDoggiesOrder}>Change Doggies Order</button>
      </div>
    )
  }
}

export default App
