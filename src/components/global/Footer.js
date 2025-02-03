import React from 'react'
import { Link } from 'react-router-dom';
/*Image*/
import HSHouseLogoSVG from '../../assets/images/hs-house.svg';
import HSHouseLogoWEBP from '../../assets/images/hs-house.webp';
import HSHouseLogoPNG from '../../assets/images/hs-house.png';
/*Module CSS*/
import classes from '../../assets/styles/footer.module.css';

export default function Footer() {
  return (
    <footer>
        <div className={classes["footer-wrapper"]}>
            <div className='container-xl'>
                <div className={classes["hs-logo-wrapper"] + " mb-5"}>
                    <picture>
                        <source srcSet={HSHouseLogoSVG} type='image/svg+xml' />
                        <source srcSet={HSHouseLogoWEBP} type='image/webp' />
                        <img src={HSHouseLogoPNG} alt='HomeServe Logo' />
                    </picture>
                </div>
                <div className="d-flex flex-row flex-wrap mb-4">
                    <div className={classes["footer-links-column-wrapper"] + " d-flex flex-column mb-3"}>
                        <a className={classes["footer-links-header"] + " lead homeserve-thick"} 
                            data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Products and Services</a>
                        <ul className={classes["footer-links-column"] + " collapse"} id='collapseExample'>
                            <li><Link to="#">What we do</Link></li>
                            <li><Link to="#">Plumbing and Drainage Cover</Link></li>
                            <li><Link to="#">Gas Boiler and Heating Cover</Link></li>
                            <li><Link to="#">Landlord Cover</Link></li>
                            <li><Link to="#">New Boilers</Link></li>
                        </ul>
                    </div>
                    <div className={classes["footer-links-column-wrapper"] + " d-flex flex-column mb-3"}>
                        <a className={classes["footer-links-header"] + " lead homeserve-thick"} 
                            data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">About Us</a>
                        <ul className={classes["footer-links-column"] + " collapse"} id='collapseExample2'>
                            <li><Link to="#">About HomeServe</Link></li>
                            <li><Link to="#">Careers at HomeServe</Link></li>
                            <li><Link to="#">Become a Tradesperson</Link></li>
                            <li><Link to="#">Media Centre</Link></li>
                        </ul>
                    </div>
                    <div className={classes["footer-links-column-wrapper"] + " d-flex flex-column mb-3"}>
                        <a className={classes["footer-links-header"] + " lead homeserve-thick"} 
                            data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">More from HomeServe</a>
                        <ul className={classes["footer-links-column"] + " collapse"} id='collapseExample3'>
                            <li><Link to="#">Frequently Asked Questions</Link></li>
                            <li><Link to="#">Knowledge Hub</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className={classes["footer-links-column-wrapper"] + " flex-grow-1 mb-3"}>
                        <ul className={`${classes["footer-links-column"]} ${classes["social-links"]} d-flex flex-row`}>
                            <li><Link to="#" target='_blank' rel='noopener'><i aria-hidden='true' className='icon-hs-facebook-circle icon-hs-2-5x' /></Link></li>
                            <li><Link to="#" target='_blank' rel='noopener'><i aria-hidden='true' className='icon-hs-twitter-circle icon-hs-2-5x' /></Link></li>
                            <li><Link to="#" target='_blank' rel='noopener'><i aria-hidden='true' className='icon-hs-youtube-circle icon-hs-2-5x' /></Link></li>
                            <li><Link to="#" target='_blank' rel='noopener'><i aria-hidden='true' className='icon-hs-instagram icon-hs-2-5x' /></Link></li>
                            <li><Link to="#" target='_blank' rel='noopener'><i aria-hidden='true' className='icon-hs-linked-in icon-hs-2-5x' /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className={classes["footer-inline-links"]}>
                    <ul className={classes["footer-links-column"] + " d-flex flex-column flex-md-row pb-5"}>
                        <li><Link to='#'>Privacy Policy</Link></li>
                        <li><Link to='#'>Cookies Policy</Link></li>
                        <li><Link to='#'>Terms of Use</Link></li>
                        <li><Link to='#'>Anti-Slavery Statement</Link></li>
                        <li><Link to='#'>Gender Pay Information</Link></li>
                    </ul>
                </div>
            </div>

            <div><hr className={classes["red-line"]} /></div>

            <div className={classes["footer-base-content"]}>
                <div className='container-xl'>
                    <span>&copy; {`HomeServe Membership Limited ${new Date().getFullYear()}`}</span>
                </div>
            </div>

            <div className={classes["footer-baseline"]}>
                <div className='container-xl'>
                    <p>HomeServe is a trading name of HomeServe Membership Limited. Authorised and regulated by the Financial Conduct Authority for its general insurance activities. Registered in England and Wales, number 2770612. Registered office: Cable Drive, Walsall, WS2 7BN. VAT registration number GB 559669669.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
