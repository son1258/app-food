import { useEffect } from "react";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { dataProductState, fetchDataProductSelector } from "../../storage";

function Search() {
    // Get data from API via Recoil
    const [products, setProducts] = useRecoilState(dataProductState);
    const fetchData = useRecoilValue(fetchDataProductSelector);
    // Find item
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        if (searchValue !== '') {
            const filterData = products.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase());
            });
            setFilteredResults(filterData);
        } else {
            setFilteredResults([]);
        }
    }

    useEffect(() => {
        setProducts(fetchData);
    }, [fetchData, setProducts]);

    return (
        <div>
            <div className="clear-both mt-[10px] mx-[30px]">
                <p className="text-[25px] font-[700]">Meal Menu</p>
            </div>

            <div className="mx-[33px] mt-[14px] h-9 flex flex-row justify-center bg-gradient-to-r from-[#FFF0F0] to-[#FFDFDF] rounded-lg">
                <div className="mt-[10px] ml-[29px]">
                    <svg className="w-[17px] h-[16px]" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_499)">
                            <path d="M9.04194 12.5C12.2625 12.5 14.8732 10.1495 14.8732 7.25C14.8732 4.35051 12.2625 2 9.04194 2C5.82143 2 3.21069 4.35051 3.21069 7.25C3.21069 10.1495 5.82143 12.5 9.04194 12.5Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.165 10.9624L16.5389 14" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_499">
                                <rect x="0.989288" width="17.7714" height="16" rx="7" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <label htmlFor="search" className="mx-1"></label>
                <input onChange={(e) => searchItems(e.target.value)} type="text" id="search" placeholder="Search" className="bg-gradient-to-r from-[#FFF0F0] to-[#FFDFDF] font-[900] w-[300px] text-[12px] outline-none border-none" />
            </div>
            <div className="mt-4 h-[60vh] overflow-auto">
            {searchInput.length > 0 && filteredResults.length > 0 && (
                <div className="mt-6 mx-[26px] font-[Propins]">
                    {filteredResults.map((item, index) => (
                        <div key={index} className="rounded-[7px] shadow-md h-[87px] mb-4">
                            <div className="w-full flex">
                                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-[7px]" />
                                <div className="ml-[21px] mt-[25px] flex flex-col justify-center w-3/5 overflow-hidden whitespace-nowrap overflow-ellipsis">
                                    <h2 className="text-[15px] font-[500]">{item.title}</h2>
                                    <h2 className="text-[#3B3B3B]/30 text-[14px]">{item.description}</h2>
                                </div>
                                <h1 className="ml-auto text-[#D61355] text-[22px] font-[700] mt-[30px] mr-[25px]">${item.price}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            </div>
        </div>
    )
}

export default Search;
