import React, { useState } from "react";
import { toast } from "react-toastify";

const Tasks = ({cardClicks, setResolved, resolved, setCardClick}) => {
    // const [resolves, setResolves] = useState([resolved])

    const resolvedCount = (click)=>{
      setResolved([...resolved, click])
      setCardClick(cardClicks => cardClicks.filter(task => task !== click))
      toast("Resolved !!")

    }
  return (
    <div className="">
      <h2 className='bg-[#E9E9E9] font-semibold text-2xl text-[#34485A] mb-3 ml-4'>Task Status</h2>

        {
            cardClicks.map(click => <div>

    <div className="task-sec mx-auto  w-auto mb-3">
        <div className=" bg-white p-4 w-[80vw] md:w-auto rounded-sm mx-auto ">
          <div className="flex justify-between items-center gap-2">
            <h3 className="font-medium text-lg text-[#001931] mb-4">
              {click}
            </h3>

          </div>
        <button onClick={() => resolvedCount(click)} className="btn bg-[#02A53B] text-[#ffffff] w-full">Complete</button>

        </div>
      </div>
      </div>)
        }

    </div>
  );
};

export default Tasks;
