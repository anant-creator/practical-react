import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import OwlCarousel from 'react-owl-carousel';
import { Container, Navbar, Nav, NavDropdown, Form, Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import '../css/style.css';
import Alert from './Alert';

export default function Calculator(props) {
   
  const [alert, setAlert] = useState('alert');

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000)
    }

    const styles = {
        background: "#1f1f1f"
    }

    const changeMyText = (e) => {
        e.preventDefault()
        setMyText(text)
      }
      
      const clearMyText = (e) => {
        e.preventDefault()
        setMyText("")
        showAlert("text cleared", 'danger')
    }

    const caseUpper = (e) => {
      e.preventDefault()
      setMyText(text.toUpperCase())
      showAlert("text converted to uppercase", 'success')
    }

    const caseLower = (e) => {
      e.preventDefault();
      setMyText(text.toLowerCase());
      showAlert("text converted to lowercase", 'success');

    }

    const updateMyText = (e) => {
        setMyText(e.target.value)
    }

    const lightsOff = (e) => {
      e.preventDefault()
      if (formLight.background === "#fff") {
      switchMyLight({
        background: "#000",
        color: "#fff"
      });
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
      }
      else { switchMyLight({
        background: "#fff",
        color: "#000"
      })
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';

     }
    } 

    const copeUp = (e) => {
      e.preventDefault()
      const Area =  document.querySelector("#area");
      Area.select()
      Area.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(Area.value);
      showAlert("text copied", 'success')

    }

    const removeSpaces = (e) => {
      e.preventDefault();
      const newText = text.split(/[ ]+/);
      setMyText(newText.join(" "));
      showAlert("Extra spaces removed", 'success');
    }

    const [text, setMyText] = useState("Mother Father Gentleman");
    const [formLight, switchMyLight] = useState({background: "#fff", color: "#000"});    

  return (
      <>
  <Navbar style={styles} className="navbar-dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src={props.logo} width="100px" alt="logo"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link href="/">{props.links.first}</Nav.Link>
        <Nav.Link href="#link">{props.links.second}</Nav.Link>
        <NavDropdown title="Other Files" id="basic-nav-dropdown">
          <NavDropdown.Item href="/wish">Action</NavDropdown.Item>
          <NavDropdown.Item href="/greet">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>     
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<OwlCarousel
    className="owl-theme"
    items="1"
    autoplay
    loop   
  >
    <div className="item">
      <img src={img1} aria-hidden alt={`first image`} />
    </div>
    <div className="item">
      <img src={img2} aria-hidden alt={`second image`} />
    </div>
    <div className="item">
      <img src={img3} aria-hidden alt={`third image`} />
    </div>
    <div className="item">
      <img src={img5} aria-hidden alt={`fifth image`} />
    </div>
    <div className="item">
      <img src={img4} aria-hidden alt={`sixth image`} />
    </div>
    
  </OwlCarousel>

  <section style={formLight}>
    <Container className="py-5">
    <Alert alert={alert}/>
    <Form className='w-50 d-block mx-auto'>
         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control className='bg-dark text-light' type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="bg-dark" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      
        <InputGroup className="mb-3">
    <InputGroup.Text className="bg-dark text-light">textarea</InputGroup.Text>
    <FormControl id="area" className="bg-dark text-light pb-3" as="textarea" value={text} onChange={updateMyText} aria-label="textarea" />
  </InputGroup>

  
  <Button className="m-2" variant="primary" onClick={changeMyText} type="submit">
    Submit
  </Button>
  <Button className="m-2" variant="primary" onClick={clearMyText} type="submit">
    Clear
  </Button>
  <Button className="m-2" variant="primary" onClick={caseUpper} type="submit">
    make it Upper
  </Button>
  <Button className="m-2" variant="primary" onClick={caseLower} type="submit">
    make it Lower
  </Button>
  <Button className="m-2" variant="primary" onClick={lightsOff} type="submit">
    make it Darker
  </Button>
  <Button className="m-2" variant="primary" onClick={copeUp} type="submit">
    Copy it
  </Button>
  <Button className="m-2" variant="primary" onClick={removeSpaces} type="submit">
    Remove Spaces
  </Button>
</Form>
    </Container>
  </section>

  <section className="bg-light py-5">
    <Container>
      <Row>
        <Col>
          <div>

            <h4>{text}</h4>
          </div>
        </Col>
        <Col>
          <div>
            <p>Length of text</p>
            <h4>{text.length} Words</h4>
          </div>
        </Col>
        <Col>
          <div>
            <p>Number of words</p>
            <h4 className="word">{text.split(" ").length}</h4>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
</>
  ) 
  
}