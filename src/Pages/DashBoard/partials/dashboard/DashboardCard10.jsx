import React from 'react';

import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';

function DashboardCard10() {

  const Products = [
    {
      id: "1",
      ProductName: "ARCUBE MRL",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/Products_IMG%2FLX32.png?alt=media&token=d79670bb-130c-4e31-8e36-23de759fe731"
  },
  {
      id: "2",
      ProductName: "ARCUBE MRL",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/Products_IMG%2FLX40(Hydro).png?alt=media&token=ad6254f1-2409-4466-92e6-4a0951b78b2c"
  },
  {
      id: "3",
      ProductName: "ARCUBE MRL",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/Products_IMG%2FLX40.png?alt=media&token=4b2fb313-5b6f-4a0b-94f1-6531216af49a"
  },
  {
      id: "4",
      ProductName: "ARCUBE MRL",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/Products_IMG%2FMT71W.png?alt=media&token=ae51e01a-ae98-4f63-b06a-225a5eab39e7"
  },
  {
      id: "5",
      ProductName: "ARCUBE MRL",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/Products_IMG%2FMT73W.png?alt=media&token=8f6a6a5f-35a6-4c59-8b23-9e1f5471b72f"
  },
  {
      id: "6",
      ProductName: "ARCODE",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/LOP-COP_Images%2Fcop-black-touch.webp?alt=media&token=cfc16263-b68c-43c5-8e0f-29e448e2f6f8"
  },
  {
      id: "7",
      ProductName: "ARL 500",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/LOP-COP_Images%2Fcop-button-red-round.webp?alt=media&token=de07bb94-fd0f-482d-9a36-e91aeb14b6ad"
  },
  {
      id: "8",
      ProductName: "ARL 700",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/LOP-COP_Images%2Fcop-silver-red-round.webp?alt=media&token=fd59a4c3-5137-43d1-a7eb-bdb158e8896e"
  },
  {
      id: "9",
      ProductName: "ARCUBE MRL",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/LOP-COP_Images%2Fcop-white-touch.webp?alt=media&token=834c3dc1-87ec-414a-94ad-47df94210f6c"
  },
  {
      id: "10",
      ProductName: "ARCUBE MRL",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/LOP-COP_Images%2Flop-black-round-button.webp?alt=media&token=d24bf7a3-6f9b-4b27-a6d1-8e9049bda9dd"
  },
  {
      id: "11",
      ProductName: "ARCUBE MRL",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/LOP-COP_Images%2Flop-black-semi-silver-unidirectional-button.webp?alt=media&token=22cb9bd6-e590-4ca5-b7a2-f832f8194c33"
  },
  {
      id: "12",
      ProductName: "ARCUBE MRL",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/LOP-COP_Images%2Flop-black-silver-triangle-button.webp?alt=media&token=9cba0d5b-ce17-4687-b2b9-bc8ddb380436"
  },
  {
      id: "13",
      ProductName: "ARCUBE MRL",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/LOP-COP_Images%2Flop-black-silver-unidirectional-button.webp?alt=media&token=3ad3cca4-62d5-4604-a736-09570dcfb2c4"
  },
  {
      id: "14",
      ProductName: "ARCUBE MRL",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/LOP-COP_Images%2Flop-blacksilver-round-button.webp?alt=media&token=9f8605e9-f835-4568-8be5-09b446b5cb4a"
  },
  {
      id: "15",
      ProductName: "ARCUBE MRL",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/LOP-COP_Images%2Flop-silver-black-display.webp?alt=media&token=fd665986-aeab-405d-b2de-cc245eaaf3f5"
  },
  {
      id: "16",
      ProductName: "ARCUBE MRL",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/LOP-COP_Images%2Flop-white-round-button.webp?alt=media&token=1877447a-834a-4afe-a6ed-427580e8c9dc"
  },
  {
      id: "17",
      ProductName: "ARCUBE MRL",
      productImg: "https://firebasestorage.googleapis.com/v0/b/laxnar-973ec.appspot.com/o/LOP-COP_Images%2Flop-white-triangle-button.webp?alt=media&token=02c48a62-b7d1-4450-bad4-3c80aba44f3d"
  }
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Products</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Product Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Category</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">features</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Date-Added</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100">
              {
                Products.map(product => {
                  return (
                    <tr key={product.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full object-contain h-10" src={product.productImg} width="40" height="40" alt={product.ProductName} />
                          </div>
                          <div className="font-medium text-slate-800">{product.ProductName}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">COP</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">24/03/2023</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-lg text-center">12</div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default DashboardCard10;
