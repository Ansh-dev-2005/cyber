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
                        <h2 className="text-center w-full font-semibold text-2xl my-2">Registration Fees</h2>
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
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>
                                </tr>
                                <tr class="bg-gray-50">
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>
                                    <td class="py-2 px-4 border-b border-gray-300 text-sm text-gray-700">1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </Base>
    );
};

export default Register;

