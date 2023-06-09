import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { getAllMovies, getSearchedMovies } from '../Redux/Action';
import { useDispatch } from 'react-redux';

const NavBar = () => {

    const onSearch = (word) => {
        search(word)
    }
    const dispatch = useDispatch();
    const search = async (word) => {
        if (word === "") {
            dispatch(getAllMovies())
        } else {
            dispatch(getSearchedMovies(word))
        }
    }

    return (
        <Navbar bg="dark" expand="md">
            <Container>
                <Navbar.Brand>
                    <Link className='logo' to='movies-list/'>
                        movie
                    </Link>
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