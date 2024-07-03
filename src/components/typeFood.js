import React from "react";
import DataTypeFood from "../data/dataTypeFood.json";

function TypeFood() {
    return (
        <div className="mx-[30px]">
            <div className="mt-4 overflow-hidden w-full">
                <div className="w-[1000px]">
                    {DataTypeFood.map((item) => (
                        <div key={item.id} className="float-left mx-2 w-[126px] h-[43px] text-white text-[18px] bg-[#D61355] rounded-[7px] inline-flex relative">
                            <span className="absolute left-2 text-[24px]">{item.emoji}</span>
                            <h2 className="absolute left-12  top-2">{item.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TypeFood;