import React, { Component } from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import {Container,Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './App.css';

class ThemeSwitcher extends Component {

  render() {
      
    return (
      <div>
        <div>
          <div className="bttn-switch">
          <Container>
          <Row>
            <Col xs="3"> 
              <p>Categoría</p>
            </Col>
            <Col xs="3">
              <p>Subcategoría</p>
            </Col>
            <Col xs="2"></Col>
            <Col xs="4">
              <p>Ordenar</p>
            </Col>
          </Row>
          <Row>
            <Col xs="3">
          
             <Form>
               <Form.Label>
                <Form.Select className="me-sm-2" id="catselect">
                  <option className="opt" value="0">Todo</option>
                  <option className="opt" value="1">Aplicaciones</option>
                  <option className="opt" value="2">Audiovisual</option>
                  <option className="opt" value="3">Demo Reel</option>
                  <option className="opt" value="4">Proyecto 2D</option>
                  <option className="opt" value="5">Proyecto 3D</option>
                  <option className="opt" value="6">Videojuegos</option>
                  <option className="opt" value="7">Otros</option>
                </Form.Select>
               </Form.Label>
            </Form>
  {/*
            <DropdownButton className="cate"size="sm" title="Proyectos 2D">
                    <Dropdown.Item> <option value="0"> Aplicaciones </option> </Dropdown.Item>
                    <Dropdown.Item> <option value="1"> Aplicacions </option></Dropdown.Item>
                    <Dropdown.Item> <option value="2"> Aplicas </option></Dropdown.Item>
                   
              </DropdownButton>  */}
            </Col>
            <Col xs="3">
            <Form>
               <Form.Label>
                <Form.Select className="me-sm-2" id="catselect">
                  <option className="opt" value="0">Animación 2D</option>
                  <option className="opt" value="1">Animación 3D</option>
                  <option className="opt" value="2">Concept Art</option>
                  <option className="opt" value="3">Ilustración</option>
                  <option className="opt" value="4">Modelado 3D</option>
                  
                </Form.Select>
               </Form.Label>
            </Form>

            {/*
                <DropdownButton className="subcat" title="Ilustración">
                      <Dropdown.Item href="#/action-1">Animación 2D</Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Animación 3D</Dropdown.Item>
                      <Dropdown.Item href="#/action-1">Modelado 3D</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Cocept Art</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Ilustración</Dropdown.Item>
                </DropdownButton>
                */}
            </Col>
            <Col xs="2"></Col>
            <Col xs="4">
            <Form>
               <Form.Label>
                <Form.Select className="me-sm-2" id="catselect">
                  <option className="opt" value="0">Más reciente</option>
                  <option className="opt" value="1">Menos reciente</option>
                  
                </Form.Select>
               </Form.Label>
            </Form>
            {/*

              <DropdownButton className="filtro"size="sm" title="Más reciente">
                    <Dropdown.Item href="#/action-1">Más reciente</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Menos reciente</Dropdown.Item>
              </DropdownButton>
              */}
            </Col>
          </Row>
        </Container>
          
          </div>
          
        </div>
      </div>
    );
    
  }
  
}

export default ThemeSwitcher;