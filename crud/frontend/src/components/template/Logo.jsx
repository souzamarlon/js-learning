import './Logo.css'
import Logo from '../../assets/imgs/logotest.png'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>

<aside className="Logo">
    <Link to="/" className="Logo"><img src={Logo} alt="Logo"/> </Link>
</aside>