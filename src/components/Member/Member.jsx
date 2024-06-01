import React from "react"


const Member = (props) => {

    return(
        <div onClick={() => window.open(`${props.url}`, "__blank").focus()} className="w-auto my-4 hover:cursor-pointer ">
            {/* <p className="text-[11px] text-left pl-2 w-1/2 text-white bg-[#4743bb]">
                {props.category} */}
            {/* </p> */}
            <div className="">
                <div className="">
                    <h1 className="text-lg font-semibold capitalize hover:text-blue-600 hover:font-bold transition-all hover:transistion-all">
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