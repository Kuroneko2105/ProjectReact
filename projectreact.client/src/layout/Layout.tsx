import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "react-bootstrap/Image";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            <Image className="logo" src="/image/Logo.png" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link><Link to="/" className="d-block">Strona glowna</Link></Nav.Link>
                            <NavDropdown title="Produkcja" id="produkcja">
                                <NavDropdown.Item>
                                    <Link to="/dodajzlecenie" className="d-block">Dodaj zlecenie</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/zlecenia" className="d-block">Zlecenia produkcyjne</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Magazyn" id="magazyn">
                                <NavDropdown.Item>
                                    <Link to="/dodajmagazyn" className="d-block">Dodaj surowiec</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/magazyn" className="d-block">Przegladaj surowce</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Ksiegowosc" id="ksiegowosc">
                                <NavDropdown.Item>
                                    <Link to="/faktura" className="d-block">Dodaj fakture</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/faktury" className="d-block">Przegladaj faktury</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="flex-grow-1">
                <Outlet />
            </Container>

            <div className="bg-body-tertiary page-footer font-small blue p-4">
                <Container>
                    <div className="row">
                        <div className="col-md-5 mt-md-0 mt-3">
                            <h5 className="text-uppercase">O nas</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec non ex a tortor pulvinar iaculis non hendrerit elit.
                                Morbi facilisis libero sit amet faucibus mollis.
                                Curabitur blandit urna at tincidunt tincidunt.
                                Duis tincidunt lobortis ultricies.
                            </p>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-3 mp-3">
                            <h5 className="text-uppercase">Kontakt</h5>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-envelope"></i> kontakt@firma.pl</li>
                                <li><i className="bi bi-telephone"></i> +48 123 456 789</li>
                                <li><i className="bi bi-geo-alt"></i> ul. Przykladowa 12</li>
                            </ul>
                        </div>
                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Przydatne linki</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Polityka prywatnosci</a></li>
                                <li><a href="#">Regulamin</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-3 gap-3 text-center p-2">
                        <div className="text-center mt-3">
                            <a href="#" className="mx-2"><i className="bi bi-facebook" style={{ fontSize: "2rem" }}></i></a>
                            <a href="#" className="mx-2"><i className="bi bi-linkedin" style={{ fontSize: "2rem" }}></i></a>
                            <a href="#" className="mx-2"><i className="bi bi-twitter" style={{ fontSize: "2rem" }}></i></a>
                        </div>
                    </div>

                    <div className="text-center mt-3">
                        &copy; 2025 Copyright: Zuzanna Kompiel
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Layout;
