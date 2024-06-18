// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {toss: 'heads', heads: 0, tails: 0}

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({toss: 'heads'})
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))
    } else {
      this.setState({toss: 'tails'})
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))
    }
  }

  render() {
    let imageElement
    const {toss, heads, tails} = this.state
    const total = heads + tails

    if (toss === 'heads') {
      imageElement = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      imageElement = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img src={imageElement} className="image" alt="toss result" />
          <button className="button" type="button" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">{`Total: ${total}`}</p>
            <p className="count">{`Heads: ${heads}`}</p>
            <p className="count">{`Tails: ${tails}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
