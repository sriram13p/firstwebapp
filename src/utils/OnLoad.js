import Axios from "axios";
import React from "react";


function OnLoad() {

    React.useEffect(() => {
        Axios.get('https://ipapi.co/json/').then((res) => {
            console.log(res.data.ip);

        });
    }, [])
    return;
}

export default OnLoad;