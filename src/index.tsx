import * as React from "react";
import * as ReactDOM from "react-dom";
import "normalize.css";
import "@/style/index.scss";
import "@/utils/rem";
import "@/global";

// import {Hello} from "components/Hello";
import SayHello from "components/SayHello/SayHello";
ReactDOM.render(
    <SayHello></SayHello>,
    document.getElementById('app')
)
