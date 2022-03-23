import { useState } from 'react';
import { FiSearch} from "react-icons/fi";

const ListOverviewPage = () => {

    return (

        <div className='listOverviewPage'>
            <div className="listOverviewPageWrapper">
                <div>
                    <p className="pageTitle">Your Lists</p>
                    <div className="searchContainer">
                        <div className="search searchWide">
                            <input></input>
                            <FiSearch />
                        </div>
                    </div>

                    <div className="listsScrollContainer">
                        <div className="listsScrollContent">

                        </div>
                    </div>

                    <div className="quoteContainer">
                        <div className="horizontalLine"></div>
                        <p>Sometimes something is happening</p>
                        <div className="horizontalLine"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListOverviewPage
