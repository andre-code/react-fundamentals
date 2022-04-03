// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied
const lightblue = { backgroundColor: "lightblue"}
const pink = { backgroundColor: "pink"}
const orange = { backgroundColor: "orange"}
const smallBox = <div className="box box--small" style={lightblue}>small lightblue box</div>
const mediumBox = <div className="box box--medium" style={pink}>medium pink box</div>
const largeBox = <div className="box box--large" style={orange}>large orange box</div>


// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// extra 1 y 2
const Box = ({children, style, size}) => {
  return (
    <div className={`box box--${size}`} style={{...style, fontStyle: 'italic'}}>{children}</div>
  );
};

function App() {
  return (
    <>
      <h2>05</h2>
      <div>
        {smallBox}
        {mediumBox}
        {largeBox}
      </div>
      <h2>Extra 01 - 02</h2>
      <div>
        <Box style={lightblue} size="small">small lightblue box</Box>
        <Box style={pink} size="medium">medium pink box</Box>
        <Box style={orange} size="large">large orange box</Box>
      </div>
    </>

  )
}

export default App
