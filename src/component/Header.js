import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './Header.css'
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass ,faCartShopping} from '@fortawesome/free-solid-svg-icons'
import logo from  '../images/customer1.jpg'


const Header = () => {
    return (
        <div className='headerTop'>
            <Container>
                <Row className='mt-2 '>
                    <Col lg={2}  >
                        <div className="d-flex">
                            <div className=' verticalLine verticalLine_left '></div>
                            <div className=' verticalLine verticalLine_right'></div>
                            <div className='logo_name'>A.T.INKS</div>
                        </div>
                        <div className='logo_char'>T</div>
                        <div className='logoBelow_text'>
                            <span className='log_poweredby'>Powered by</span>
                            <sub className='logo_sub'>el</sub>
                            <span className='logo_textColour'>RED</span>
                        </div>
                    </Col>

                    <Col lg={4} className="pt-2">
                        <InputGroup>
                            <div className='search'> <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                            <FormControl className='input_text '
                                type="text"
                                placeholder="Search..."


                            />
                        </InputGroup>

                    </Col>
                    <Col lg={6} className='last_div d-flex justify-content-end pt-2 '>
                        <div className='checkout_button d-flex justify-content-around pt-2'>
                        <FontAwesomeIcon className='mt-1' icon= {faCartShopping} />
                        <div className='checkout_text'>Checkout</div>
                        <div className='checkout_text'>(200)</div>
                         </div>

                         <div className='user_admin d-flex  '>
                            <div >
                                <img src={logo} className='user_img '/>
                            </div>
                            <div className='user_text pt-2  '>
                                User Admin
                            </div>
                         </div>
                    </Col>
                </Row>





            </Container>

        </div>
    )
}

export default Header
