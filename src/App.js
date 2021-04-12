import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink,  Row, Col, Container } from 'reactstrap';
import classnames from 'classnames';
import './App.css';
import geo from './images/geo.jpeg';
import anthony from './images/anthony.jpeg';
import marven from './images/marven.jpeg';

function App() {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="App">
      <br/>
      <h1>Different types of companies:</h1>
      <p>(Click on the abreviations to show more information about each type)</p>
      <hr/>

      <Container>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
            style={{color:"black"}}
          >
            SNC
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
            style={{color:"black"}}
          >
            SCS
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
            style={{color:"black"}}
          >
            SCA
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
            style={{color:"black"}}
          >
            SAL
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
            style={{color:"black"}}
          >
            SARL
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        {/* 1 */}
        <TabPane tabId="1" style={{border: "1px solid rgb(200, 200, 200)", backgroundColor:"rgb(200, 200, 200)", color:"black", borderRadius:"10px"}}>
          <Row>
            <Col sm="12">
              <h4 style={{color: "red"}}>General Partnership: (Societe en Nom Collectif - SNC)</h4>
              <ul>
                <li>
                  Partnerships are formed of two or more people. The primary characteristic of this form of company is the personal contribution made by each partner, because they are all personally responsible for the company’s debt and commitments.
                </li>
                <li>
                  For this type of companies, no capital amount is required by law.
                </li>
                <li>
                The company do not pay taxes on benefits. However, the shareholders are taxed on the revenue they make from their participation.
                </li>
                <li>
                The company’s name include the names of some or all of the partners and is generally followed by “& Co”.
                </li>
                <li>
                Furthermore, Share transfer cannot happen without the confirmation of all the partners.
                </li>
              </ul>
              <hr/>
              <h4 style={{color: "red"}}>Example of general partnership:</h4>
                <p>
                For example, let’s say that Fred and Melissa decide to open a baking store.</p> 
                <p>The store is named F&M Bakery. By opening a store together, Fred and Melissa are both general partners in the business, F&M Bakery.</p>

            </Col>
          </Row>
        </TabPane>
        {/* 2 */}
        <TabPane tabId="2" style={{border: "1px solid rgb(200, 200, 200)", backgroundColor:"rgb(200, 200, 200)", color:"black", borderRadius:"10px"}}>
          <Row>
            <Col sm="12">
              <h4 style={{color: "red"}}>SCS</h4>
              <ul>
                <li>bla...</li>
              </ul>
              <hr/>
              <h4 style={{color: "red"}}>Example of SCS:</h4>
                <p>
                For example, ...</p> 

            </Col>
          </Row>
        </TabPane>
        {/* 3 */}
        <TabPane tabId="3" style={{border: "1px solid rgb(200, 200, 200)", backgroundColor:"rgb(200, 200, 200)", color:"black", borderRadius:"10px"}}>
          <Row>
            <Col sm="12">
              <h4 style={{color: "red"}}>SCA</h4>
              <ul>
                <li>bla...</li>
              </ul>
              <hr/>
              <h4 style={{color: "red"}}>Example of SCA:</h4>
                <p>
                For example, ...</p> 

            </Col>
          </Row>
        </TabPane>
        {/* 4 */}
        <TabPane tabId="4" style={{border: "1px solid rgb(200, 200, 200)", backgroundColor:"rgb(200, 200, 200)", color:"black", borderRadius:"10px"}}>
          <Row>
            <Col sm="12">
              <h4 style={{color: "red"}}>SAL</h4>
              <ul>
                <li>bla...</li>
              </ul>
              <hr/>
              <h4 style={{color: "red"}}>Example of SAL:</h4>
                <p>
                For example, ...</p> 

            </Col>
          </Row>
        </TabPane>
        {/* 5*/}
        <TabPane tabId="5" style={{border: "1px solid rgb(200, 200, 200)", backgroundColor:"rgb(200, 200, 200)", color:"black", borderRadius:"10px"}}>
          <Row>
            <Col sm="12">
              <h4 style={{color: "red"}}>SARL</h4>
              <ul>
                <li>bla...</li>
              </ul>
              <hr/>
              <h4 style={{color: "red"}}>Example of SARL:</h4>
                <p>
                For example, ...</p> 

            </Col>
          </Row>
        </TabPane>
      </TabContent>

      {/* Presented by */}
      <hr/>
      <h1>Presented by:</h1>
      <Row>
        <Col>
        <img src={geo} alt="Geoffry" style={{borderRadius:"50%", width:"150px", height:"150px"}}></img>
        </Col>
        <Col>
        <img src={marven} alt="Marven" style={{borderRadius:"50%", width:"150px", height:"150px"}}></img>
        </Col>
        <Col>
        <img src={anthony} alt="Anthony" style={{borderRadius:"50%", width:"150px", height:"150px"}}></img>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>Geoffry Abi Farah</p>
        </Col>
        <Col>
        Marven Abou Chehade
        </Col>
        <Col>
        Anthony Chedid
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
