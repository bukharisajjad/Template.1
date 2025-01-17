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
        title: "T-shirt with Tape Details",
        id: 1,
        price: "$120",
        img_url: "/a.1.png",
    },
    {
        title: "Skinny Fit Jeans",
        id: 2,
        price: "$240",
        img_url: "/a.2.png",
        was:"$260",
    },
    {
        title: "Checkered Shirt",
        id: 3,
        price: "$180",
        img_url: "/a.3.png",
    },
    {
        title: "Sleeve Striped T-shirt",
        id: 4,
        price: "$130",
        img_url: "/a.4.png",
        was:"$160",
    }
];

let star = [<FaStar key={1} />,
            <FaStar key={2} />,
            <FaStar key={3} />,
            <FaStar key={4} />,
            <FaStarHalf key={5} />
        ];

export default function Products() {
    return (
        <div className="w-full h-full sm:h-[500px] mt-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-center">NEW ARRIVALS</h1>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-full md:px-20 mt-10">
                {products.map((data) => {
                    return (
                        <div key={data.id}>
                            <Link href={`/products/${data.id}`}>
                            <div className="w-[190px] h-[190px] md:w-[250px] md:h-[250px] bg-[#F0EEED] rounded-[20px]">
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
