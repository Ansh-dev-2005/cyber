import React from "react";
import Base from "../Components/Base/Base";
import { Dehradun, upes } from "../Assets";

const Register = () => {
    return (
        <Base>
            <div className="container mx-auto my-2 mb-4">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-center mt-10">
                        Registration
                    </h1>


                    <div className="w-2/3 my-8">
                        <h2 className="text-left w-full font-semibold text-2xl my-2">Registration Fees</h2>
                        <table class="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr>
                                    <th class="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left text-sm font-medium text-gray-600">Participant Category</th>
                                    <th class="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left text-sm font-medium text-gray-600">Registration Fees (INR)</th>
                                    <th class="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left text-sm font-medium text-gray-600">Registration Fees (USD)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">Student</td>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>


                                </tr>
                                <tr class="bg-gray-50">
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">Faculty</td>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>

                                </tr>
                                <tr>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">Industry</td>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>

                                </tr>
                                <tr>

                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">Accompanying Person</td>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr className="m-4"/>
                        <p className="p-2 mt-8 text-xl"><strong>Registration Link:</strong> <a className="text-blue-800 hover:underline" href="https://forms.gl">https://forms.gl</a></p>
                        <hr className="m-4"/>

                        <h2 className="text-left w-full font-semibold text-2xl my-2">Payment Details</h2>
                        <div className="flex mt-4">
                            <table className="min-w-full bg-white border border-gray-300">
                                <tbody>
                                    <tr className="bg-gray-100">
                                        <td className="py-2 px-4 border-b border-gray-300 font-bold">Bank Name</td>
                                        <td className="py-2 px-4 border-b border-gray-300">Dummy Bank Ltd.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-gray-300 font-bold">Branch Address</td>
                                        <td className="py-2 px-4 border-b border-gray-300">Dummy Address, City, State - 123456</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="py-2 px-4 border-b border-gray-300 font-bold">Account Holder Name</td>
                                        <td className="py-2 px-4 border-b border-gray-300">University Of Petroleum And Energy Studies</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-gray-300 font-bold">Account No.</td>
                                        <td className="py-2 px-4 border-b border-gray-300">000000000000</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="py-2 px-4 border-b border-gray-300 font-bold">IFSC Code</td>
                                        <td className="py-2 px-4 border-b border-gray-300">DUMMY000000</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 border-b border-gray-300 font-bold">SWIFT Code</td>
                                        <td className="py-2 px-4 border-b border-gray-300">DUMMYINBBXXX</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="py-2 px-4 border-b border-gray-300 font-bold">MICR Code</td>
                                        <td className="py-2 px-4 border-b border-gray-300">123456789</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </Base>
    );
};

export default Register;

