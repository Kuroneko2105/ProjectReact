import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import { DDMagazyn } from '../types/magazyn/DDMagazyn.ts';

export const ZMagazyn = () => {
    const [listaMagazyn, setListaMagazyn] = useState<DDMagazyn[]>([
        {
            ID: 1,
            Nazwa: "Nazwa1",
            Kategoria: "Kategoria1",
            Cena: 1,
            Waga: 1,
            Data_ostatniej_modyfikacji: '2025-01-01'
        },
        {
            ID: 2,
            Nazwa: "Nazwa2",
            Kategoria: "Kategoria2",
            Cena: 8.99,
            Waga: 1092,
            Data_ostatniej_modyfikacji: '2025-02-02'
        },
        {
            ID: 3,
            Nazwa: "Nazwa3",
            Kategoria: "Kategoria3",
            Cena: 3,
            Waga: 3,
            Data_ostatniej_modyfikacji: '2025-03-03'

        },
        {
            ID: 4,
            Nazwa: "Nazwa4",
            Kategoria: "Kategoria4",
            Cena: 4,
            Waga: 4,
            Data_ostatniej_modyfikacji: '2025-04-04'

        }
    ]);
    useEffect(() => {
        const listaMagazynPobrane: DDMagazyn[] = [
            {
                ID: 1,
                Nazwa: "Borowka",
                Kategoria: "Owoc",
                Cena: 10,
                Waga: 3540,
                Data_ostatniej_modyfikacji: '2023-12-28'
            },
            {
                ID: 2,
                Nazwa: "Kalafior",
                Kategoria: "Warzywo",
                Cena: 8.99,
                Waga: 1092,
                Data_ostatniej_modyfikacji: '2025-02-03'
            },
            {
                ID: 3,
                Nazwa: "Pieczarka",
                Kategoria: "Grzyb",
                Cena: 11.23,
                Waga: 5543,
                Data_ostatniej_modyfikacji: '2024-08-15'
            }

        ];
        setListaMagazyn(listaMagazynPobrane);
    },[]
    )
    return (
        <Container className="w-100">
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
                                            <option>Kategoria</option>
                                            <option value="1">Owoc</option>
                                            <option value="2">Warzywo</option>
                                            <option value="3">Grzyb</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="col-2">
                                        <Form.Label>Cena</Form.Label>
                                        <Form.Group className="d-flex align-items-center gap-2">
                                            <Form.Control type="number" placeholder="Od" />
                                            <span>-</span>
                                            <Form.Control type="number" placeholder="Do" />
                                         </Form.Group>
                                    </Col>
                                    <Col className="col-2">
                                        <Form.Label>Ilosc</Form.Label>
                                        <Form.Group className="d-flex align-items-center gap-2">
                                            <Form.Control type="number" placeholder="Od" />
                                            <span>-</span>
                                            <Form.Control type="number" placeholder="Do" />
                                        </Form.Group>
                                    </Col>
                                    <Col className="col-4">
                                        <Form.Label>Data ostatniej modyfikacji</Form.Label>
                                        <Form.Group className="d-flex align-items-center gap-2">
                                            <Form.Control type="date" />
                                            <span>-</span>
                                        <Form.Control type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                                        </Form.Group>
                                    </Col>
                                <Col >
                                    <Form.Label>Sortowanie</Form.Label>
                                    <Form.Group className="d-flex align-items-center">
                                        <Form.Select>
                                            <option value="1">Najnowsze</option>
                                            <option value="2">Najstarsze</option>
                                            <option value="3">Najtansze</option>
                                            <option value="4">Najdrozsze</option>
                                            <option value="5">A-Z</option>
                                            <option value="5">Z-A</option>
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
                                <th>Kategoria</th>
                                <th>Ilosc (kg)</th>
                                <th>Cena (zl/kg)</th>
                                <th>Data ostatniej modyfikacji</th>
                            </tr>
                        </thead>
                        <tbody>
                    {listaMagazyn.map((item, index) =>
                        <tr key={index}>
                            <td>{item.ID}</td>
                            <td>{item.Nazwa}</td>
                            <td>{item.Kategoria}</td>
                            <td>{item.Cena}</td>
                            <td>{item.Waga}</td>
                            <td>{item.Data_ostatniej_modyfikacji}</td>
                        </tr>        
                    )}
                        </tbody>
                    </Table>
        </Container>
        );
};

