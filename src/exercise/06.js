// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = useRef();  // part extra credit 1
  const username2Ref = useRef();  // part extra credit 3
  const [isValid, setIsValid] = useState(null); // part extra credit 1
  const [username, setUsername] = useState(""); // part extra credit 3

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.elements[0].value;
    onSubmitUsername(username);
  }

  // extra credits 1
  const handleSubmitUsingRef = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    onSubmitUsername(username);
  }

  // extra credits 2
  const handleOnChange = () => {
    const username = usernameRef.current.value;
    setIsValid(username === username.toLowerCase());
  }

  // extra credits 3
  const handleOnChange2 = () => {
    const username = username2Ref.current.value;
    setUsername(username.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input onChange={handleOnChange} ref={usernameRef} type="text" />
        <div role="alert" style={{ color: "red" }}>{isValid === false ?  "Username must be lower case 🙈" : ""}</div>
      </div>
      <div>
        <label>Username (autofix):</label>
        <input onChange={handleOnChange2} ref={username2Ref} type="text" value={username} />
      </div>
      <button type="submit" disabled={!isValid}>Submit</button>
      <button onClick={handleSubmitUsingRef} disabled={!isValid}>Using Ref</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
