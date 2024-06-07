import Link from "next/link"
import { useState } from "react"


interface DuckElement {
    name:string,
    url:string
};
interface DuckData {
    title:string,
    content: Array<DuckElement>
};

function Duck (data:DuckData){
    return (
        <div className="text-white flex flex-col">
            <span className="text-yellow">{data["title"]}</span>
            {
                data["content"].map( (element:DuckElement) => { 
                    let x = 1;
                    return (
                    <div key={x++}>
                        <Link href={element.url}>
                            <span className="">{element.name}</span>
                        </Link>
                    </div>
                )})
            }
        </div>
    )
}

const exampleDuck:Array<DuckElement> = [
    { name: "Organize", url: ""},
    { name: "Planner", url: ""},
    { name: "Discounts", url: ""},
    { name: "Travel", url: ""}
]

export default function Footer () {
    return (
        <footer className="bg-[#222222] rounded-t-3xl">
            <section className="bg-[#010101] flex rounded-t-3xl py-10">
                <div className="w-full lg:w-[30%] flex justify-center items-center">
                    <span className="text-white text-4xl font-glacial font-bold">:bitspace</span>
                </div>
                <div className="hidden lg:flex lg:justify-around lg:items-center lg:w-[70%]">
                    <Duck title="Services" content={exampleDuck} />
                    <Duck title="Services" content={exampleDuck} />
                    <Duck title="Services" content={exampleDuck} />
                    <Duck title="Services" content={exampleDuck} />
                </div>
            </section>
            <section className="text-white text-[10px] lg:text-[12px]">
                    <div className="md:flex md:justify-between py-3">
                        <div className="flex justify-around px-10 py-2">
                            <Link href="" >
                                <span className="px-4">Terms and Conditions</span>
                            </Link>
                            <Link href="" >
                                <span className="px-4">Privacy Policy</span>
                            </Link>
                            <Link href="" >
                                <span className="px-4">Cookie Policy</span>
                            </Link>
                        </div>
                        <div className="flex justify-around px-10 py-2">
                            <span> &copy; 2024 Bitspace. All Rights Reserved.</span>
                        </div>
                    </div>
            </section>
        </footer>
    )
    
}
