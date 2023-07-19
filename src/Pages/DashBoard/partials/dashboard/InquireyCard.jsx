import React from 'react'

const InquireyCard = ({ details }) => {
    return (
        <>
            <div className='col-span-full xl:col-span-6 border border-red-200'>
                {
                    details.map((ele, ind) => {
                        return <div>
                            <div className='text-white block max-w-sm p-6 bg-gray-900 border  rounded-lg shadow  border-gray-700 hover:shadow-lg  mb-8'>
                                <h2>Enquirey for Product</h2><br />
                                <p>{ele.productName}</p><br />
                                <h2>Enquirey ID</h2><br />
                                <p>{ele._id}</p><br />
                                <h2>Name of Enquirey Person</h2><br />
                                <p>{ele.name}</p><br />
                                <h2>Email</h2><br />
                                <p>{ele.email}</p><br />
                                <h2>Email</h2><br />
                                <p>{ele.phone}</p><br />
                                <h2>Message By him</h2><br />
                                <p>{ele.message}</p><br />
                            </div>
                        </div>
                    })
                }

            </div>
        </>
    )
}

export default InquireyCard