import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div >
        <h2>Login</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username' 
        style = {{marginBottom: '10px'}}
        />
        
        <input type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password' 
        style = {{marginBottom: '10px'}}
        />
        <button onClick={handleSubmit}
        style={{ padding: '5px 10px', fontSize: '14px' }}
        >Submit</button>
        </div>
    </div>
  )
}

export default Login