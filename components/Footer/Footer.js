import React from 'react';
import styles from '../../styles/Footer.module.css'

const logo ="https://res.cloudinary.com/ddjvdcads/image/upload/v1641463445/oembsy727jbrkpo7rfde.png"

function Footer() {
    return (
            <div className={styles.footer}>
            <a href="https://www.iampresenting.com">
                <img src={logo}  loading="lazy" style={{width:"70%",height:"70%"}} alt="IAmPresenting" />
                </a><hr/>
                Copyright © 2021 [Company].  All rights reserved.No part of this site may be reproduced without our written permission.
            </div>
    )
}

export default Footer;