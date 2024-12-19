
import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./NavigationMenu";




export default function Header() {
    return (
        <header className="bg-white w-full h-[80px] flex justify-between items-center">
            {/* left */}
            <div className="flex justify-center items-center">
                <SheetSide />
                <h1 className="text-xl sm:text-3xl font-extrabold pl-2">SHOP.CO</h1>
            </div>

            {/* navbar */}
            <ul className="hidden md:block">
                <li className="flex items-center space-x-5">
                    <Link href={""}><NavigationMenuDemo/></Link>
                    <Link href={""}>On Sale</Link>
                    <Link href={""}>New Arrivals</Link>
                    <Link href={""}>Brands</Link>
                </li>
            </ul>

            {/* search bar */}
            <div className="hidden md:block">
                <div className="flex justify-start items-center w-[600px] h-[40px] bg-[#F0F0F0] rounded-[62px]">
                    <IoSearchSharp className="text-xl ml-3" />
                    <input placeholder="Search for products..." className="w-full h-full rounded-[62px] ml-2 outline-none bg-[#F0F0F0]"></input>
                </div>
            </div>

            {/* cart-icon and account-icon */}
            <div className="flex items-center mr-10 space-x-3">
                <IoSearchSharp className="text-xl ml-3 md:hidden" />
                <BsCart3 className="text-xl" />
                <RiAccountCircleLine className="text-xl" />
            </div>


        </header>

    );
}
