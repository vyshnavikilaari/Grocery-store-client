import { NavLink } from "react-router-dom"
import { Cross, User, X } from 'lucide-react'
import { useRef, useState } from "react"
import { Login, Register } from "../api/api"
import { ShoppingCartIcon } from 'lucide-react'


const Navbar = () => {
    //false (Login hidden) -> true (login visible) Conditional render the login screen 
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const nameRef = useRef('')
    const phoneRef = useRef('')

    const Linksdata = [
        {
            title: 'Home',
            path: '/'
        },
        // {
        //     title: 'Cart',
        //     path: '/cart'
        // },
        {
            title: 'Shop now',
            path: '/products'
        },
        {
            title: 'Contact',
            path: '/contact'
        }
    ]
    const handleLogin = async (e) => {
        e.preventDefault()
        const credentials = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        try {
            const response = await Login(credentials)
            const data = await JSON.stringify(response.data)
            if (response.status === 200) {
                console.log(response.data.token)
                setShowLogin(false)
            } else {
                console.log("Login Error" + data)
            }

        } catch (error) {
            console.error(error)
        }

        console.log(credentials)
    }
    const handleRegister = async (e) => {
        e.preventDefault()
        const credentials = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value

        }
        try {
            const response = await Register(credentials)
            const data = await JSON.stringify(response.data)
            if (response.status === 200) {
                console.log("Signup Success" + data)
                setShowRegister(false)
                setShowLogin(true)
            } else {
                console.log("Signup Error" + data)
            }

        } catch (error) {
            console.error(error)
        }

        console.log(credentials)
    }
    const switchAuth = () => {
        if (showLogin) {
            setShowLogin(false)
            setShowRegister(true)
        } else if (showRegister) {
            setShowLogin(true)
            setShowRegister(false)
        }
    }
    return (
        <>
            <div className='w-screen h-14 shadow-rose-800 shadow-md flex flex-row justify-center items-center'>
                <div className='w-[56%] flex justify-start items-center font-bold text-2xl text-rose-800'>
                <ShoppingCartIcon className="w-6 h-6 mr-2 text-rose-800" />
                {/* <ShoppingBasketIcon className="w-10 h-10 mr-2 text-red-950" /> */}


               {/* < div id="store">Grocery Spot</div> */} Grocery Spot
                </div>
                <div className='w-[40%] h-full flex justify-end items-center '>
                    <div className='w-full h-full flex flex-row justify-end items-center gap-8 font-bold'>
                        {Linksdata.map((link, index) => (
                            <NavLink to={link.path} key={index} className='h-[65%] w-20 hover:bg-rose-500/90 hover:text-white flex justify-center items-center rounded-sm'>
                                {link.title}
                            </NavLink>
                        ))
                        }
                    </div>
                    <button className="h-9 w-10 flex justify-center items-center border-2 border-black rounded-full hover:border-rose-500 hover:text-rose-500 ml-4 shadow-md" onClick={() => { setShowLogin(!showLogin) }}>
                        <User className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {showLogin && (
                <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
                    <div className='h-[50%] w-[25%] flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
                        <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                            <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                                <h1 className='w-1/2 text-left text-xl mt-20 pt-32 font-bold text-rose-500'>Login</h1>
                                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowLogin(!showLogin) }}>
                                    <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                                </div>
                            </div>
                            <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleLogin}>
                                <input ref={emailRef} type="email" name="" id="email" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-rose-400 rounded-sm' required />
                                <input ref={passwordRef} type="password" name="" id="password" placeholder='Password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-rose-400 rounded-sm' required />
                                <button type="submit" className="w-full h-[20%]  shadow-lg shadow-gray-400 hover:shadow-rose-400 bg-rose-500 text-white rounded-sm outline-none">Login</button>
                            </form>
                            <div className="h-[10%] w-[80%] flex justify-center items-start">
                                <p className="cursor-pointer text-rose-500 hover:text-rose-600" onClick={switchAuth}>Register ?</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
            {showRegister && (
                <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
                    <div className='h-[65%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
                        <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                            <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                                <h1 className='w-1/2 text-left text-xl my-6 font-bold text-rose-500'>Register</h1>
                                <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowRegister(!showRegister) }}>
                                    <X className="h-8 w-8 border-2 p-1  border-rose-800 rounded-full  hover:bg-rose-800 hover:text-white" />
                                </div>
                            </div>
                            <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleRegister}>
                                <input ref={nameRef} type="text" name="" id="name" placeholder='Name' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-rose-400 rounded-sm' required />
                                <input ref={emailRef} type="email" name="" id="email" placeholder='Email' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-rose-400 rounded-sm' required />
                                <input ref={passwordRef} type="password" name="" id="password" placeholder='Password' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-rose-400 rounded-sm' required />
                                <input ref={phoneRef} type="number" name="" id="phone" placeholder='Phone' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-rose-400 rounded-sm' required />
                                <button type="submit" className="w-full h-[3rem] shadow-lg shadow-gray-400 hover:shadow-rose-400 bg-rose-500 text-white rounded-sm outline-none">Register</button>
                            </form>
                            <div className="h-[10%] w-[80%] flex justify-center items-start">
                                <p className="cursor-pointer text-rose-500 hover:text-rose-600" onClick={switchAuth}>Login ?</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }


        </>
    )
}

export default Navbar  

