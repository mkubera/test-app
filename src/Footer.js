import React from 'react'
import './Footer.css'
import FooterYears from './FooterYears'

const Footer = (props) => {
  return (
    <div className="Footer">
      <FooterYears years={props.years} />
      {props.soc_med.map((sm) => (
        <p key={sm.id}>
          <a href={sm.url}>
            <img src={sm.img} alt={sm.name} />
          </a>
        </p>
      ))}
    </div>
  )
}

export default Footer
