import Image from "next/image"

export default function Dress(){
    return(
        <div className="w-full h-full sm:h-[500px] bg-[#F0F0F0] flex flex-col justify-start items-center pt-8 mt-10 sm:mt-0 max-w-screen-2xl mx-auto">
            
            {/* top div */}
            <div className="mt-3">
                <h1 className="text-3xl font-extrabold pl-6 sm:pl-0">BROWSE BY DRESS STYLE</h1>
            </div>

            {/* bottom div */}
            <div className="w-[90%] h-full sm:h-[600px] flex flex-wrap justify-center items-center mt-3">

                <div className="w-[400px] h-[200px] m-1 relative">
                    <Image src={"/c.1.png"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="browse.1"></Image>
                <span className="absolute top-8 left-11 font-bold text-2xl">Casual</span>
                </div>

                <div className="w-[600px] h-[200px] m-1 relative">
                    <Image src={"/c.2.png"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="browse.2"></Image>
                <span className="absolute top-8 left-11 font-bold text-2xl">Formal</span>
                </div>

                <div className="w-[600px] h-[200px] m-1 relative">
                    <Image src={"/c.3.png"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="browse.3"></Image>
                <span className="absolute top-8 left-11 font-bold text-2xl">Party</span>
                </div>

                <div className="w-[400px] h-[200px] m-1 relative">
                    <Image src={"/c.4.png"} className="w-full h-full rounded-[20px]" width={100} height={100} alt="browse.4"></Image>
                <span className="absolute top-8 left-11 font-bold text-2xl">Gym</span>
                </div>
            </div>
        </div>
    )
}