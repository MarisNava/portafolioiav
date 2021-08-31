import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import lupa from './lupa.png';

const SearchBar= () => {
    return (
        <Form>
        <Row>
            <Col xs="3"></Col>
            <Col xs="6">
                <InputGroup>
                <InputGroup.Text><img className="icon" src={lupa} width="22px" height="22px"/></InputGroup.Text>
                <FormControl id="inlineFormInputGroupUsername" placeholder="Haz una búsqueda de algún proyecto o escribe una palabra clave" />
                </InputGroup> 
            </Col>
            <Col xs="3"></Col> 
        </Row>                                
    </Form>                     
    );

}
export default SearchBar;