import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <Container>
            <div className="m-5 text-center">
                <h1>Witaj uzytkowniku!</h1>
                <h3>Co chcesz dzisiaj zrobic?</h3>
            </div>
            <Row className="g-4 mb-5 d-flex">
                <Col md={4}>
                    <Card className="shadow-sm rounded border-0 d-flex flex-column h-100">
                        <Card.Header as="h5">Produkcja</Card.Header>
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <Card.Text>Chcesz dodac nowe zlecenie?</Card.Text>
                            <Link to="/dodajzlecenie" className="btn btn-custom w-100">
                                Dodaj zlecenie
                            </Link>
                            <hr />
                            <Card.Text>Chcesz przegladac zlecenia produkcyjne?</Card.Text>
                            <Link to="/zlecenia" className="btn btn-custom w-100">Przegladaj zlecenia</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow-sm rounded border-0 d-flex flex-column h-100">
                        <Card.Header as="h5">Magazyn</Card.Header>
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <Card.Text>Chcesz dodac surowiec do magazynu?</Card.Text>
                            <Link to="/dodajmagazyn" className="btn btn-custom w-100">Dodaj surowiec</Link>
                            <hr />
                            <Card.Text>Chcesz przegladac surowce w magazynie?</Card.Text>
                            <Link to="/magazyn" className="btn btn-custom w-100">Przegladaj surowce</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="shadow-sm rounded border-0 d-flex flex-column h-100">
                        <Card.Header as="h5">Ksiegowosc</Card.Header>
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <Card.Text>Chcesz utworzyc nowa fakture?</Card.Text>
                            <Link to="/faktura" className="btn btn-custom w-100">Dodaj fakture</Link>
                            <hr />
                            <Card.Text>Chcesz przegladac faktury?</Card.Text>
                            <Link to="/faktury" className="btn btn-custom w-100">Przegladaj faktury</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
