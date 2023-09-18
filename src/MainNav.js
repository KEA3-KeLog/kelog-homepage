/* eslint-disable */

import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logoNav from './img/logo-nav.png';

function MainNav() {
    // 페이지 이동 함수
    let navigate = useNavigate();

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand onClick={() => { navigate('/') }}>
                    <img
                        alt=""
                        src={logoNav}
                        width="100"
                        height="30"
                        className="d-inline-block align-top"
                    />        
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/members') }}>Members</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/blog') }}>Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNav;