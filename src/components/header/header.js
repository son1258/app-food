import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
            <div className="mx-[33px] mt-[27px] flex justify-between">
                <div className="bg-pink-100 rounded-lg w-[45px] h-[45px]" onClick={() => navigate(-1)}>
                    <svg className="mt-[14px] ml-[13px] w-[18px] h-[18px] rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ff0000" d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" /></svg>
                </div>
                <div className="bg-pink-100 rounded-lg w-[45px] h-[45px]">
                    <svg className="mt-[11px] ml-[14px] w-[19px] h-[23px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ff0000" d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" /></svg>
                </div>
            </div>
    )
}

export default Header;