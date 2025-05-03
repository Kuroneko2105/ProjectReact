import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const DDMagazyn = () => {
    return (
        <Tabs
            defaultActiveKey="nowySurowiec"
            className="mb-3"
        >
            <Tab eventKey="nowySurowiec" title="Wprowadz nowy surowiec">
                <div className="d-flex justify-content-center align-items-center py-5">
                    <Form className="w-50 text-center">
                    <Form.Group className="mb-3">
                            <Form.Label>Nazwa</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Kategoria</Form.Label>
                        <Form.Select>
                            <option>Wybierz</option>
                            <option value="1">Owoc</option>
                            <option value="2">Warzywo</option>
                            <option value="3">Grzyb</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Cena</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Waga</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                        <Button variant="primary" type="submit" className="col-3 mb-3">Zatwierdz</Button>
                    </Form>
                    </div>
            </Tab>
            <Tab eventKey="istniejacySurowiec" title="Wprowadz istniejacy surowiec">
                <div className="d-flex justify-content-center align-items-center py-5">
                    <Form className="w-50 text-center">
                        <Form.Group className="mb-3">
                        <Form.Label>Wybierz istniejacy surowiec</Form.Label>
                        <Form.Select>
                            <option>Wybierz</option>
                            <option value="1">Porzeczka czarna</option>
                            <option value="2">Kalafior</option>
                            <option value="3">Pieczarka</option>
                            <option value="4">Brokul</option>
                            <option value="5">Marchew</option>
                            <option value="6">Truskawka</option>
                            <option value="7">Borowka amerykanska</option>
                            <option value="8">Borowik</option>
                            <option value="9">Cukinia</option>
                            <option value="10">Wisnia</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Waga surowca</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                        <Button variant="primary" type="submit" className="mb-3">Zatwierdz</Button>
                    </Form>
                </div>
            </Tab>

        </Tabs>
    )
}