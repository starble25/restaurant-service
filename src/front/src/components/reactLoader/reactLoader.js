import { FadeLoader } from "react-spinners";
import React from "react";


const Spinner = () => {
    return (
        <div className="spinner-container">
            <FadeLoader color="#e11d48" size={40} />
        </div>
    );
};


export default Spinner;
