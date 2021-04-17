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
      <div className="container">
      <br/>
      <h1>Introduction</h1>
      <p>At a certain point, all of us will want to establish our own companies. However, with all the companies types available it can be overwhelming if you are just getting started in the business world. The goal from this project is to clarify the different options available to make choosing the type of your company  easier. Inspired by the French commercial law, the Lebanese commercial law contains the following types of companies: “Societe en Nom Collectif - SNC ”, “Societe en Commandite Simple - SCS ”, “Societe en Commandite par Actions – SCA”, “Societe a Responsabilite Limite – SARL” et “Societe Anonyme Libanaise – SAL”.</p>
      </div>
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
              <h4 style={{color: "red"}}>SCS (société en commandite simple) </h4>
              <p>The société en commandite simple (SCS) is a company with two categories of shareholder: 'commandités' (active partners) and 'commanditaires' (limited partners).</p>
              <hr/>
              <h4 style={{color: "red"}}>Active Partners:</h4>
              Active partners have the status of shareholding partners; they are considered as traders and are jointly and severally liable for all of the companies' debts.
              <br/><br/>
              <h5>The following cannot be active partners: </h5>
              <ul>
                <li>Minors, even those able to vote</li>
                <li>Certain protected adults (adults under guardianship or curatorship) a person sentenced by the Court for personal bankruptcy, bankruptcy or similar offences, or who have been prohibited from directing, managing, running or controlling either a privately-held commercial undertaking, or a company, except where rehabilitated).</li>
                <li>Persons in professions or holding mandates that are incompatible with the position of trader. This is the case for civil servants, lawyers and chartered accountants.</li>
              </ul>
     
              <h4 style={{color: "red"}}>Limited Partners:</h4>
                <p>
                Limited partners are only responsbible for company debts up to the amount of their contributions; they are not considered as traders.
The société en commandite simple is formed by at least two partners: one active and one limited partner. No maximum number has been laid down by the law.</p> 
<br/>
<hr/>
<h4 style={{color: "red"}}>The benefits of an SCS:</h4>
                <p>
                An SCS may have objects that are not of a commercial nature, unlike an SARL or an SNC.
The active partner(s) may be a legal person. The obligation of affiliation to the CAMTI-CARTI which relates to natural persons is then inoperative.
If it is a legal person with limited liability, SARL, SA, etc, the disadvantage of undefined liability of the active partner is considerably reduced.
Shareholding by limited partners is of a confidential nature: their name(s) are not divulged to third parties, and do not appear on transcripts from the Trade and Industry Register.</p> 

            </Col>
          </Row>
        </TabPane>
        {/* 3 */}
        <TabPane tabId="3" style={{border: "1px solid rgb(200, 200, 200)", backgroundColor:"rgb(200, 200, 200)", color:"black", borderRadius:"10px"}}>
          <Row>
            <Col sm="12">
              <h4 style={{color: "red"}}>SCA (société en commandite)</h4>
              <p>
              A partnership limited by shares (société en commandite par actions - SCA) is a commercial company. It combines features of a limited partnership (société en commandite simple - SCS) with those of a public limited company (société anonyme - SA).
The main difference between an SCA and an SCS is that the ownership shares of an SCA are freely transferable, while those of an SCS are not. <br/><br/>
In practice, SCAs may be used in all types of business. <br/><br/>The benefit of an SCA is that its management is stable.<br/><br/>
The SCA is a useful legal form for bringing together investors and entrepreneurs.<br/><br/> In addition, it is set up to enable the company to resist hostile takeovers. It is also suitable for small and medium-sized family businesses (ownership may be transferred to a minor heir).
The SCA is founded by at least 2 partners: one general partner and one limited partner.<br/><br/>
The main difference between general partners and limited partners is their respective liability.

              </p>

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

<hr/>
<h1>How Companies Avoid Taxes:</h1>
<h4 style={{color: "red"}}>Foreign Subsidiaries</h4>
<p>
Although the corporate tax rate has been reduced, companies are still using tax loopholes to save money. This includes finding ways to shift profits to foreign subsidiaries in countries with lower tax rates, a practice known as an offshore tax-shelter.
</p>
<br/>
<p>
Companies do not have to pay taxes on income earned abroad until that income is repatriated from abroad. That tax, however, can be deferred indefinitely if the income is held abroad indefinitely. This money held abroad can be borrowed against and even used to invest in assets.
</p>
<h4 style={{color: "red"}}>Depreciation</h4>
<p>Another Fortune 500 and other major companies avoid taxes is with accelerated depreciation. The relative degree of freedom in tax laws has allowed companies to expense the cost of their capital at a faster pace than it actually wears out.
This allows a company to declare less income and defer paying taxes until later years, and as long as the company continues to invest, the deferral of taxes can continue for an indefinite amount of time.</p>
<h4 style={{color: "red"}}>Stock Options</h4>
<p>
Giving out stock options to employees as a part of their compensation is another avenue that has helped companies reduce their total tax bill. When the options are exercised, the difference between what employees pay for the stock and its market value can be claimed for a tax deduction.
</p>
<h4 style={{color: "red"}}>Industry-Specific Options</h4>
<p>Finally, some industries such as research, oil and gas drilling, ethanol production, alternative energy, video game, and film production, are privileged by the federal tax code to receive certain tax breaks.</p>
<Container>

</Container>
<hr/>

      {/* Presented by */}
      <hr/>
      <h1>Presented by:</h1>
      <Row>
        <Col>
        <img src={geo} alt="Geoffry" style={{borderRadius:"50%", width:"150px", height:"150px"}}></img>
        <p>Geoffry Abi Farah</p>
        </Col>
        <Col>
        <img src={marven} alt="Marven" style={{borderRadius:"50%", width:"150px", height:"150px"}}></img>
        <p>Marven Abou Chehade</p>
        </Col>
        <Col>
        <img src={anthony} alt="Anthony" style={{borderRadius:"50%", width:"150px", height:"150px"}}></img>
        <p>Anthony Chedid</p>
        </Col>
      </Row>
    
      </Container>
    </div>
  );
}

export default App;
