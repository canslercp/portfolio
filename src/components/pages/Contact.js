import React from 'react';

export default function Contact() {
    return(
        <div className='contact-container'>
            <div className='contact'>
            <p>Email: canslercp@gmail.com</p>  
            <p>Phone: 828-320-6993</p>
            </div>
            <div className='contact'>
            <a href='https://github.com/canslercp' target="_blank" rel="noreferrer">
            <p>GitHub: github.com/canslercp</p>  
            </a>
            <a href='https://linkedin.com/in/corbin-cansler/' target="_blank" rel="noreferrer">
            <p>LinkedIn: linkedin.com/in/corbin-cansler/</p>
            </a>
            </div>
            <a href='https://docs.google.com/document/d/10mrgqejtw0zkWFWDRSsowHf5gC-NDGzWleriML5xBJ0/edit' target="_blank" rel="noreferrer">
            <p>View and download resume</p>
            </a>
        </div>
    )
}