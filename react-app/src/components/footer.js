import React, { useEffect, useState } from 'react';
import './footer.css'


const Footer = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return isLoaded && (
        <footer className='whole-footer-container'>
            <div className='top-footer-container'>
                <div className='top-footer-header'>
                    StockY. Access the Now.
                </div>
                <div className='top-footer-body'>
                    <div className='top-footer-body-connect'>
                        Connect with Me:
                    </div>
                    <div className='top-footer-body-connect'>
                        Projects:
                    </div>
                </div>
                <div className='top-footer-links-container'>
                    <div className='top-footer-links-container-left'>
                        <div>
                            <a href='https://www.linkedin.com/in/justin-b-kam-4105961a5/' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                                LinkedIn
                            </a>
                        </div>
                        <div>
                            <a href='https://github.com/jb3k' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                                GitHub
                            </a>
                        </div>
                    </div>
                    <div className='top-footer-links-container-left'>
                        <a href='https://airbnb-project-practice.herokuapp.com/' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                            FairBnB
                        </a>
                        <div>
                            <a href='https://sweetiegram.herokuapp.com/' target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                                Sweetiegram
                            </a>
                        </div>
                    </div>

                </div>

            </div>
            <div className='bottom-footer-container'>
                <div className='bottom-footer-text'>
                    <i class="fa-regular fa-copyright"></i>2022 StockY. All Rights Reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;
