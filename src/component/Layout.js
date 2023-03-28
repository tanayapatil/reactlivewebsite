import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css';
import './Layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTableColumns, faBox, faUserGroup, faHandshake, faTrophy, faAddressCard, faMoneyBills,faCircleQuestion} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




const Layout = (props) => {
    return (
      props.sidebar ?
        <div className='Layout'>
            <Container>
                <Row>
                    <Col lg={2}  className='mt-5 sidebar_col p-4'>
                  
                  {/* sidebar logo */}

                        <div className='d-flex'>
                            <div className='sidebar_logo_outer' >
                                <div className="d-flex">
                                    <div className=' verticalLine vertical_left_sidebar verticalLine_sidebar '></div>
                                    <div className=' verticalLine verticalLine_right_sidebar  verticalLine_sidebar'></div>
                                </div>
                                <div className='logo_char logo_char_sidebar'>T</div>
                            </div>
                            <div className='sidebar_log_name'>A.T.Inks</div>
                        </div>

                        {/* dashboard menus */}


                        <div className='dashboard_menus mt-5'>
                        <Link to="/" className='anchor_link'>
                            <div className='dashboard_singlemenu d-flex '>

                                <FontAwesomeIcon className='icon_size' icon={faTableColumns} color='rgb(192, 179, 179)' size="2x" />
                                <div className='dashboard_menuText'>Dashboard</div>
                            </div>
                            </Link>

                            <div className='dashboard_singlemenu d-flex mt-3 '>

                                <FontAwesomeIcon className='icon_size' icon={faBox} color='rgb(192, 179, 179)' size="2x" />
                                <div className='dashboard_menuText'>Order</div>
                            </div>

                            <div className='dashboard_singlemenu d-flex mt-3 '>

                                <FontAwesomeIcon className='icon_size' icon={faUserGroup} color='rgb(192, 179, 179)' size="2x" />
                                <div className='dashboard_menuText teammembers'>Team Members</div>
                            </div>


                            <div className='dashboard_singlemenu d-flex mt-3 '>

                                <FontAwesomeIcon className='icon_size' icon={faHandshake} color='rgb(192, 179, 179)' size="2x" />
                                <div className='dashboard_menuText teammembers'>Partners</div>
                            </div>

                            <div className='dashboard_singlemenu d-flex mt-3 '>

                                <FontAwesomeIcon className='icon_size' icon={faTrophy} color='rgb(192, 179, 179)' size="2x" />
                                <div className='dashboard_menuText teammembers'>Award & Honours</div>
                            </div>
                            
                           <Link to="/about" className='anchor_link'>
                            <div className='dashboard_singlemenu d-flex mt-3 '>

                               <div> <FontAwesomeIcon className='icon_size' icon={faAddressCard} color='rgb(192, 179, 179)' /></div>
                                <div className='dashboard_menuText teammembers'>About</div>
                            </div>
                            </Link>

                            <div className='dashboard_singlemenu d-flex mt-3 '>

                                <FontAwesomeIcon className='icon_size' icon={faMoneyBills} color='rgb(192, 179, 179)' />
                                <div className='dashboard_menuText teammembers'>Payment Info</div>
                            </div>


                        </div>
               
               {/* help block */}

                        <div className='help'>
                        <div className='help_icon_outer'><FontAwesomeIcon className='help_icon' icon={faCircleQuestion}/></div>
                       <div className='help_heading'>Need Help ?</div>
                       <p className='help_para'>Our support team is at your disposal</p>
                       <div className='help_button'>Get Help</div>
                      

                        </div>


                    </Col>
                    <Col lg={10}  className="mt-5" >{props.children}</Col>
                </Row>
            </Container>


        </div>

       :props.children
    )
}

export default Layout
