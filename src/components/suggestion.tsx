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
        title: "Polo with Contrast Trims",
        id: 18,
        price: "$212",
        img_url: "/d.1.png",
        was:"$242",
    },
    {
        title: "Gradient Graphic T-shirt",
        id: 19,
        price: "$145",
        img_url: "/d.2.png",
    },
    {
        title: "Polo with Tipping Details",
        id: 20,
        price: "$180",
        img_url: "/d.3.png",
    },
    {
        title: "Black Striped T-shirt",
        id: 21,
        price: "$120",
        img_url: "/d.4.png",
        was:"$150",
    }
];

let star = [<FaStar key={1} />,
            <FaStar key={2} />,
            <FaStar key={3} />,
            <FaStar key={4} />,
            <FaStarHalf key={5} />
        ];

export default function Tshirts() {
    return (
        <div className="w-full h-full sm:h-[500px] mt-10 max-w-screen-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center">YOU MIGHT ALSO LIKE</h1>
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
                                <div className="flex text-yellow-400 mt-1">
                                    {star.map((icon, index) => (
                                    <span key={index}>{icon}</span>
                                ))}</div>
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
