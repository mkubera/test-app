import React from 'react'
//import './UpOrDown.css'

const UpOrDown = (props) => {
  const people = ['M', 'K', 'J']
  let thumb
  if (props.isUp) {
    thumb = <p>👍</p>
  } else {
    thumb = <p>👎</p>
  }

  return <div className="UpOrDown">{thumb}</div>
}

export default UpOrDown
