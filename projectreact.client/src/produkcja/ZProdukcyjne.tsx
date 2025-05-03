import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { DZlecenie } from '../types/produkcja/DZlecenie.ts';

export const ZProdukcyjne = () => {
    const [listaZlecenia, setListaZlecenia] = useState<DZlecenie[]>([
        {
            ID: 1,
            Nazwa: 'Zlecenie1',
            Zmiana: 1,
            Mistrz: 'Mistrz1',
            DataDodania: '2024-10-09',
            Opis: 'Opis1',
            Status: 'Aktywne'
        },
        {
            ID: 2,
            Nazwa: 'Zlecenie2',
            Zmiana: 2,
            Mistrz: 'Mistrz2',
            DataDodania: '2024-10-09',
            Opis: 'Opis2',
            Status: 'Aktywne'

        },
        {
            ID: 3,
            Nazwa: 'Zlecenie3',
            Zmiana: 3,
            Mistrz: 'Mistrz3',
            DataDodania: '2024-10-09',
            Opis: 'Opis3',
            Status: 'Aktywne'


        },
        {
            ID: 4,
            Nazwa: 'Zlecenie4',
            Zmiana: 4,
            Mistrz: 'Mistrz4',
            DataDodania: '2024-10-09',
            Opis: 'Opis4',
            Status: 'Aktywne'

        }
    ]);
    useEffect(() => {
        const listaZleceniaPobrane: DZlecenie[] = [
            {
                ID: 1,
                Nazwa: 'Mrozenie wisni',
                Zmiana: 1,
                Mistrz: 'jkowalski',
                DataDodania: '2024-10-09',
                Opis: 'Mrozenie',
                Status: 'Aktywne'

            },
            {
                ID: 2,
                Nazwa: 'Mrozenie Borowki',
                Zmiana: 2,
                Mistrz: 'anowak',
                DataDodania: '2024-10-09',
                Opis: 'Mrozenie',
                Status: 'Zakonczone'

            },
            {
                ID: 3,
                Nazwa: 'Pakowanie wysylki',
                Zmiana: 3,
                Mistrz: 'mzachara',
                DataDodania: '2024-10-09',
                Opis: 'Opis4',
                Status: 'Aktywne'

            },
            {
                ID: 4,
                Nazwa: 'Oklejanie palet wysylkowych',
                Zmiana: 2,
                Mistrz: 'anowak',
                DataDodania: '2024-10-09',
                Opis: 'Opis4',
                Status: 'Nierozpoczete'
            }

        ];
        setListaZlecenia(listaZleceniaPobrane);
    }, []
    )

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
                        <th>Nazwa</th>
                        <th>Zmiana</th>
                        <th>Mistrz</th>
                        <th>Data dodania</th>
                        <th>Opis</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {listaZlecenia.map((item, index) =>
                        <tr key={index}>
                            <td>{item.ID}</td>
                            <td>{item.Nazwa}</td>
                            <td>{item.Zmiana}</td>
                            <td>{item.Mistrz}</td>
                            <td>{item.DataDodania}</td>
                            <td>{item.Opis}</td>
                            <td>{item.Status}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}