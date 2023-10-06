import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


    function Footer() {
  return (
    <MDBFooter style={{backgroundColor:'	#0F0F0F'}} bgColor='' className='text-center text-lg-start text-secondary'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer style={{fontSize:'13px' }}  className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Gomart
              </h6>
              <p>
                online fashion store that offers a wide range of clothing options ranging from t-shirts to shorts , sneakers , caps , bags
                in different sport and luxury brands
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' style={{fontSize:'13px' }} className='mx-auto mb-4 text-decoration-none text-xxs'>
              <h6 className='text-uppercase text-white fw-bold mb-4'>Shop</h6>
              <p>
                <a href='#!' className='text-reset text-decoration-none text-xxs'>
                  Sneakers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Shirt
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Shorts
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Bags
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4  text-white'>Resources</h6>
              <p>
                <a href='/checkout' className='text-reset text-decoration-none'>
                  Checkout
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Settings
                </a>
              </p>
              <p>
                <a href='/review' className='text-reset text-decoration-none'>
                  Review
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase  text-white fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Lagos, Nigeria 
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@gomart.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='/'> Tomi
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer