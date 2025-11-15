import React from 'react';

const footer = () => {
    return (
        <div className='bg-black'>

            <div className='max-w-[1300px] mx-auto my-auto grid grid-cols-1 md:grid-cols-5 gap-2 p-6 space-y-5'>

        <div className='space-y-2 md:mr-9'>
        <h2 className='font-bold text-xl text-white mb-2'>CS — Ticket System</h2>
        <p className='text-[#A1A1AA] text-sm'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        </div>

        <div className='space-y-2'>
        <h3 className='font-medium text-lg text-white'>Company</h3>
        <ul className="text-[#A1A1AA] space-y-2">
            <li><a href="">About Us</a></li>
            <li><a href="">Our Mission</a></li>
            <li><a href="">Contact Saled</a></li>
        </ul>
        </div>

        <div>
        <h3 className='font-medium text-lg text-white'>Services</h3>
        <ul className="text-[#A1A1AA] space-y-2 mt-2">
            <li><a href="">Products & Services</a></li>
            <li><a href="">Customer Stories</a></li>
            <li><a href="">Download Apps</a></li>
        </ul>
        </div>

        <div className='space-y-2'>
        <h3 className='font-medium text-lg text-white'>Information</h3>
        <ul className="text-[#A1A1AA] space-y-2">
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">Join Us</a></li>
        </ul>
        </div>

        <div className='space-y-2'>
        <h3 className='font-medium text-lg text-white'>Social Links</h3>
        <ul className="text-[#A1A1AA] space-y-2">
            <li><span className='bg-white rounded-full mr-2'><i class="fa-brands fa-x-twitter text-black items-center h-[5px] justify-center"></i></span><a href="">@CS — Ticket System</a></li>
            <li><span className='bg-white rounded-full mr-2 '><i class="fa-brands fa-linkedin-in text-black items-center h-[5px] justify-center"></i></span><a href="">@CS — Ticket System</a></li>
            <li><span className='bg-white rounded-full mr-2'><i class="fa-brands fa-facebook-f text-black items-center h-[5px] justify-center"></i></span><a href="">@CS — Ticket System</a></li>
            <li><span className='bg-white rounded-full mr-2'><i class="fa-solid fa-envelope text-black items-center h-[5px] justify-center"></i></span><a href="">support@cst.com</a></li>
        </ul>
        </div>




            </div>

            <div className='border-b-1 border-gray-600 max-w-[1250px] mx-auto -pb-10'></div>
            <footer className='text-sm text-[#FAFAFA] text-center py-5'>© 2025 CS — Ticket System. All rights reserved.</footer>
        </div>
    );
};

export default footer;