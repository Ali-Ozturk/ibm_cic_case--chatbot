import React from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";

const NavigationBar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isCurrentPage = location.pathname === "/admin";

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand style={{cursor: "pointer"}} onClick={() => {
                    navigate('/');
                }}>
                    ChatBot
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button variant="outline-light" active={isCurrentPage} onClick={() => {
                            navigate('/admin');
                        }}>Configuration</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default NavigationBar;
