import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";


export default function HomePage(props){
    return(
        <div>
            <Header
            color="white"
            brand="Nex Carlos Recommendation"
            rightLink={<headerLinks/>}
            fixed
            changeColorOnScroll={
            {
                height = 200,
                color = "white"
            }
            }
            {...rest}
            />

        </div>)
}