import { makeStyles } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom';

interface ILink {
    title: string;
    navigateTo: string;
    iconName?: string
}

export interface ILinkCard {
    heading: string;
    linkType: 'navLink' | 'anchor';
    links: ILink[];
}

const LinkCardStyles = makeStyles({
    heading: {
        color: "#333",
        padding: '10px 0'
    },
    ulStyles: {
        paddingLeft: 0
    },
    listStyle: {
        listStyleType: 'none'
    },
    iconStyle: {
        display: 'flex',
        borderRadius: 18,
        padding: '8px 12px',
        backgroundColor: '#3067f012',
        color: '#3067f0',
        fontSize: 18,
        marginRight: 10,
        height: 36,
        width: 36,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export const LinksCard = (props: ILinkCard) => {
    const styles = LinkCardStyles();
    const {heading, linkType, links} = props;

    return (
        <div>
            <h4 className={styles.heading}>{heading}</h4>
            <ul className={styles.ulStyles}>
                {links.map((link) => {
                    return <li className={styles.listStyle} >
                        {linkType === "navLink"? 
                            <NavLink 
                                style={{paddingLeft: 0, color: '#474747', 
                                lineHeight: '1.5rem', letterSpacing: .5}}  
                                className="nav-link" 
                                to={link.navigateTo}
                            >
                                {link.title}
                            </NavLink >
                            : 
                            <a 
                                href={link.navigateTo}
                                target="_blank"
                                style={{paddingLeft: 0, color: '#474747', display: 'flex', alignItems: 'center', 
                                lineHeight: '1.5rem', letterSpacing: .5}}
                                className="nav-link"
                            >
                            {link.iconName ? <div className={styles.iconStyle}><i className={`fab fa-${link.iconName}`} ></i></div> : null } 
                            {link.title}
                            </a>
                        }
                        
                        </li>
                })}
            </ul>
        </div>
    )
}
