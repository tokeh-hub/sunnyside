import React,{useState} from 'react'
import './App.css';
import arrow from './images/icon-arrow-down.svg'
import egg from './desktop/image-transform.jpg'
import cup from './desktop/image-stand-out.jpg'
import emily from './images/image-emily.jpg'
import thomas from './images/image-thomas.jpg'
import jennie from './images/image-jennie.jpg'
import bottle from './desktop/image-gallery-milkbottles.jpg'
import Orange from './desktop/image-gallery-orange.jpg'
import cone from './desktop/image-gallery-cone.jpg'
import sugar from './desktop/image-gallery-sugarcubes.jpg'
import {FaTwitter,FaFacebookSquare,FaInstagram,FaPinterest,FaBars} from 'react-icons/fa'

function App() {
  const [show, setShow] = useState(false)
  console.log(show)
  return (
    <div className="app">
      <section className='first'>
        <div className='navbar'>
        <nav className='sticky'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <h1>sunnyside</h1>
                    <button className='nav-toggle' onClick={()=>setShow(!show)}>
                        <FaBars/>
                    </button>
                </div>
                
                <div className='contain'>
                     <div className={show ? 'list-container show-container ' : 'list-container'}>
                     {/* eslint-disable */}
                    <div className='list'>
                         <a href='#'>about</a>
                         <a href='#'>project</a>
                         <a href='#'>contact</a>
                         <a href='#'>services</a>
                    </div>
                </div>
                </div> 
                
            </div>
        </nav>
        </div>
        <div className='seperate'>
        <h2 className={show? 'none' : 'creatives'}>WE ARE CREATIVES</h2>
        <img className={show ? 'none' :'arrow-img'} src={arrow} alt='arr' />
        </div>
       
      </section>

      <section className='second'>
        <div className='col'>
          <div className='text'>
            <h2>Transform your brand</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet consectetur augue.
              Aliquam non lorem in neque pulvinar volutpat. Nulla vitae lacus vel velit dictum gravida quis sed erat.</p>
              {/* eslint-disable */}
            <a className='learn-more' href='#'>learn more</a>
            </div>
        </div>
        <div className='col'>
        <img src={egg} className='egg' alt='egg'></img>
        </div>
      </section>

      <section className='third'>
      <div className='col'>
        <img src={cup} className='egg' alt='cup'></img>
        </div>
        <div className='col'>
          <div className='text'>
            <h2>Transform your brand</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet consectetur augue.
              Aliquam non lorem in neque pulvinar volutpat. Nulla vitae lacus vel velit dictum gravida quis sed erat.</p>
              {/* eslint-disable */}
            <a className='learn-more' href='#'>learn more</a>
            </div>
        </div>
      </section>

      <section className='designs'>
        <div className='col design'>
        <div className='design-text'>
            <h2>Graphic Designs</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet consectetur augue.
                Aliquam non lorem in neque pulvinar volutpat</p>
          </div>
        </div>
        <div className='col photography'>
        <div className='photography-text'>
            <h2>Photography</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet consectetur augue.
                Aliquam non lorem in neque pulvinar volutpat</p>
          </div>
        </div>
      </section>

      <section className='testimonials'>
           <h1>Client Testimonials</h1>
           <div className='testimonial-container'>
                <div className='testimonial'>
                <div><img className='testimonial-img' src={emily} alt='emily'/></div>
                <div className='testimonial-text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet consectetur augue.
                        Aliquam non lorem in neque pulvinar volutpat</p>
                    <div className='foot'>
                         <h2>Emily J.</h2>
                         <p>Lab Assistant</p>
                      </div>    
                </div>  
                </div>

                <div className='testimonial'>
                <div><img className='testimonial-img' src={thomas} alt='emily'/></div>
                <div className='testimonial-text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet consectetur augue.
                        Aliquam non lorem in neque pulvinar volutpat</p>
                    <div className='foot'>
                         <h2>Thomas R.</h2>
                         <p>Lab Assistant</p>
                      </div>    
                </div>
                  
                </div>

                <div className='testimonial'>
                  <div><img className='testimonial-img' src={jennie} alt='emily'/></div>
                  <div className='testimonial-text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet consectetur augue.
                        Aliquam non lorem in neque pulvinar volutpat</p>
                    <div className='foot'>
                         <h2>Jenny H.</h2>
                         <p>Lab Assistant</p>
                      </div>    
                </div>
                </div>
           </div>
      </section>

      <section className='random-images'>
         <div className='random-image '><img src={bottle} alt='bottle'></img></div>
         <div className='random-image'><img src={Orange} alt='orange'></img></div>
         <div className='random-image margintop'><img src={cone} alt='cone'></img></div>
         <div className='random-image margintop'><img src={sugar} alt='sugar'></img></div>
      </section>

      
       <footer className='footer'>
           <h1 className='footer-title'>sunnyside</h1>
           <div className='footer-links'>
             {/* eslint-disable */}
                 <a href='#'>About</a>
                 <a href='#'>Services</a>
                 <a href='#'>Project</a>
           </div>
           <div className='socials'>
               <div><FaFacebookSquare/></div>
               <div><FaInstagram/></div>
               <div><FaTwitter/></div>
               <div><FaPinterest/></div>
           </div>
      </footer> 
      
    </div>
  );
}

export default App;
