import React from "react";
import { Link } from "react-router-dom";

export default function SobreNosotros(){
    return(
        <div className="p-5">
            <span>
                Sobre nosotros
            </span>
            <div className="p-10">
                <Link to="/">Ir al inicio</Link>
            </div>
        </div>
    )
}