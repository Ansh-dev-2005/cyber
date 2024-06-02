import React from "react"
import Base from "../Components/Base/Base"
import About from "../Components/About"
import Counter from "../Components/Counter"

const Home = () => {
    return(
        <Base>
            <div className="bg-[#ffffff] rounded-tr-xl rounded-tl-xl w-2/3 h-[120px] -mt-[100px] z-50 mx-auto shadow-lg">
                <Counter />
            </div>
            <About />
        </Base>
    )
}

export default Home