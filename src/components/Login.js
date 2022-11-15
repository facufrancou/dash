import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import image1 from "../assets/logoTL.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/styles.css';

function BasicExample() {

  let [data, setData] = useState({
    email: '',
    password: '',
  });
  let [users, setUsers] = useState([]);
  let [errors, setErrors] = useState(0);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(e => console.log(e))
  }, [])

  const handleInputChange = (event) => {
    setData({
        ...data,
        [event.target.name] : event.target.value
    })
  };

  let navigate = useNavigate();

  const handleSubmit = (event) => {
      event.preventDefault();

      users.map(user => {
        if(user.email === data.email && user.rol === 'Admin') {
          return navigate('/home')
        } else {
          return setErrors('El usuario no se encuentra registro')
        }
      })
      
      event.target.reset();
  }

  return (
    <div className='container col-md-4 form-login'>
      <div className='img-login'>
        <img src={image1} alt="Logo Techlogic.store"/>
      </div>
      <Form action="/api/login" method="POST" onSubmit={handleSubmit}>

        <br/>
        <br/>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label  >Email</Form.Label>
          <Form.Control name='email' type="email" placeholder="Ingresá tu email" onChange={handleInputChange} />
          {errors !== 0 ? <span className='feedback-login'>{errors}</span> : <span></span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control name='password' type="password" placeholder="Ingresá tu contraseña" onChange={handleInputChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  );
}

export default BasicExample;