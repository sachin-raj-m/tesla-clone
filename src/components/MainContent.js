import React from 'react'
import Button from './Button.js'
import './MainContent.css'

const MainContent = ({title, desc, descLink, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons, first}) => {
    return (
        <div className="maincontent" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="content__container">
                <div className="textfield">
                    <p>{title}</p>
                    <div className="item__description" >
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="content__footer">
                    <div className="content__buttons">
                        <Button imp="primary" text={leftBtnTxt} link={leftBtnLink} />
                        {twoButtons && (
                            <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink} />
                        )}
                    </div>
                    {first && (
                        <i class="fas fa-3x fa-angle-down" ></i>
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default MainContent
