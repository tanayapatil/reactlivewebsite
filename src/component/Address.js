import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faPen, faEnvelope, faPhone, faArrowLeft, faTrash, faCirclePlus ,faLocationDot} from '@fortawesome/free-solid-svg-icons'

const Address = () => {
    return (
        <>

            <Col lg={4} >
                <div className='single_column '>
                    <div className='info_heading d-flex '>
                        <div className='icon_name d-flex'>
                            <div className='icon_outer'> <FontAwesomeIcon className='icon_contact' icon={faAddressBook} color="gray" /></div>
                            <div className='icon_contact_text'>Address</div>
                        </div>
                        <div className='info_icon_group d-flex'>
                            <div className='info_icon_add'><FontAwesomeIcon icon={faCirclePlus} color="brown" /></div>
                            <div className='info_icon_edit'><FontAwesomeIcon icon={faPen} color="brown" /></div>
                        </div>
                    </div>
                    {/* email  display */}
                    <div className='email d-flex ' style={{paddingBottom:"27px"}}>
                        <div className='email_icon_text d-flex'>
                            <div className='email_icon'><FontAwesomeIcon icon={faLocationDot} /></div>

                            <div className='email_text'>
                                <div>c-1/351/4,GIDC Makapura </div>
                                <div>vadodara-39001,Gujrat </div>
                            </div>
                        </div>
                        
                    </div>

                    {/* phone number */}

                    {/* <div className='email d-flex'>
                        <div className='email_icon_text d-flex'>
                            <div className='email_icon'><FontAwesomeIcon icon={faPhone} /></div>
                            <div className='email_text'>
                                <div>+919284079300 /91 9405567895</div>
                               
                            </div>
                        </div>

                    </div> */}

                </div>


            </Col>


        </>
    )
}

export default Address
