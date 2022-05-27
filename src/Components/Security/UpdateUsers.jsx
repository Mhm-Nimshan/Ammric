import React, { useState, useEffect } from 'react'
import { Button, Form} from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function UpdateUsers() {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [id, setID] = useState(null);
  const sendDataToApi = () => {
  axios.put(`https://626e5349e58c6fabe2de144a.mockapi.io/Crud/${id}`, {
    email,
    name,
    password
  })
}

useEffect(() => {
  setEmail(localStorage.getItem('email'));
  setName(localStorage.getItem('name'));
  setPassword(localStorage.getItem('password'));
  setID(localStorage.getItem('id'));

}, [])
  return (
    <div>
      <Form>  
        <Form.Input name="email" value={email} onChange={(e) => setEmail(e.target.value)} 
        label='Email' placeholder='joe@schmoe.com' />
        <Form.Input name="name" value={name} onChange={(e) => setName(e.target.value)}
        label='Name' placeholder='Name' />
        <Form.Input name="password" value={password} onChange={(e) => setPassword(e.target.value)}
        label='Password' placeholder='Password' />
        <Link to='/security/users'>
          <Button type='update' onClick={sendDataToApi}>Update</Button>
        </Link>
      </Form>
    </div>
  )
}
