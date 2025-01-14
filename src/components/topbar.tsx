import { IoClose } from "react-icons/io5";
export default function Topbar() {
  return (
    <main className="bg-[#000] w-full h-[38px] flex justify-center items-center relative max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex justify-center items-center">
        <h3 className="text-white text-xs sm:text-sm">Sign up and get 20% off to your first order.</h3>
        <button className="text-white ml-3 text-xs sm:text-sm">Sign Up Now</button>
        </div>
        <IoClose className="text-white absolute right-[15px] hidden sm:block"/>
    </main>
  );
}
