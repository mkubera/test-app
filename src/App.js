import React from 'react'
import logo from './logo.svg'
import './App.css'
import Footer from './Footer'
import UpOrDown from './UpOrDown'
import Messenger from './Messenger'
import Doggies from './Doggies'

class App extends React.Component {
  constructor(props) {
    super(props)

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
    }
    // this.soc_med = [
    //   {
    //     id: 1,
    //     name: 'Twitter',
    //     url: 'https://twitter.com',
    //     img:
    //       'https://www.luxurydaily.com/wp-content/uploads/2014/03/Twitter_logo_blue.jpg',
    //   },
    //   {
    //     id: 2,
    //     name: 'Twitter',
    //     url: 'https://twitter.com',
    //     img:
    //       'https://www.luxurydaily.com/wp-content/uploads/2014/03/Twitter_logo_blue.jpg',
    //   },
    // ]
    // this.years = '2018-2020'
    // this.cbFn = (childData) => {
    //   this.setState({ message: childData })
    // }
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

  render() {
    return (
      <div className="App">
        <Doggies doggiesOpts={this.state.doggiesOpts} />
        <button onClick={this.changeDoggiesOrder}>Change Doggies Order</button>
        {/* <Messenger sendMsg={this.cbFn} />
        <p>msg: {this.state.message}</p>
        {this.state.people.map((name) => (
          <p>Hello, {name}</p>
        ))}
        {this.state.data}

        <Footer soc_med={this.soc_med} years={this.years} />
        <UpOrDown isUp={true} />
        <UpOrDown isUp={false} />
        <UpOrDown isUp={true} />
        <UpOrDown isUp={false} /> */}
      </div>
    )
  }
}

export default App
