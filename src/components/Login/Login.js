import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Footer from '../Footer';
import classes from '../../UI/Navbar/Navbar.module.css';
import { Link } from "react-router-dom";
import LoginNavbar from "./Login-Navbar";
const Login = () => {

    return (

        <div>
            <LoginNavbar />
      <div class = "login-select">
            <CardDeck>
    <Card>

      <Card.Body>
        <Card.Title>Login for...</Card.Title>
        <Card.Text>
          <h3>Doctor</h3>
        </Card.Text>
          <Link to="/LoginDoctor">
        <Button variant="primary" type="submit">
          Login
          </Button>
            </Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Are you here to help?</small>
      </Card.Footer>
    </Card>
    <Card>


      <Card.Body>
        <Card.Title>Login for...</Card.Title>
        <Card.Text>
          <h3>Patient</h3>
        </Card.Text>
            <Link to="/LoginPatient">
        <Button variant="primary" type="submit">
          Login
          </Button>
            </Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Are you here to seek help?</small>
      </Card.Footer>
    </Card>
</CardDeck>

</div>

<Footer />
        </div>
    );
}

export default Login;
