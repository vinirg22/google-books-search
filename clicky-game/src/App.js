import React from 'react'

import DragonBallImage from './components/DragonBallImage'
import images from './components/images.json'

import './App.css'

// pick a random number up to but not including max
const pickRandom = max => Math.floor(Math.random() * max)

// pick out a random pup
const randomPupId = () => images[pickRandom(images.length)].id

// track
class App extends React.Component {
  // define initial state values
  state = {
    clicks: 0,
    score: 0,
    currentPupId: randomPupId()
  }

  // when image is clicked
  handleImageClick = id => {
    // update click count in state
    const newState = { clicks: this.state.clicks + 1 }

    // did the user click the current pup
    if (id === this.state.currentPupId) {
      // increase score
      newState.score = this.state.score + 1
      newState.currentPupId = randomPupId()
    }

    this.setState(newState)
  }

  render() {
    return (
      <div className="container">
        <h1>Dragon Ball Clicker</h1>
        <div>Score: {this.state.score}</div>
        <div>Clicks: {this.state.clicks}</div>
        {/* reference images in the public folder */}
        {images.map(image => (
          <DragonBallImage
            key={image.id}
            handleImageClick={() => this.handleImageClick(image.id)}
            url={process.env.PUBLIC_URL + '/img/' + image.fileName}
          />
        ))}
      </div>
    )
  }
}

export default App