import React, { Component } from 'react';
import {Dropdown,DropdownItem, DropdownButton} from 'react-bootstrap';


class ThemeSwitcher extends Component {

  render() {
      
    return (
      <div>
        <div>
          <div className="center-block text-center">
          <DropdownButton size="sm"
          title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          </div>
          
        </div>
      </div>
    );
    
  }
  
}

export default ThemeSwitcher;