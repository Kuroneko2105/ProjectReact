import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export const DZlecenie = () => {
    return (
        <Container className="py-5">
            <h2 className="mb-4 text-center">Dodaj zlecenie</h2>
            <Tabs
                defaultActiveKey="zlecenieProdukcji"
                className="mb-3"
            >
                <Tab eventKey="zlecenieProdukcji" title="Zlecenie produkcji">
                    <Form className="w-75 mx-auto">
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nazwa</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Zmiana</Form.Label>
                                    <Form.Select>
                                        <option>Wybierz</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mistrz</Form.Label>
                                    <Form.Select>
                                        <option>Wybierz</option>
                                        <option value="1">jkowalski</option>
                                        <option value="2">anowak</option>
                                        <option value="3">mzachara</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Kontrahent</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Numer</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Data utworzenia</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Termin realizacji</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Stan realizacji</Form.Label>
                                    <Form.Select>
                                        <option>Wybierz</option>
                                        <option value="1">Otwarte</option>
                                        <option value="2">Zamkniete</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Opis</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit" className="col-3 mb-3 mx-auto d-block">Zatwierdz</Button>
                    </Form>
                </Tab>
                <Tab eventKey="zlecenieMagazyn" title="Zlecenie magazynu">
                    <Form className="w-75 mx-auto">
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nazwa</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Zmiana</Form.Label>
                                    <Form.Select>
                                        <option>Wybierz</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mistrz</Form.Label>
                                    <Form.Select>
                                        <option>Wybierz</option>
                                        <option value="1">jkowalski</option>
                                        <option value="2">anowak</option>
                                        <option value="3">mzachara</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Kontrahent</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Data utworzenia</Form.Label>
                                    <Form.Control type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Termin realizacji</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Stan realizacji</Form.Label>
                                    <Form.Select>
                                        <option>Wybierz</option>
                                        <option value="1">Otwarte</option>
                                        <option value="2">Zamkniete</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Opis</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button variant="primary" type="submit" className="col-3 mb-3 mx-auto d-block">Zatwierdz</Button>
                    </Form>
                </Tab>
            </Tabs>
        </Container>
    )
}
