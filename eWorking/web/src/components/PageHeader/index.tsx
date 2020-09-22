import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'

import returnIcon from '../../assets/return.svg'

interface PageHeaderProps{
    title?: string;
    subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="pageheader-container">
            <div className="topbar-container">
                <Link to="/">
                    <img src={returnIcon} alt=""/>
                </Link>
            </div>
            <div className="pageheader-content">
                <h1> {props.title} </h1>
                <p> {props.subtitle} </p>

                {props.children}
            </div>
        </header>
    )   
}

export default PageHeader;