import React, { Component } from "react";


class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
      Tutor
    </Navbar.Brand>
            </Navbar>
        );
    }
}

export default NavBar;