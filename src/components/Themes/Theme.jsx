import React from "react"
import { TickIcon } from "../../Assets"


const Theme = (props) => {

    return(
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img class="w-full" src={props.image} alt="Sample Image" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{props.title}</div>
                <p class="text-gray-700 text-base">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default Theme