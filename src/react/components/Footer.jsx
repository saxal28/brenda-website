import React from 'react';
import {GridContainer} from "./GridContainer";
import {Column} from "./Column";

export const Footer = () => {
    return (

        <div className="footer">

            <GridContainer>

                <Column columnSize="2"  hideMobile>

                    <h4 className="footer-category">Quick Links</h4>
                    <p className="footer-text">Home</p>
                    <p className="footer-text">Gallery</p>
                    <p className="footer-text">Characters</p>
                    <p className="footer-text">Pricing</p>
                    <p className="footer-text">Contact</p>
                    <p className="footer-text">Book Now</p>

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