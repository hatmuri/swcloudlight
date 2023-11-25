import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="Footer">
        
        <div className='Insta'>
            
                <p> 운지 </p>
                <a href="https://instagram.com/clounji_dswu?igshid=MTk0NTkyODZkYg=="  target="_blank" rel="noopener noreferrer">
                    <img className="instaLogo" src={process.env.PUBLIC_URL + '/assets/insta_color.png'} alt='insta'/>
                </a>
                
                <p className='hanbit'> 한빛 </p>
                <a href="https://instagram.com/_hanbit_exhibition_?igshid=MTk0NTkyODZkYg=="  target="_blank" rel="noopener noreferrer">
                    <img className="instaLogo" src={process.env.PUBLIC_URL + '/assets/insta_color.png'} alt='insta'/>
                </a>
                
                
            
            
        </div> 

        <p>© 2023 HATMURI. All rights reserved.</p>
        
        
        </footer>
    );
};

export default Footer;