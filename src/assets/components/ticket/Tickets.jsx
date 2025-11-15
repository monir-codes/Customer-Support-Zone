import React, { use, useState} from "react";
import Tasks from "./Tasks.jsx"
import toast from "daisyui/components/toast/index.js";
const Tickets = ({infoProm, cardClicks, setCardClick}) => {

  const infoPromData = use(infoProm)
  const [tickets, setTickets] = useState(infoPromData)

  const handleRemove = (ticket)=>{
  setCardClick([...cardClicks,ticket.title])
  setTickets(tickets.filter(t => t.id !== ticket.id))
  toast("done")
  }


  return (
    

    
    <div className="grid grid-cols-1 md:grid-cols-3 bg-[#E9E9E9] px-4">
      

      <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2">
      {
           tickets.map(ticket => <div className=" p-4 ">
      <div onClick={()=> handleRemove(ticket)} className="ticket mx-auto w-auto ">
        <div className=" bg-white p-4 w-[80vw] md:w-auto rounded-sm mx-auto ">
          <div className="flex justify-between items-center gap-2">
            <h3 className="font-medium text-lg text-[#001931] mb-2">
              {ticket.title}
            </h3>
            <div className={`open-btn bg-[#B9F8CF] flex p-2 items-center justify-center rounded-full h-7 mb-2 ${ticket.status === "Open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"}`}>
              <div className={`rounded-full bg-[#02A53B] h-[16px] w-[16px] mr-1 ${ticket.status === "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C]" }`}></div>
              <p className={`text-[#0B5E06] font-medium text-sm ${ticket.status === "Open" ? "text-[#0B5E06]":"text-[#9C7700]"}`}>{ticket.status}</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-[#627382] text-sm">
              {ticket.description}</p>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex gap-4 items-center">
              <p className="text-[#627382] font-medium text-sm">
                <span>#</span>{ticket.id}
              </p>
              <p className="text-[#FEBB0C] font-medium teext-sm ">{ticket.priority}</p>
            </div>

            <div className="flex gap-4 items-center ">
              <p className="text-[#627382] text-sm">{ticket.customer}</p>
              <p className="text-[#627382] text-sm">
                <span>
                 <i class="fa-regular fa-calendar"></i>
                </span>
                {ticket.createdAt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
      </div>
    <div className=" -mt-7">

    
      <Tasks cardClicks={cardClicks}></Tasks>
    </div>
  </div>

    
  );
};

export default Tickets;
