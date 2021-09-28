import React from 'react';
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { blue } from '@mui/material/colors';

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                  
                <p>&copy; All Copyright Reserved to Sameer Developer of this website</p>
                <ul>
                    <li><a href="https://www.facebook.com/profile.php?id=100009529212122"><FacebookIcon /></a></li>
                    <li><a href="https://twitter.com/Sameerkhan_45"><TwitterIcon /></a></li>
                    <li><a href="https://github.com/Sameer-472"><GitHubIcon /></a></li>
                    <li><a href="https://www.instagram.com/skywalker_sameer/"><InstagramIcon /></a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer
