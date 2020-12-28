import React from 'react'
//import './UpOrDown.css'

const Messenger = (props) => {
  const sendMsg = () => props.sendMsg('Hi from Messenger')
  return (
    <div>
      <div className="Messenger">
        <button onClick={sendMsg}>Send Msg</button>
      </div>
      <div></div>
    </div>
  )
}

export default Messenger
