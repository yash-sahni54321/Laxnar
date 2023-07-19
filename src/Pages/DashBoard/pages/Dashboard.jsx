import React, { useState, useEffect } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import CreateProductCard from '../partials/dashboard/CreateProductCard';
import InquireyCard from '../partials/dashboard/InquireyCard';



function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [inquires, setInquires] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const fetchInquirey = () => {
    setIsLoading(true);
    fetch("https://laxnar-lko.onrender.com/api/support/enquiry/all", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setInquires(result.EnquiryResult);

        console.log(result.EnquiryResult);
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchInquirey();
  }, []);


  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars */}
              {/* <DashboardAvatars /> */}

              {/* Right: Actions */}
              <div className=" flex items-center justify-between w-full">
                {/* Filter button */}
                <FilterButton />
                {/* Datepicker built with flatpickr */}
                {/* <Datepicker /> */}
                {/* Add view button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white flex px-3 py-2 border rounded-lg">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0 my-auto" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2 my-auto">Create Product</span>
                </button>
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6">

              <DashboardCard01 />
              <DashboardCard10 />
              <CreateProductCard />
              {
                loading ? <div>Loading Enquires...</div>
                  :
                  <InquireyCard details={inquires} />
              }


            </div>

          </div>
        </main>


      </div>
    </div>
  );
}

export default Dashboard;