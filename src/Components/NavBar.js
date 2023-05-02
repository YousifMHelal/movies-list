import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({ search }) => {

    const onSearch = (word) => {
        search(word)
    }

    return (
        <Navbar bg="dark" expand="md">
            <Container>
                <Navbar.Brand href="#">
                    <a className='logo' href='/'>
                        <h2 >Movies</h2>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" style={{ background: '#fff' }} />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex ms-auto">
                        <div className='search'>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 px-4 "
                                aria-label="Search"
                                onChange={(e) => onSearch(e.target.value)}
                            />
                        </div>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar