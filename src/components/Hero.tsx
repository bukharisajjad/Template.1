import Image from "next/image";

export default function Hero(){
    return(
        <main className="w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between items-start bg-[#F2F0F1]">
            {/* left */}
            <div className="w-full md:w-[500px] mt-3 md:mt-10 md:ml-10 pl-3">

                <h1 className="text-2xl font-extrabold md:text-6xl">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>

                <p className="md:mt-3">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                
                <button className="bg-black py-2 px-8 rounded-[16px] mt-3 text-sm text-white ">Shop Now</button>
            </div>
            {/* right */}
            <div className="relative">
                <Image src={"/Front Page.jpg"} className="w-[500px] mr-4" width={200} height={200} alt="Front Page"></Image>
            {/* Star Vectors */}
                <Image src={"/Vector.jpg"} className="w-[40px] md:w-[80px] absolute top-12 right-[50px] md:top-[50px] md:right-[30px]" width={200} height={200} alt="Star"></Image>
                <Image src={"/Vectorr.jpg"} className="w-[25px] md:w-[50px] absolute top-[175px] md:top-[200px] left-7 md:left-[10px]" width={200} height={200} alt="Star"></Image>
            </div>

        </main>
    )
}