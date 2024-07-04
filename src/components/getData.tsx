import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { dataProductState, fetchDataProductSelector } from "../storage";
import { Product } from "../interfaces/productProp";

function GetData() {
    const [products, setProducts] = useRecoilState<Product[]>(dataProductState);
    const fetchData = useRecoilValue(fetchDataProductSelector);
    const navigate = useNavigate();

    useEffect(() => {
        setProducts(fetchData);
    }, [fetchData, setProducts]);

    return (
        <div className="mt-1 mx-[28px] overflow-x-auto snap-x-mandatory p-2 snap-none" style={{ scrollSnapType: 'x mandatory' }}>
            <div className="flex space-x-4">
                {products.map((product: Product) => (
                    <div key={product.id} className="snap-start h-[207px] w-[155px] rounded-lg shadow-md">
                        <div className="scroll-ml-1 p-3">
                            <div className="inline-flex items-center">
                                <div className="w-4 h-4">
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.52447 0.463524C6.67415 0.00286841 7.32585 0.00286996 7.47553 0.463525L8.68386 4.18237C8.75079 4.38838 8.94277 4.52786 9.15938 4.52786H13.0696C13.554 4.52786 13.7554 5.14767 13.3635 5.43237L10.2001 7.73075C10.0248 7.85807 9.95149 8.08375 10.0184 8.28976L11.2268 12.0086C11.3764 12.4693 10.8492 12.8523 10.4573 12.5676L7.29389 10.2693C7.11865 10.1419 6.88135 10.1419 6.70611 10.2693L3.54267 12.5676C3.15081 12.8523 2.62357 12.4693 2.77325 12.0086L3.98157 8.28976C4.04851 8.08375 3.97518 7.85807 3.79994 7.73075L0.636495 5.43237C0.244639 5.14767 0.446028 4.52786 0.93039 4.52786H4.84062C5.05723 4.52786 5.24921 4.38838 5.31614 4.18237L6.52447 0.463524Z" fill="#FF9F06" />
                                </svg>
                                </div>
                                <h2 className="font-bold text-[12px] ml-1">{product.rating && product.rating.rate ? product.rating.rate : 0}</h2>
                            </div>
                            <div className="flex justify-center items-center mt-1">
                                <img src={product.image ? product.image : "No product img"} alt="product img" className="w-[87px] h-[70px]" />
                            </div>
                            <div className="ml-3 mt-2">
                                <h1 className="font-[500] text-[15px] overflow-hidden whitespace-nowrap overflow-ellipsis">{product.title ? product.title : "Product Name"}</h1>
                                <p className="text-[10px] text-[#3B3B3B]/50 font-[900] w-[131px] overflow-hidden whitespace-nowrap overflow-ellipsis">{product.description ? product.description : "No description"}</p>
                                <div className="mt-[14px] flex justify-between items-center">
                                    <h3 className="text-[#D61355] font-bold text-[14px]">$ {product.price ? product.price : 0}</h3>
                                    <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => navigate(`/detail/${product.id}`)}>
                                        <circle cx="12" cy="12" r="12" fill="#D61355" />
                                        <line x1="11.8929" y1="6.75" x2="11.8929" y2="17.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                        <line x1="6.75" y1="12.1071" x2="17.25" y2="12.1071" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
};

export default GetData;