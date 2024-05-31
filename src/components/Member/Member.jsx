import React from "react"


const Member = (props) => {

    return(
        <div onClick={() => window.open(`${props.url}`, "__blank").focus()} className="w-auto my-4 hover:cursor-pointer">
            <p className="text-[11px] text-left pl-2 w-1/2 text-white bg-[#4743bb]">
                {props.category}
            </p>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg w-[300px] text-left  -mt-4 p-4 h-[100px]">
                <div className="">
                    <h1 className="text-xl font-semibold capitalize">
                        { props.name }
                    </h1>
                </div>
                <div className="">
                    <p className="text-md">
                        { props.designation }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Member