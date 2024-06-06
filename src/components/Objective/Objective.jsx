import React from "react"
import { TickIcon } from "../../Assets"


const Objective = (props) => {

    return(
        <div  className="w-auto my-4">
            <div className="flex flex-row items-center justify-center">
            
                <div className="flex flex-row gap-4">
                    <img src={TickIcon} className="w-[25px] h-[25px] mt-1" alt="tick icon" />
                    <h1 className="text-lg font-semibold capitalize">
                        { props.title }
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Objective