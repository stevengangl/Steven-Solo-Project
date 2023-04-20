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
        <div style={{
            display: 'flex'
        }} >
            {/* <Holder /> */}
            <Coma />
            <Sedetary />
            <LightlyActive />
            <ModeratelyActive />
            <VeryActive />

        </div>
    );

}

export default CalculatorPage;


