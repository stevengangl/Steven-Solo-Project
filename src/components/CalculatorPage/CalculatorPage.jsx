import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';
import { useEffect } from "react";

import Coma from "./Coma";
import Sedetary from "./Sedetary";
import Holder from "./Holder";




function CalculatorPage() {



    return (
<>
{/* <Holder /> */}
<Coma />
<Sedetary />
</>
    );

}

export default CalculatorPage;


