import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";
import { NavLink} from "react-router-dom";

const NavigationComponent = () => {

    const [showNavigationLinks, setShowNavigationLinks] = useState(false);

    const transitionStyling = {

    }

    return (
        <div className='navigationContainer'>
            <div className="mobileNavigationContent">
                <div className="visibleMobileNavigationContent">
                    <div className="contentWrapper">
                        <p>ShopScope</p>
                        {
                            showNavigationLinks ? <FiX onClick={() => { setShowNavigationLinks(!showNavigationLinks) }} className="burgerMenu" /> : <FiMenu onClick={() => { setShowNavigationLinks(!showNavigationLinks) }} className="burgerMenu" />
                        }
                    </div>

                </div>

                <div style={
                    showNavigationLinks ? { top: 0 } : { top: -200 }
                } className="invisibleMobileNavigationContent">
                        
                        <div className="navigationLinkContainer">
                            <p>
                        <NavLink onClick={() => { setShowNavigationLinks(!showNavigationLinks) }} className={(navData) => navData.isActive ? "currentPage" : "notActive"} to="/">
                            Home
                            </NavLink>
                            </p>
                            </div>
                        
                    
                    
                        
                        <div className="navigationLinkContainer">
                        <p>
                        <NavLink  onClick={() => { setShowNavigationLinks(!showNavigationLinks) }} className={(navData) => navData.isActive ? "currentPage" : "notActive"} to="/Receipts">
                            Receipts
                            </NavLink>
                            </p>
                            </div>
                        
                    
                    
                        
                        <div className="navigationLinkContainer">
                        <p>
                        <NavLink onClick={() => { setShowNavigationLinks(!showNavigationLinks) }} className={(navData) => navData.isActive ? "currentPage" : "notActive"} to="/Lists">
                            Lists
                            </NavLink>
                            </p>
                            </div>
                        
                    
                    <div className="navigationLinkContainer">
                        <RiAccountCircleFill className="accountIcon" />
                    </div>



                </div>

            </div>

            <div className="navigationContent">
                <div className="contentWrapper">
                    <p>ShopScope</p>
                    <div className="navigationLinks">
                        <p>Home</p>
                        <p className="navigationLinkSeperator">|</p>
                        <p>Receipts</p>
                        <p className="navigationLinkSeperator">|</p>
                        <p>Lists</p>
                        <p className="navigationLinkSeperator">|</p>
                        <RiAccountCircleFill className="accountIcon" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavigationComponent
