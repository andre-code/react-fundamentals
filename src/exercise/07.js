// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'
import {useEffect} from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

function App() {
  const [items, setItems] = React.useState(allItems);
  useEffect(() => {
    const id = setInterval(() => shuffle(), 1000)
    return () => clearInterval(id)
  }, []);

  function addItem() {
    const itemIds = items.map(i => i.id)
    setItems([...items, allItems.find(i => !itemIds.includes(i.id))])
  }

  function removeItem(item) {
    setItems(items.filter(i => i.id !== item.id))
  }

  const shuffle = () => {
    const sorted = [...items].sort(() => {
      const randomTrueOrFalse = Math.random() > 0.5;
      return randomTrueOrFalse ? 1 : -1
    });
    setItems(sorted);
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map(item => (
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
      <h2> Without a key</h2>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map(item => (
          <li>
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
      <h2> Without a index key</h2>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map( (item, i) => (
          <li key={i}>
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
      <h2> Without a proper key</h2>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map(item => (
          <li key={item.id}>
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
