import React from "react";

const InfoComponent = ({info, icon, onClick}) => {

    return (
        <div className="infoContainer">
            {
                Array.isArray(info) ? 
                <ol key={info}>{info.map((info2) => (
                        <li key={info2}>{info2}</li> 
                    ))}
                </ol> : <p>{info}</p>
            }
            
            <div className="infoCloseIcon" onClick={() => onClick(false)}>
                {icon} 
            </div>
            
        </div>
    )
}

export default InfoComponent
