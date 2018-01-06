import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class App extends Component {
  state = {
    gitfs: []
  }

  addGift = () => {
    const { gitfs } = this.state
    const newId = gitfs.length + 1
    gitfs.push({ id: newId })
    this.setState({ gitfs })
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {
            this.state.gitfs.map(gift => {
              return (
                <div key={gift.id} />
              )
            })
          }
        </div>
        <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
      </div>
    )
  }
}

export default App
