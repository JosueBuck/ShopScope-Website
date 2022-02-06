import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";

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
                        <p className="currentPage">Home</p>
                    </div>
                    <div className="navigationLinkContainer">
                        <p>Receipts</p>
                    </div>
                    <div className="navigationLinkContainer">
                        <p>Lists</p>
                    </div>
                    <div className="navigationLinkContainer">
                        <RiAccountCircleFill className="accountIcon" />
                    </div>



                </div>

            </div>
        </div>
    )
}

export default NavigationComponent
