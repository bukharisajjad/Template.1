import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export default function Offers(){
    return (
        <main className="w-full flex justify-center items-center max-w-screen-2xl mx-auto">
        <div className="w-[75%] h-full sm:h-[150px] bg-black text-white flex flex-col sm:flex-row items-center p-5 sm:p-16 rounded-[20px]">
            <h1 className="text-2xl sm:text-4xl font-extrabold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
            <div className="space-y-3">
                <div className="flex justify-start items-center sm:w-[400px] h-[40px] bg-[#F0F0F0] rounded-[62px]">
                   <MdOutlineEmail className="text-xl ml-3 text-black"/>
                   <input placeholder="Enter your email address" className="w-full h-full rounded-[62px] ml-2 outline-none bg-[#F0F0F0]"></input>
                </div>
                <div className="flex justify-center items-center sm:w-[400px] h-[40px] bg-[#F0F0F0] rounded-[62px]">
                    <p className="text-black">Subscribe to Newsletter</p>
                </div>
            </div>

        </div>
        </main>
    )
}
