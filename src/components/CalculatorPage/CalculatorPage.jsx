import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { useEffect } from "react";
import Coma from "./Coma";
import Sedetary from "./Sedetary";
import Holder from "./Holder";
import LightlyActive from "./LightActive";
import ModeratelyActive from "./ModeratelyActive";
import VeryActive from "./VeryActive";
import { FilledInput } from "@mui/material";






function CalculatorPage() {



    return (
        <body className='CalculatorPage'>
        <div style={{
            display: 'flex', flexDirection: 'column', flexWrap: 'wrap'
        }} >
            {/* <Holder /> */}
            <Coma />
            <br />
            <Sedetary />
            <br />
            <LightlyActive />
            <br />
            <ModeratelyActive />
            <br />
            <VeryActive />

        </div>
        </body>
    );

}

export default CalculatorPage;


