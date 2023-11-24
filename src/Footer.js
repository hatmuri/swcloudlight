import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="Footer">
        <p>© 2023 HATMURI. All rights reserved.</p>
        <div className='Insta1'>
            <p> 운지 </p>
            <a href="https://instagram.com/clounji_dswu?igshid=MTk0NTkyODZkYg==" target="_blank">
                <img className="instaLogo" src={process.env.PUBLIC_URL + '/assets/insta_color.png'} alt='insta'/>
            </a>
        <div className='Insta2'>
            <p> 한빛 </p>
            <a href="https://instagram.com/_hanbit_exhibition_?igshid=MTk0NTkyODZkYg==" target="_blank">
                <img className="instaLogo" src={process.env.PUBLIC_URL + '/assets/insta_color.png'} alt='insta'/>
            </a>
        </div> 
        </div>
        
        </footer>
    );
};

export default Footer;