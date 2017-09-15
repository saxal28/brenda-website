import React from 'react';
import {GridContainer} from "./GridContainer";
import {Column} from "./Column";
import {Link} from "react-router-dom";

export const Footer = (props) => {



    return (

        <div className="footer">

            <GridContainer>

                <Column columnSize="2"  hideMobile>

                    <h4 className="footer-category">Quick Links</h4>
                    <Link className="footer-text" to="/">Home</Link>
                    <Link className="footer-text" to="gallery">Gallery</Link>
                    <Link className="footer-text" to="characters">Characters</Link>
                    <Link className="footer-text" to="pricing">Pricing</Link>
                    <Link className="footer-text" to="contact">Contact</Link>
                    <Link className="footer-text" to="book-now">Book Now</Link>

                </Column>

                <Column columnSize="2" hideMobile>

                    <h4 className="footer-category">Contact Info</h4>
                    <p className="footer-text">Email: email@email.com</p>
                    <p className="footer-text">Phone: 123-123-1234</p>
                    <p className="footer-text">Name: Alan Sax</p>

                </Column>

                <Column columnSize="8">

                    <h4 className="footer-category">Follow Us on Social Media</h4>
                    <div className="social-media-row">
                        <img src="http://i.imgur.com/UmXUdRb.png" alt=""/>
                        <img src="http://i.imgur.com/9jWRNcE.png" alt=""/>
                        <img src="http://i.imgur.com/gZMSGP0.png" alt=""/>
                    </div>

                    <h4 className="footer-watermark">
                        Like the Design? Contact the Developer: Alan Sax
                    </h4>

                </Column>

            </GridContainer>

        </div>

    )
}