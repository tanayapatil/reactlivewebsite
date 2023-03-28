import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faPen, faEnvelope, faPhone, faArrowLeft, faTrash, faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import './Info.css';
import Address from './Address'
import HourOperation from './HourOperation';

// modal
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Info = () => {

    const getLocalItem = () => {
        let list = JSON.parse(localStorage.getItem('storage'))
        return list
    }

    const [show, setShow] = useState(false);
    const [value, setValue] = useState(true)
    const [emailData, setEmailData] = useState('')
    const [phone, setPhone] = useState('')
    const [item, setItem] = useState(getLocalItem())
    const [isEditItem, setIsEditItem] = useState(null)
    const [toggleSubmit, setToggleSubmit] = useState(true)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    useEffect(() => {

        // const arr=[{email:'patiltanaya513@gmail.com',phone:9287569866}]
        localStorage.setItem("storage", JSON.stringify(item))
        // localStorage.setItem("storage",JSON.stringify(arr))
    }, [item])



    const back = () => {
        if (value) {
            setShow(false)
        }
        else {
            setValue(true)
        }
    }

    // const add = () => {
    //     if (!emailData && !phone) {
    //         alert('enter email and phone')
    //     }
    //     else if (emailData && phone && !toggleSubmit) {
    //         // udated values added

    //         console.log(toggleSubmit)

    //         const allData = { email: emailData, phone: phone }
    //         console.log(allData)

    //         setItem(
    //             item.map((ele) => {
    //                 if (ele.id === isEditItem) {
    //                     return { ...ele, allData }

    //                 }
    //                 return ele

    //             })
    //         )







    //         // const updateArray=item.map((elem,index)=>{
    //         //     if(elem.id===isEditItem){
    //         //         return {...elem,email: emailData, phone: phone }
    //         //     }
    //         //     return elem
    //         // })
    //         // console.log(updateArray)
    //         // setItem(updateArray)


    //         setToggleSubmit(true)
    //         // setEmailData('')
    //         // setPhone('')


    //     }
    //     else {

    //         // values added
    //         const allInputs = { id: new Date().getTime().toString(), email: emailData, phone: phone }
    //         handleClose()
    //         setItem([...item, allInputs])
    //         setEmailData('')
    //         setPhone('')
    //     }
    // }



    // function for data add into array////

    const addDataItem = () => {
        if (!emailData || !phone) {
            alert('enter email and phone')
        }
        else {
            const allInputs = { id: new Date().getTime().toString(), email: emailData, phone: phone }
            handleClose()
            setItem([...item, allInputs])
            setEmailData('')
            setPhone('')
        }
    }

    // function for data udate

    const updateDataItem = () => {
        if (!emailData || !phone) {
            alert('enter email and phone')
        }
        else {


            const updateArray = item.map((elem, index) => {
                if (elem.id === isEditItem) {
                    return { ...elem, email: emailData, phone: phone }
                }
                return elem
            })
            console.log(updateArray)
            setItem(updateArray)
            handleClose()
        }




    }

    const addDataModal = () => {
        handleShow()
        setValue(false)
        setToggleSubmit(true)
        setEmailData('')
        setPhone('')
    }
    const editDataModal = () => {
        handleShow()
        setValue(true)
        setToggleSubmit(true)

    }
    const deleteData = (id) => {
        console.log(id)
        const deleteItems = item.filter((element, index) => {
            return id !== element.id


        })
        setItem(deleteItems)

    }

    const updateData = (id) => {
        setToggleSubmit(false)
        setValue(false)

        const updateValue = item.find((item, index) => {
            return id === item.id
        })
        console.log(updateValue)
        setEmailData(updateValue.email)
        setPhone(updateValue.phone)
        setIsEditItem(id)

    }




    return (
        <>






            <Container>
                {item.slice(0, 1).map((ele, index, arr) => {
                    return (

                        <Row>
                            <Col lg={4}>
                                <div className='single_column'>
                                    <div className='info_heading d-flex '>
                                        <div className='icon_name d-flex'>
                                            <div className='icon_outer'> <FontAwesomeIcon className='icon_contact' icon={faAddressBook} color="gray" /></div>
                                            <div className='icon_contact_text'>Contact</div>
                                        </div>
                                        <div className='info_icon_group d-flex'>
                                            <div className='info_icon_add'><FontAwesomeIcon icon={faCirclePlus} color="brown" onClick={addDataModal} /></div>
                                            <div className='info_icon_edit'><FontAwesomeIcon icon={faPen} color="brown" onClick={editDataModal} /></div>
                                        </div>
                                    </div>
                                    {/* email  display */}
                                    <div className='email d-flex'>
                                        <div className='email_icon_text d-flex'>
                                            <div className='email_icon'><FontAwesomeIcon icon={faEnvelope} /></div>

                                            <div className='email_text'>
                                                <div>{ele.email} </div>
                                                <div>patulkghh321@</div>
                                            </div>
                                        </div>
                                        <div className='total_emails '>{item.length}</div>
                                    </div>

                                    {/* phone number */}
                                    <div className='email d-flex'>
                                        <div className='email_icon_text d-flex'>
                                            <div className='email_icon'><FontAwesomeIcon icon={faPhone} /></div>
                                            <div className='email_text'>
                                                <div>{ele.phone}/91 9405567895</div>
                                                {/* <div>patulkghh321@</div> */}
                                            </div>
                                        </div>

                                    </div>

                                </div>


                            </Col>

                            {/* ******** hardcoaded values  ********** */}

                            <Address/>
                            <HourOperation/>
                            

                            
                        </Row>
                        

                    )
                })}

            </Container>


            {/* modal dispaly */}

            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} className='modal_position'>
                <Modal.Header >
                    <Modal.Title >
                        <div className='d-flex'>
                            <div className='modal_heading_icon'><FontAwesomeIcon icon={faArrowLeft} onClick={back} /></div>
                            <div className='modal_heading_text'>Contacts</div>
                        </div>
                        <div className='modal_heading_subtext'>Please provide company's email and contact</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ height: 400 }}>
                    {value ?
                        <Container>
                            {item.slice(-3).map((ele, index) => {
                                return (

                                    <Row className='mt-1' key={ele.id}>
                                        <Col lg={2}></Col>
                                        <Col lg={8}>
                                            <div className='single_column'>
                                                <div className='info_heading d-flex '>
                                                    <div className='icon_name d-flex'>
                                                        <div className='icon_outer'> <FontAwesomeIcon className='icon_contact' icon={faAddressBook} color="gray" /></div>
                                                        <div className='icon_contact_text'>Contact</div>
                                                    </div>
                                                    <div className='icons_modal d-flex'>
                                                        <div className='icon_edit_modal'>
                                                            <FontAwesomeIcon icon={faPen} color="brown" onClick={() => { updateData(ele.id) }} />

                                                        </div>
                                                        <div className='icon_delete_modal'  > <FontAwesomeIcon icon={faTrash} color="brown" onClick={() => { deleteData(ele.id) }} /></div>
                                                    </div>
                                                </div>
                                                {/* email  display */}
                                                <div className='email d-flex'>
                                                    <div className='email_icon_text d-flex'>
                                                        <div className='email_icon'><FontAwesomeIcon icon={faEnvelope} /></div>
                                                        <div className='email_text'>
                                                            <div>{ele.email} </div>
                                                            <div>patulkghh321@</div>
                                                        </div>
                                                    </div>
                                                    {/* <div className='total_emails'>+5</div> */}
                                                </div>

                                                {/* phone number */}
                                                <div className='email d-flex'>
                                                    <div className='email_icon_text d-flex'>
                                                        <div className='email_icon'><FontAwesomeIcon icon={faPhone} /></div>
                                                        <div className='email_text'>
                                                            <div>{ele.phone}/91 9405567895</div>
                                                            {/* <div>patulkghh321@</div> */}
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>


                                        </Col>
                                    </Row>

                                )


                            })}

                        </Container>
                        :

                        <>
                            <div>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" value={emailData} onChange={(e) => { setEmailData(e.target.value) }} required />
                            </div>
                           

                            <div className='mt-4'>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="tel" placeholder="phone number" value={phone} onChange={(e) => { setPhone(e.target.value) }} required />
                            </div>
                            
                        </>







                    }



                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button> */}


                    {toggleSubmit ? <Button variant="danger" onClick={addDataItem} style={{ width: 500 }}>

                        Save Changes
                    </Button>
                        :
                        <Button variant="danger" onClick={updateDataItem} style={{ width: 500 }}>

                            update
                        </Button>
                    }




                </Modal.Footer>
            </Modal>












        </>
    )
}

export default Info
