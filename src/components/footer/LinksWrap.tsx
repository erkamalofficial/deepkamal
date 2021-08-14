import React from 'react'
import { card1, card2, card3, card4 } from './LinkCardData'
import { LinksCard } from './LinksCard'

export const LinksWrap = () => {
    return (
        <div className="container" >
            <div className="row" style={{padding: '20px 0', borderTop: '1px solid #ececec',borderBottom: '1px solid #ececec'}}>
                <div className="col-md-3">
                    <LinksCard {...card1} />
                </div>
                <div className="col-md-3">
                    <LinksCard {...card2} />
                </div>
                <div className="col-md-3">
                    <LinksCard {...card3} />
                </div>
                <div className="col-md-3">
                    <div>
                        <h4 style={{padding: '10px 0', color: '#433'}}>Address</h4>
                        <p>Okaya Group</p>
                        <p>3105  Doctors Drive</p>
                        <p>Los Angeles, California</p>
                        <p>90017</p>
                    </div>
                    <div>
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d108321.77433607304!2d75.60
                    369188659467!3d31.95939242203303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e0!
                    4m0!4m4!2s31.959213298131928%2C%2075.67412089922219!3m2!1d31.9592133!2d75.67412089999
                    999!5e0!3m2!1sen!2sin!4v1618819148259!5m2!1sen!2sin" 
                    style={{border:0}} loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
