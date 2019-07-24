
import React from 'react'

function DragonBallImage(props) {
  return (
    <img src={props.url} alt="dragonball" onClick={props.handleImageClick} />
  )
}

export default DragonBallImage