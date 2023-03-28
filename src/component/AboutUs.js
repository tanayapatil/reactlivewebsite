import React from 'react'
import Layout from './Layout'
import "./AboutUs.css"
import "./Layout.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck, faPen } from '@fortawesome/free-solid-svg-icons'



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Outlet } from 'react-router-dom'




const AboutUs = (props) => {
  return (
    <div className='about'>
      <Layout sidebar>
        <div className='rightSide_col'>
          <div className='about_heading'>About Us</div>

          {/* aboutus logo */}
          <div className='about_logo d-flex'>

            <div className='logo_left' >
              <div className='d-flex'>
                <div className='sidebar_logo_outer_about' >
                  <div className="d-flex">
                    <div className=' verticalLine vertical_left_sidebar_about verticalLine_sidebar_about '></div>
                    <div className=' verticalLine verticalLine_right_sidebar_about  verticalLine_sidebar_about'></div>
                  </div>
                  <div className='logo_char logo_char_sidebar_about'>T</div>
                </div>
                <div className='sidebar_log_name_about'>A.T.Inks <br /><span className='digitalInks'>Digital Inks</span> </div>

              </div>
            </div>

            <div className='verifyCompany'>
              <FontAwesomeIcon className='verify_icon' icon={faSquareCheck} />
              <span className='verified_text' >Verify Company</span>

            </div>
          </div>

          {/* aboutus para */}
          <div className='about_info d-flex'>
            <p className='about_info_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Atque sed rem nobis aperiam laboriosam cum esse
            </p>
            <div className='about_info_icon_outer'><FontAwesomeIcon icon={faPen} color="brown" /></div>
          </div>

          {/* horizontal menus */}
          {/* <HorizontalLayout   /> */}
          <Row>
            <Col lg={8} >
              <div className="d-flex justify-content-evenly horizontal_menus ">
                <Link to='/about/info' className='link'> Info</Link>
                <Link to='/about/faq' className='link'> FAQ</Link>
                <Link to='/about/ complaints and feedback' className='link'> Complaints and feedback</Link>
                <Link to='/about/privacy policy' className='link'> Privacy Policy</Link>
                <Link to='/about/terms and conditions' className='link'> Terms and conditions</Link>
                
              </div>
            
             
            </Col>
           

          </Row>
          <div className='horizontal_line'><hr/></div>
          <Row className='outlet_style'> <Outlet/></Row>
         



        </div>

      </Layout>

    </div>
  )
}

export default AboutUs
