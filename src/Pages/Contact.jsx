import React from "react"
import Base from "../Components/Base/Base"

const Contact = () => {
    return (
        <Base>
            <div className="container mx-auto my-8 p-8 bg-white w-full">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
                    <p className="text-gray-600">We'd love to hear from you! </p>
                </div>
                <div className="flex flex-row justify-center w-full gap-8 py-4 text-center">
                    <div className="w-1/3 h-[200px] border-r-2 text-center">
                        <h2 className="text-xl capitalize font-semibold py-2">Address</h2>
                        <p className="text-lg">
                        UPES, Bidholi Campus, Dehradun
                        P.O. Bidholi Via Premnagar,
                        Dehradun-248007
                        </p>
                    </div>
                    <div className="w-1/3 border-r-2">
                        <h2 className="text-xl capitalize font-semibold py-2">Dr. Ajay Prasad</h2>
                        <p className="text-lg">
                            Convener<br/>
                            +91 1234567890<br />
                            aprasad@ddn.upes.ac.in

                        </p>
                    </div>
                    <div className="w-1/3">
                        <h2 className="text-xl capitalize font-semibold py-2">Dr. Sushabhan Chodhury</h2>
                        <p className="text-lg">
                            Convener<br/>
                            +91 1234567890<br />
                            schoudhury@ddn.upes.ac.in

                        </p>
                    </div>
                </div>
                <hr className="m-4"/>
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                        <form className="bg-gray-100 p-6 rounded-lg shadow-sm">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <div className="text-center">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="md:w-1/2">
                        <div className="h-64 bg-gray-200 rounded-lg shadow-sm overflow-hidden">
                        <iframe
                         loading="lazy" 
                         className="w-full h-full"
                         title="Map"
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.694439524779!2d77.96429537526542!3d30.416410124738434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d4890d7c1735%3A0x22d3ae324c238e3c!2sUPES!5e0!3m2!1sen!2sin!4v1709041890181!5m2!1sen!2sin"
                         allowfullscreen="" 
                         referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Contact