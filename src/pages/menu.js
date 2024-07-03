import React from "react";
import Footer from "../components/footer/footer";
import Search from "../components/search/search";


function Menu() {
    return (
        <div className="sm:hidden font-[Roboto] flex flex-col min-h-screen">
            <div className="flex-grow p-4">
                <Search />
            </div>
            <div className="mt-auto w-full">
                <Footer />
            </div>
        </div>
    )
}

export default Menu;