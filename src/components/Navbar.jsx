import { Navbar, Container, Nav } from "react-bootstrap";

function MyNavbar() {
    return (
    <Navbar bg="primary" variant="dark" expand="lg" className="sticky-top shadow-sm">
        <Container>
        <Navbar.Brand href="/">BeritaOnline</Navbar.Brand>
        <Nav className="me-auto">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
        </Nav>
        </Container>
    </Navbar>
    );
}

export default MyNavbar;