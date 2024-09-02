import React from "react";

const Dropdown = ({title,options,func}) => {
    return (
        <div className="select">
            <select defaultvalue="0" onChange={func} name="format" id="format">
                
                {options.map((o,i)=>(
                    <option key={i} value={o}>
                    {o.toUpperCase()}
                </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
