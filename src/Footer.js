import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="Footer">

            <div className='contactContainer'>
                <div className='contactIcon'>
                    <img className='contactIconImg' src={process.env.PUBLIC_URL + '/assets/footerIcon.png'}/>
                </div>
                <div className='contactText'>
                    <div className='contactborder'>
                        <p className='contact1'>CONTACT</p>
                        <hr className='hr1'></hr>
                    </div>
                    
                    <div className='contactCrew'>
                        <div className='contactUnji'>
                            <p>운지 문학회</p>
                            <a href=" https://instagram.com/clounji_dswu?igshid=MTk0NTkyODZkYg==" target="_blank" alt="링크">
                                <img className='instaLogo' src={process.env.PUBLIC_URL + '/assets/insta_color.png'}/>
                            </a>
                        </div>
                        <div className='contactUnji'>
                            <p className='hanbit'>한빛</p>
                            <a href="https://instagram.com/_hanbit_exhibition_?igshid=MTk0NTkyODZkYg==" target="_blank" alt="링크">
                                <img className='instaLogo' src={process.env.PUBLIC_URL + '/assets/insta_color.png'}/>
                            </a>
                        </div>
                        <div className='contactUnji'>
                            <p>햇무리</p>
                            <a href="https://github.com/hatmuri/swcloudlight.git" target="_blank" alt="링크">
                                <img className='instaLogo' src={process.env.PUBLIC_URL + '/assets/github_logo.png'}/>
                            </a>
                        </div>
                        <div className='contactUnji'>
                            <p>정영준</p>
                            <a href="https://instagram.com/youngdrawjoon98?igshid=MTk0NTkyODZkYg==" target="_blank" alt="링크">
                                <img className='instaLogo' src={process.env.PUBLIC_URL + '/assets/insta_color.png'}/>
                            </a>
                        </div>
                        
                        
                        
                    </div>
                    
                </div>
            </div>
            <div className='footerblank'>

            </div>
            <div className='footertext'>
                <p>© 2023 HATMURI. All rights reserved</p>
                <p>design by 정영준</p>
            </div>
        
        
        
        </footer>
    );
};

export default Footer;