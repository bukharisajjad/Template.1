import { BreadcrumbDemo } from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button"
import { Delete, Minus, Plus } from "lucide-react"
import Image from "next/image"
import { PiTag } from "react-icons/pi";

interface Icart {
    imageurl: string,
    title: string,
    id: number,
    size: string,
    color: string,
    price: string,
}

const cartItem: Icart[] = [
    {
        imageurl: "/d.2.png",
        title: "Gradient Graphic T-shirt",
        id: 1,
        size: "Large",
        color: "White",
        price: "$145",
    },
    {
        imageurl: "/a.3.png",
        title: "Checkered Shirt",
        id: 2,
        size: "Medium",
        color: "Red",
        price: "$180",
    },
    {
        imageurl: "/a.2.png",
        title: "Skinny Fit Jeans",
        id: 3,
        size: "Large",
        color: "Blue",
        price: "$240",
    },
]

export default function Cart() {
    return (
        <>
        <div className="pl-5">
            <BreadcrumbDemo/>
            <h1 className="text-2xl font-extrabold mt-2">YOUR CART</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-5">
            {/* left div */}
            <div className="w-full md:w-[700px] h-full md:h-[500px] border rounded-[20px]">
                {cartItem.map((item) => {
                    return (
                        <div className="flex justify-between mt-4 p-4 border-b" key={item.id}>
                            <div className="flex gap-3">
                            <Image src={item.imageurl} alt={item.title} className="rounded-[16px]" width={100} height={100}></Image>
                                <div className="">
                                    <h3 className="font-bold">{item.title}</h3>
                                    <p className="text-sm">Size: {item.size}</p>
                                    <p className="text-sm">Color: {item.color}</p>
                                    <p className="font-bold">{item.price}</p>
                                </div>
                            </div>
                            {/* right side */}
                            <div className="flex flex-col justify-between items-center">
                                <Delete/>
                                <div className="w-[100px] h-[35px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400">
                                    <Minus></Minus>
                                    1
                                    <Plus></Plus>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* right div */}
            <div className="w-full md:w-[400px] h-full md:h-[500px] border rounded-[20px] flex flex-col justify-start items-center p-3">
                <div className="w-[90%] space-y-2">
                    <h1 className="text-xl font-bold">Order Summary</h1>
                    <p className="flex justify-between">Subtotal <span>$565</span> </p>
                    <p className="flex justify-between">Discount (-20%) <span className="text-red-600">-$113</span> </p>
                    <p className="flex justify-between">Delivery Fee <span>$15</span> </p>
                    <p className="flex justify-between">Total <span>$467</span> </p>
                        <div className="flex">
                            <div className="flex justify-start items-center bg-[#F0F0F0] rounded-[16px]">
                            <PiTag className="text-xl ml-2 text-gray-600"/>
                            <input className="bg-[#F0F0F0] w-[195px] md:w-full py-2 px-2 rounded-[16px] text-gray-600 outline-none" placeholder="Add promo code" />
                            </div>
                            <Button className="ml-1">Apply</Button>
                        </div>
                    <Button className="w-full">Go To Checkout</Button>
                </div>
            </div>
        </div></>
    )
}
