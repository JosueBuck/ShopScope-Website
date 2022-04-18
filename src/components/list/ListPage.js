import React, { useState } from 'react';
import { FiXCircle, FiSliders, FiPlus, FiRotateCcw } from "react-icons/fi";
import InfoComponent from '../general/InfoComponent';
import ListItemComponent from './ListItemComponent';


const ListPage = () => {

    const [editList, seteditList] = useState(false);
    const [aboutList, setaboutList] = useState("test test test");

    const handleaboutListChange = (event) => {
        setaboutList(event.target.value)
    }



    let recipePictureUrl = "https://www.aok.de/kp/fileadmin/upload/AOK-BW/Curaplan/Bewusst_Leben/Curaplan_aktiv_III_Artikel_Curaplan_Bewusst_Leben_12_richtig_einkaufen_800x500.jpg";

    const widgetRecipePictureStyling = {
        backgroundImage: 'url(' + recipePictureUrl + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div className="listPage">
            <div style={widgetRecipePictureStyling} className="listPictureContainer">

            </div>

            <div className="listContentContainer">

                <div className="listContentWrapper">

                    <div className="listHeader">

                        <div className="listHeaderFlexContainer">
                            <div className="listNameContainer">

                                {
                                    editList ?

                                        <div className="listNameEditView">
                                            <div className="editListNameNormalView">
                                                <p className="listName">List Settings</p>
                                                <p className="listSettingsDescription">Here you can change and adjust your list</p>
                                            </div>

                                            <div className="editListNameDesktopView">
                                                <div className="editListNameFlexContainer">
                                                    <p className="listName">List Name:</p>
                                                    <input />
                                                </div>
                                                <div className="editListNameFlexContainer">
                                                    <p className="listName">List Url:</p>
                                                    <input />
                                                </div>
                                            </div>

                                        </div>


                                        :

                                        <div className="listNameNormalView">
                                            <p className="listName">Supermarkt</p>
                                        </div>
                                }
                            </div>
                            {
                                editList ?

                                    <div className="listButtons exitEditViewButton">
                                        <div className="exitListPageButton">
                                            <FiXCircle onClick={() => { seteditList(false) }} className="listPageIcon" />
                                        </div>
                                    </div>


                                    :

                                    <div className="listButtons">
                                        <div className="changeListButton">
                                            <FiSliders onClick={() => { seteditList(true) }} className="listPageIcon" />
                                        </div>
                                        <div className="exitListPageButton">
                                            <FiXCircle className="listPageIcon" />
                                        </div>
                                    </div>
                            }
                        </div>
                        
                    </div>

                    {
                        editList ?

                            <div className="changeListInfoSection">
                                <div className="editSmallScreenView">
                                    <div className="changeListInfoInputContainer">
                                        <p className="listSubheading">List Name:</p>
                                        <input placeholder="Name of your recipe" className="lsitNameInput"></input>
                                    </div>
                                    <div className="changeListInfoInputContainer">
                                        <p className="listSubheading">List Picture Url:</p>
                                        <input placeholder="Url of your picture" className="listNameInput"></input>
                                    </div>
                                </div>

                                <div className="editDesktopView">

                                </div>

                            </div>


                            :

                            <div className="listInfoSection">
                                <InfoComponent nameOfInfo={"List items"} valueOfInfo={12}/>
                                <InfoComponent nameOfInfo={"Clear list"} showIcon={true} icon={<FiRotateCcw />}/>
                            </div>
                    }



                    <div className="listMainSection">

                        {
                            editList ?

                                <div className="listAboutSection">



                                    <p className="listSubheading">About Recipe</p>
                                    <textarea value={aboutList} onChange={handleaboutListChange}>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                    </textarea>

                                </div>


                                :

                                <div className="listAboutSection">



                                    <p className="listSubheading">About Recipe</p>
                                    <p className="listNormalText">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                        magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                                        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                                        sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                                        dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores
                                        et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                        est Lorem ipsum dolor sit amet.
                                    </p>

                                </div>
                        }



                        

                            {
                                editList ?

                                   <></>

                                    :

                                    <div className="listItemsSection">
                                        <p className="listSubheading">Items in your list</p>
                                        <div className="listItemsContainer">
                                            <ListItemComponent ingredientName={"Milch"} amount={"2 Liter"}/>
                                            <ListItemComponent isAddComponent={true}/>
                                        </div>
                                    </div>

                            }


                        

                    </div>



                </div>

            </div>
        </div>
    );
};

export default ListPage;
