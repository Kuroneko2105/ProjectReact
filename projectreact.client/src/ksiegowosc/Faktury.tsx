import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { Faktura } from '../types/ksiegowosc/Faktura.ts';

export const Faktury = () => {

            const [listaFaktury, setListaFaktury] = useState<Faktura[]>([
                {
                    ID: 1,
                    Imie: 'XYZ',
                    Nazwisko: 'ABC',
                    NIP: 123
                },
                {
                    ID: 1,
                    Imie: 'XYZ',
                    Nazwisko: 'ABC',
                    NIP: 123

                },
                {
                    ID: 1,
                    Imie: 'XYZ',
                    Nazwisko: 'ABC',
                    NIP: 123


                },
                {
                    ID: 1,
                    Imie: 'XYZ',
                    Nazwisko: 'ABC',
                    NIP: 123

                }
            ]);
    useEffect(() => {
        const listaFakturyPobrane: Faktura[] = [
            {
                ID: 1,
                Imie: 'XYZ',
                Nazwisko: 'ABC',
                NIP: 123

            },
            {
                ID: 1,
                Imie: 'XYZ',
                Nazwisko: 'ABC',
                NIP: 123

            },
            {
                ID: 1,
                Imie: 'XYZ',
                Nazwisko: 'ABC',
                NIP: 123

            },
            {
                ID: 1,
                Imie: 'XYZ',
                Nazwisko: 'ABC',
                NIP: 123
            }

        ];
        setListaFaktury(listaFakturyPobrane);
    }, [] )

    return (
        <Container>
            <Accordion defaultActiveKey="filtrowanie">
                <Accordion.Item eventKey="filtrowanie">
                    <Accordion.Header>Filtrowanie i sortowanie</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row className="align-items-center mb-3">
                                <Col className="col-1">
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="ID" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Control type="text" placeholder="Szukaj po nazwie" />
                                    </Form.Group>
                                </Col>
                                <Col className="col-2 d-flex align-items-center">
                                    <Form.Select>
                                        <option>Zmiana</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Col className="d-flex align-items-center">
                                        <Form.Select>
                                            <option>Status</option>
                                            <option value="1">Nierozpoczete</option>
                                            <option value="2">Aktywne</option>
                                            <option value="3">Zakonczone</option>
                                        </Form.Select>
                                    </Col>
                                </Col>
                                <Col >
                                    <Form.Group className="d-flex align-items-center">
                                        <Form.Select>
                                            <option value="1">Sortowanie</option>
                                            <option value="2">Najnowsze</option>
                                            <option value="3">Najstarsze</option>
                                            <option value="4">Rosnaco (ID)</option>
                                            <option value="5">Malejaco (ID)</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col className="col-2 d-flex align-items-center">
                                    <Button variant="primary" type="submit" className="m-1">Szukaj</Button>
                                    <Button variant="primary" type="submit" className="m-1">Odswiez</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Table striped bordered hover className="table-container">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>NIP</th>
                    </tr>
                </thead>
                <tbody>
                    {listaFaktury.map((item, index) =>
                        <tr key={index}>
                            <td>{item.ID}</td>
                            <td>{item.Imie}</td>
                            <td>{item.Nazwisko}</td>
                            <td>{item.NIP}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}