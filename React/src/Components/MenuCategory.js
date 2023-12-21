
import { useState } from "react";
import AccBody from "./AccBody";
import { FaArrowDown } from "react-icons/fa6";


const MenuCategory = ({ data, showitems, setShowIndex }) => {




    const handelclick = () => {
        setShowIndex()

    }
    return (
        <>
            <div >
                <div className="" onClick={handelclick}  >
                    <div className="">
                        <div className="text-slate-200 bg-zinc-800 border-b flex justify-between  w-1/2 m-auto h-16 px-6 text-lg  py-2  cursor-pointer">

                            <h2 className="">
                                {data.title}
                            </h2>
                            <FaArrowDown />
                        </div>

                    </div>
                </div>
                {showitems && <AccBody items={data.itemCards} />}
            </div>
        </>

    )
}

export default MenuCategory;