import React from 'react'
//import './Doggies.css'

const Doggies = ({ doggiesOpts: { order, headerTitle, doggies } }) => {
  switch (order) {
    case 'asc':
      doggies = (
        <ol>
          {doggies.sort().map((d) => (
            <li>{String(d)}</li>
          ))}
        </ol>
      )
      break

    case 'desc':
      doggies = (
        <ol>
          {doggies
            .sort()
            .reverse()
            .map((d) => (
              <li>{d}</li>
            ))}
        </ol>
      )
      break

    case null:
      doggies = (
        <ul>
          {doggies.map((d) => (
            <li>{d}</li>
          ))}
        </ul>
      )
      break

    default:
      break
  }

  return (
    <>
      <div>...</div>
      <div className="Doggies">
        <h1>{headerTitle}</h1>
        {doggies}
      </div>
    </>
  )
}

export default Doggies
