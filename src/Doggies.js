import React from 'react'
//import './Doggies.css';
import * as R from 'ramda'

const Doggies = ({ doggiesOpts: { order, headerTitle, doggies } }) => {
  switch (order) {
    case 'asc':
      doggies = (
        <ol>
          {R.map(
            (n) => (
              <li>{String(n + 1)}</li>
            ),
            [1, 2, 3]
          )}
          {/* {doggies.sort().map((d) => (
            <li>{String(d)}</li>
          ))} */}
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

  // {
  //   "people": [
  //     {"name": "J",
  //       "bank_accounts": [
  //       {"id": 9048098095840954, "name": "BOS", "cards": [
  //         {"id": 9549854, "type": "visa"},
  //         {"id": 7133816, "type": "visa"},
  //         {"id": 9430439, "type": "visa"},
  //       ]}
  //     ],
  //     "purchases": [
  //       {"card_id": 9549854, "timestamp": Date.now(), "items": [
  //         {}
  //       ]}
  //     ]
  //   }
  //   ]
  // }

  return (
    <>
      <div>
        {R.pipe(
          R.map((person) => R.inc(person.age)), // [31,21]
          R.filter((age) => R.gt(age, 20)), // [31,21]
          R.reverse, // [21,31]
          R.head, // 21
          R.add(5) // 26
        )([
          { name: 'J', age: 30 },
          { name: 'K', age: 20 },
        ])}
      </div>
      <div className="Doggies">
        <h1>{headerTitle}</h1>
        {doggies}
      </div>
    </>
  )
}

export default Doggies
