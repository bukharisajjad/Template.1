import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Offers from "./offers";

export default function Footer(){
    return(
        <main className="bg-[#F0F0F0] w-full h-full md:h-[400px] relative mt-32 max-w-screen-2xl mx-auto">
            {/*  */}
            <span className="absolute top-[-75px]">
            <Offers/>
            </span>

            {/* container */}
            <div className="flex h-full md:h-[350px] flex-col md:flex-row justify-between items-start p-10 pt-[160px] sm:pt-24 border-b">

                {/* top div */}
                <div className="flex flex-col justify-center items-center w-[200px]">
                    <ul>
                        <h1 className="text-2xl sm:text-3xl font-extrabold">SHOP.CO</h1>
                        <p className="text-sm mt-1">We have clothes that suits your style and which you&apos;re proud to wear. From women to men.</p>

                        {/* icons */}
                        <div className="flex items-center space-x-3 mt-1">
                        <FaInstagram className="text-xl"/>
                        <FaFacebook className="text-xl"/>
                        <FaGithub className="text-xl"/>
                        <FaTwitter className="text-xl"/>
                        </div>
                    </ul>
                </div>

                {/* mid div */}
                <div className="w-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4 place-items-center space-y-5">
                    {/* box 1 */}
                    <div>
                       <ul className="">
                           <h2 className="text-sm sm:text-2xl">COMPANY</h2>
                           <li className="text-sm">About</li>
                           <li className="text-sm">Features</li>
                           <li className="text-sm">Works</li>
                           <li className="text-sm">Career</li>
                       </ul>
                    </div>
                    {/* box 2 */}
                        <ul className="space-y-1">
                           <h2 className="text-sm sm:text-2xl">HELP</h2>
                           <li className="text-sm">Customer Support</li>
                           <li className="text-sm">Delivery Details</li>
                           <li className="text-sm">Terms & Conditions</li>
                           <li className="text-sm">Privacy Policy</li>
                        </ul>
                    {/* box 3 */}
                        <ul className="space-y-1">
                           <h2 className="text-sm sm:text-2xl">FAQ</h2>
                           <li className="text-sm">Account</li>
                           <li className="text-sm">Manage Deliveries</li>
                           <li className="text-sm">Orders</li>
                           <li className="text-sm">Payments</li>
                        </ul>
                    {/* box 4 */}
                        <ul className="space-y-1">
                           <h2 className="text-sm sm:text-2xl">RESOURCES</h2>
                           <li className="text-sm">Free eBooks</li>
                           <li className="text-sm">Development Tutorial</li>
                           <li className="text-sm">How to - Blog</li>
                           <li className="text-sm">Youtube Playlist</li>
                        </ul>
                    {/* complete boxes */}

                </div>

            </div>

                {/* bottom div */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-3">
                    <p className="text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
                    <div className="flex items-center space-x-3">
                        <Image src={"/Visa.1.png"} className="w-[50px] bg-white p-1" width={50} height={50} alt="visa card"></Image>
                        <Image src={"/Mastercard.2.png"} className="w-[50px] bg-white p-1" width={50} height={50} alt="master card"></Image>
                        <Image src={"/G Pay.3.png"} className="w-[50px] bg-white p-1" width={50} height={50} alt="G pay"></Image>
                        <Image src={"/Paypal.4.png"} className="w-[50px] bg-white p-1" width={50} height={50} alt="paypal"></Image>
                        <Image src={"/Pay.5.png"} className="w-[50px] bg-white p-1" width={50} height={50} alt="pay"></Image>
                    </div>
                </div>
        </main>

    )
}