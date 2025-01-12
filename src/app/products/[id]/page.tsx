"use client"
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import Image from 'next/image';
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";

let star = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStarHalf />];


interface Iproducts {
    title: string,
    price: string,
    id: number,
    rating?: string,
    was?: string,
    img_url: string,
    img1: string,
    img2: string,
    img3: string,
}

let products: Iproducts[] = [
    {
        title: "Vertical Striped Shirt",
        id: 1,
        price: "$212",
        img_url: "/b.1.png",
        was: "$232",
        img1: "/image.1.png",
        img2: "/image.2.png",
        img3: "/image.3.png",

    },
    {
        title: "Courage Graphic T-Shirt",
        id: 2,
        price: "$145",
        img_url: "/b.2.png",
        img1: "/image.1.png",
        img2: "/image.2.png",
        img3: "/image.3.png",

    },
    {
        title: "Loose Fit Bermuda Shorts",
        id: 3,
        price: "$80",
        img_url: "/b.3.png",
        img1: "/image.1.png",
        img2: "/image.2.png",
        img3: "/image.3.png",

    },
    {
        title: "Faded Skinny Jeans",
        id: 4,
        price: "$210",
        img_url: "/b.4.png",
        img1: "/image.1.png",
        img2: "/image.2.png",
        img3: "/image.3.png",

    }
];

export default function Pro_Detail() {
    const params = useParams();
    const id = params.id // this is dynamic id
    const items = products.find((items) => items.id === Number(id))
    if (!items) {
        return <h1>Product not found</h1>
    }

    return (
        <div className="flex flex-col md:flex-row md:w-full justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0">
            {/* left */}
            <div className="flex sm:flex-col justify-evenly items-center w-full sm:w-[152px] order-2 sm:order-1">
                {/* images */}
                <Image src={items.img1} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt="productdetail" width={100} height={100}></Image>
                <Image src={items.img2} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt="productdetail" width={100} height={100}></Image>
                <Image src={items.img3} className="w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt="productdetail" width={100} height={100}></Image>
            </div>

            {/* mid div */}
            <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
                <Image src={items.img1} alt="productdetail" className="w-full h-[95%]" width={100} height={100}></Image>
            </div>

            {/* right div */}
            <div className="w-full sm:w-[600px] h-[525px] mt-3 order-3">
                <h1 className="text-2xl md:text-3xl font-bold">One Life Graphic T-shirt</h1>
                <div className="flex text-yellow-400">
                    {star}
                </div>
                <p className="font-bold mt-1">{items.price} <span>{items.was}</span></p>
                <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                {/* select color */}
                <div className="mt-5">
                    <p>Select Colors</p>
                    <div className="flex space-x-3 mt-1">
                    <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100"/></div>
                    <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100"/></div>
                    <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100"/></div>
                    </div>
                </div>
                {/* choose size */}
                <div className="mt-3">
                    <p className="text-gray-500">Choose Size</p>
                    <div className="flex space-x-3 mt-1">
                        <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">Small</div>
                        <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">Medium</div>
                        <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">Large</div>
                        <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">X-Large</div>
                    </div>
                </div>
                {/* button */}
                <div className="flex justify-strat items-center mt-7 space-x-4">
                    <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
                        <Minus></Minus>
                        1
                        <Plus></Plus>
                    </div>
                    <div>
                        <Button className="bg-black text-white md:w-[280px] w-[225px] rounded-full">Add to Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}