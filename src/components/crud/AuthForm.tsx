"use client"

import React, { useState } from 'react'
import axios from 'axios';
import {  useRouter } from 'next/navigation';

export default function AuthForm() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [validation, setValidation] = useState<any>([]);
    //   const csrf = () => axios.get('/sanctum/csrf-cookie')
    const router = useRouter()
    const loginHandler = async (e: any) => {
        e.preventDefault();
        // csrf();
        //initialize formData
        const formData = new FormData();
        //append data to formData
        formData.append('username', username);
        formData.append('password', password);

        //send data to server
        await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, formData)
            .then((response: any) => {

                //set token on cookies
                // localStorage.setItem("token", response.data.token);
                if (response.data.code == 1) {
                    localStorage.setItem("token", response.data.token);

                    setValidation(response.data);
                    setTimeout(() => {
                        router.push("/dashboard")
                    }, 2000); 
                }



            }).catch((error) => {
                setValidation(error.response.data)

            })

    };

    return (
        <div>


            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
                        Backend Website Jasamarga Bali Tol
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login Untuk Akses Dashboard
                            </h1>
                            {
                                validation.code == 0 ? (

                                    <div className=" p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                        {validation.status}
                                    </div>
                                ) : validation.code == 1 && (
                                    <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                                        {validation.status}

                                    </div>
                                )
                            }
                            <form className="space-y-4 md:space-y-6" onSubmit={loginHandler}>
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                    <input type="username" value={username} name="username" id="username" onChange={(e) => setUsername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-main-600 focus:border-main-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} id="password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-main-600 focus:border-main-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-main-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-main-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-main-600 hover:underline dark:text-main-500">Forgot password?</a>
                                </div>
                                <button type="submit" className=" w-full text-white bg-main-600 hover:bg-main-700 focus:ring-4 focus:outline-none focus:ring-main-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-main-600 dark:hover:bg-main-700 dark:focus:ring-main-800">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" className="font-medium text-main-600 hover:underline dark:text-main-500">Sign up</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
