import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import Image from 'next/image';
import Link from "next/link";

interface Iproducts {
    title: string,
    price: string,
    id: number,
    rating?: string,
    was?: string,
    img_url: string,
}

let products: Iproducts[] = [
    {
        title: "Vertical Striped Shirt",
        id: 1,
        price: "$212",
        img_url: "/b.1.png",
        was:"$232",
    },
    {
        title: "Courage Graphic T-Shirt",
        id: 2,
        price: "$145",
        img_url: "/b.2.png",
    },
    {
        title: "Loose Fit Bermuda Shorts",
        id: 3,
        price: "$80",
        img_url: "/b.3.png",
    },
    {
        title: "Faded Skinny Jeans",
        id: 4,
        price: "$210",
        img_url: "/b.4.png",
    }
];

let star = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalf />];

export default function Top_sell() {
    return (
        <div className="w-full h-full sm:h-[500px] mt-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center">TOP SELLING</h1>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-full md:px-20 mt-10">
                {products.map((data) => {
                    return (
                        <div key={data.id}>
                            <Link href={`/products/${data.id}`}>
                            <div className="w-[250px] h-[250px] bg-[#F0EEED] rounded-[20px]">
                                <Image src={data.img_url} className="w-full h-full rounded-[20px]" alt={data.title} width={100} height={100} ></Image>
                            </div>
                            </Link>
                            <div>
                            <p className="text-xl font-bold mt-2">{data.title}</p>
                            <p className="flex text-yellow-400 mt-1">{star}</p>
                            <p className="font-bold mt-1">{data.price} <span className="text-gray-400 font-bold line-through">{data.was}</span></p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center items-center mt-5">
                <button className="bg-slate-200 text-black font-semibold rounded-3xl px-8 py-3">View All</button>
            </div>
        </div>
        
    );
}
