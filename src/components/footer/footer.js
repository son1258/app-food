import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
    const [productInCart, setProductInCart] = useState([]);
    const countItemsInCart = () => {
        return productInCart.length;
    }

    useEffect(() => {
        let data = localStorage.getItem('cart');
        if(data){
            data = JSON.parse(data);
            setProductInCart(data)
        }
    }, [])

    return (
        <div className="sm:hidden">
            <div className="rounded-[22px] shadow-inner h-[74px] mt-2">
                <div className="flex justify-between items-center">
                    <div onClick={() => navigate('/')}className="w-[110.92px] py-[10px] bg-pink-200 mt-[15px] ml-[21px] rounded-[14px]">
                        <svg className="float-left ml-[17px]" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.74337 20.7821V17.7152C9.74335 16.9381 10.4109 16.3067 11.2378 16.3018H14.2739C15.1044 16.3018 15.7777 16.9346 15.7777 17.7152V20.7732C15.7777 21.4473 16.3564 21.9951 17.0735 22H19.1449C20.1123 22.0023 21.0409 21.6428 21.7259 21.0007C22.4108 20.3586 22.7958 19.4868 22.7958 18.5775V9.86585C22.7957 9.13139 22.4494 8.43471 21.8499 7.9635L14.813 2.67427C13.5829 1.74912 11.8261 1.77901 10.6324 2.74538L3.74683 7.9635C3.11908 8.42082 2.74388 9.11956 2.72534 9.86585V18.5686C2.72534 20.4637 4.3599 22 6.37623 22H8.4003C8.74559 22.0023 9.07762 21.8751 9.32267 21.6464C9.56773 21.4178 9.70554 21.1067 9.70553 20.7821H9.74337Z" fill="#D61355" />
                        </svg>
                        <p className="float-left mt-1 ml-3 text-[12px]">Home</p>
                    </div>
                    <svg className="mt-[27px]" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => navigate('/profile')}>
                        <g opacity="0.5">
                            <path d="M9.08132 13.1747C4.52534 13.1747 0.633789 13.8547 0.633789 16.5747C0.633789 19.2957 4.50104 19.9997 9.08132 19.9997C13.6373 19.9997 17.5289 19.3207 17.5289 16.5997C17.5289 13.8787 13.6627 13.1747 9.08132 13.1747Z" fill="url(#paint0_linear_1_621)" />
                            <path opacity="0.4" d="M9.08129 10.5838C12.1848 10.5838 14.6714 8.22876 14.6714 5.29176C14.6714 2.35476 12.1848 -0.000244141 9.08129 -0.000244141C5.97883 -0.000244141 3.49115 2.35476 3.49115 5.29176C3.49115 8.22876 5.97883 10.5838 9.08129 10.5838Z" fill="url(#paint1_linear_1_621)" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_1_621" x1="0.633789" y1="12.7556" x2="18.0446" y2="19.4333" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF0000" />
                                <stop offset="1" stop-color="#FF0000" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_1_621" x1="3.49115" y1="-0.650139" x2="16.3628" y2="1.45648" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF0000" />
                                <stop offset="1" stop-color="#FF0000" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <div className="mt-[25px] relative">
                        <div className="absolute left-[16px] bottom-[12px] w-[13.73px] h-[13px] rounded-full bg-[#FF4B4B] border-[1px] border-white">
                            <span className="absolute left-[3.5px] font-[900] text-white text-[9px]">{countItemsInCart()}</span>
                        </div> 
                        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => navigate('/order')}>
                            <g opacity="0.5">
                                <path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M6.86334 20.5885C6.86334 19.7485 7.58165 19.0685 8.46898 19.0685C9.34574 19.0685 10.064 19.7485 10.064 20.5885C10.064 21.4185 9.34574 22.0985 8.46898 22.0985C7.58165 22.0985 6.86334 21.4185 6.86334 20.5885ZM18.7471 20.5885C18.7471 19.7485 19.4655 19.0685 20.3528 19.0685C21.2295 19.0685 21.9478 19.7485 21.9478 20.5885C21.9478 21.4185 21.2295 22.0985 20.3528 22.0985C19.4655 22.0985 18.7471 21.4185 18.7471 20.5885Z" fill="url(#paint0_linear_1_617)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9481 6.34903C22.5924 6.34903 23.015 6.55903 23.4375 7.01903C23.86 7.47903 23.934 8.13903 23.8389 8.73803L22.8354 15.298C22.6452 16.559 21.5044 17.488 20.1628 17.488H8.6382C7.23327 17.488 6.07129 16.468 5.9551 15.149L4.98327 4.24803L3.3882 3.98803C2.96566 3.91803 2.66989 3.52803 2.74383 3.12803C2.81777 2.71803 3.22975 2.44803 3.66284 2.50803L6.18221 2.86803C6.54137 2.92903 6.80545 3.20803 6.83714 3.54803L7.03784 5.78803C7.06953 6.10903 7.34418 6.34903 7.68221 6.34903H21.9481ZM15.5466 11.548H18.4727C18.9164 11.548 19.265 11.208 19.265 10.798C19.265 10.378 18.9164 10.048 18.4727 10.048H15.5466C15.103 10.048 14.7544 10.378 14.7544 10.798C14.7544 11.208 15.103 11.548 15.5466 11.548Z" fill="url(#paint1_linear_1_617)" />
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_1_617" x1="6.86334" y1="18.8825" x2="18.0434" y2="27.506" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF0000" />
                                    <stop offset="1" stop-color="#FF0000" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_1_617" x1="2.73248" y1="1.57936" x2="26.5868" y2="6.79293" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF0000" />
                                    <stop offset="1" stop-color="#FF0000" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>


                    <svg className="float-right mr-[14px] mt-[25px]" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => navigate('/chat')}>
                        <g opacity="0.5">
                            <path opacity="0.4" d="M13.2043 2C7.06693 2 2.61975 6.74 2.61975 12C2.61975 13.68 3.13736 15.41 4.04581 16.99C4.21482 17.25 4.23595 17.58 4.11975 17.89L3.412 20.13C3.25355 20.67 3.73947 21.07 4.2782 20.91L6.412 20.31C6.99299 20.13 7.44722 20.36 7.987 20.67C9.52926 21.53 11.4507 21.97 13.1831 21.97C18.4226 21.97 23.7465 18.14 23.7465 11.97C23.7465 6.65 19.2043 2 13.2043 2Z" fill="url(#paint0_linear_1_613)" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1626 13.2901C12.4126 13.2801 11.8104 12.7101 11.8104 12.0001C11.8104 11.3001 12.4231 10.7201 13.1626 10.7301C13.9126 10.7301 14.5147 11.3001 14.5147 12.0101C14.5147 12.7101 13.9126 13.2901 13.1626 13.2901ZM8.29242 13.2901C7.55298 13.2901 6.94031 12.7101 6.94031 12.0101C6.94031 11.3001 7.54242 10.7301 8.29242 10.7301C9.04242 10.7301 9.64453 11.3001 9.64453 12.0101C9.64453 12.7101 9.04242 13.2801 8.29242 13.2901ZM16.68 12.0101C16.68 12.7101 17.2821 13.2901 18.0321 13.2901C18.7821 13.2901 19.3842 12.7101 19.3842 12.0101C19.3842 11.3001 18.7821 10.7301 18.0321 10.7301C17.2821 10.7301 16.68 11.3001 16.68 12.0101Z" fill="white" />
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_1_613" x1="2.61975" y1="0.773773" x2="26.9406" y2="4.76021" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF0000" />
                                <stop offset="1" stop-color="#FF0000" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Footer;