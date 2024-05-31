import React from "react"
import Hero from "../Hero"
import { useLocation } from "react-router-dom"
import Counter from "../Counter"
import PageHero from "../PageHero"
import { UPESLogo } from "../../assets"


const Base = (props) => {

    const location = useLocation()

    return(
        <div className="snap-y snap-proximity overflow-x-hidden">
            { location.pathname === '/' ? <Hero /> : <PageHero />}
            
            { props.children }
            <div className="bg-[#151919] h-[300px] w-full flex flex-wrap flex-row justify-evenly py-2 px-6 items-center">
                <div className="w-1/3 flex flex-col justify-center h-full">
                    <img className="w-1/3 bg-cover" src={UPESLogo} alt="Logo Of UPES Dehradun" />
                </div>
                <div className="w-1/3 flex flex-col justify-center">
                    <h3 className="text-white font-semibold text-xl">
                        About
                    </h3>
                    <p className="text-white pt-4">
                        Established through the UPES Act, 2003, of the<br/> State Legislature of Uttarakhand, UPES is a <br/>top-ranked, UGC-recognised, private university in India.
                    </p>
                </div>
                <div className="w-1/3 flex flex-col justify-center">
                    <h3 className="text-white font-semibold text-xl">
                        Contact
                    </h3>
                    <p className="text-white pt-4">
                        UPES, Bidholi Campus, Dehradun<br/>
                        P.O. Bidholi Via Premnagar,<br/>
                        Dehradun-248007<br/>
                        <strong>Phone:</strong> 1800 1028 737<br/>
                        <strong>Email:</strong> email@ddn.upes.ac.in<br/>
                    </p>
                </div>
            </div>
            <footer className="bg-[#020303] h-[50px] flex items-center justify-center">
               <p className="text-white">Baked By Ansh & Bhupender With Love</p>
            </footer>
        </div>
    )
}

export default Base