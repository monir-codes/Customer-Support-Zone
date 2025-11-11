import React from "react";
import Vector from "../../../assets/vector1.png"

const Banner = ()=>{
    return (
     <div className="bg-[#E9E9E9] p-6">
        <div className="max-w-[1300px] flex flex-col md:flex-row   mx-auto my-10 gap-5">
            <div className="md:w-[50%] text-center h-55 flex items-center justify-center flex-col bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-lg">
            <div className="flex items-center justify-between h-full md:h-auto">
                 <img className="w-[40%] h-[100%] md:h-auto md:w-[40%]" src={Vector} alt="" />
            <div className="text-center">
             <h4 className="text-sm md:text-1xl text-white">In-Progress</h4>
                <h2 className="font-semibold text-4xl md:text-4xl mt-2 text-white">0</h2>
            </div>
                 <img className="w-[40%] h-[100%] md:h-auto md:w-[40%] transform scale-x-[-1]" src={Vector} alt="" />

            </div>
            </div>
            <div className="md:w-[50%] text-center h-55 flex items-center justify-center flex-col bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-lg">
            <div className="flex items-center justify-between h-full md:h-auto">
                 <img className="w-[40%] h-[100%] md:h-auto md:w-[40%]" src={Vector} alt="" />
            <div className="text-center">
             <h4 className="text-sm md:text-1xl text-white">Resolved</h4>
                <h2 className="font-semibold text-4xl md:text-4xl mt-2 text-white">0</h2>
            </div>
                 <img className="w-[40%] h-[100%] md:h-auto md:w-[40%] transform scale-x-[-1]" src={Vector} alt="" />

            </div>
            </div>
            </div>

        </div>


    )
}


export default Banner;