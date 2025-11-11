import React, { use } from "react";

const Tickets = ({infoProm}) => {

  const infoPromData = use(infoProm)


  return (
    
    
    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#E9E9E9]">
      {
              infoPromData.map(ticket => <div className=" p-4 md:max-w-[80vw] border-2 border-amber-600">
      <div className="ticket mx-auto  w-auto ">
        <div className=" bg-white border-2 border-red-500 p-4 w-[80vw] md:w-auto rounded-sm mx-auto ">
          <div className="flex justify-between items-center gap-2">
            <h3 className="font-medium text-lg text-[#001931] mb-2">
              {ticket.title}
            </h3>
            <div className="open-btn bg-[#B9F8CF] flex p-2 items-center justify-center rounded-full h-7 mb-2">
              <div className="rounded-full bg-green-700 h-[16px] w-[16px] mr-1 "></div>
              <p className="text-[#0B5E06] font-medium text-sm">{ticket.status}</p>
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
    
  );
};

export default Tickets;
