import React from 'react'

const PageIntroHeader = ({PageName}) => {


    return (
        <div className="
                bg-[url('https://images.unsplash.com/photo-1631049780190-31c1f051a2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')]
                bg-center
                relative
                h-105
            ">
            <div className="flex flex-col h-60 md:h-76 w-full bg-gray-700 bg-opacity-80">
                <div className="mt-10 h-5/6 px-11 flex items-center max-md:justify-center text-white font-semibold text-2xl md:text-3xl md:ml-28">
                    {PageName}
                </div>
                {/* <div className=" flex-1 bottom-0 flex items-end -mb-1">
                    <img className="
                            w-full
                        "
                        src="https://arkel.b-cdn.net/Content/Images/triangle-01.svg" alt =""></img>
                </div> */}
            </div>

        </div>
    )
}

export default PageIntroHeader