import { backimageList, items } from '../../../data/Hamburger'
import logo from '../../../assets/logo/amea-logo.svg'
import { useState } from 'react'

const Menu = () => {
    const [backImage, setBackImage] = useState(0)

    const handleListHover = (index: number) => {
        setBackImage(index)
    }
    return (
        <>
            {/* Change This To show */}
            <div className={`fixed z-40 w-full h-ful flex flex-col justify-center items-center bigTablet:flex-row bg-black -translate-x-full`} >

                <div className={`w-full h-full  bg-center bg-cover transition-all relative duration-500 ease-out delay-300`} style={{ backgroundImage: `url(${backimageList[backImage]})` }} >

                    <div className="bg-black opacity-60 flex justify-center relative">
                        <div className="">

                        </div>
                        <ul className={`text-slate-100 list-none w-11/12 h-screen justify-around items-center flex-col flex gap-y-5 text-xl tablet:text-3xl font-Raleway `}>

                            <button className="inline-flex px-10 items-center justify-center hover:rotate-90 transition-all duration-300 ease-in-out">
                                <div className="h-10 w-[1px] bg-white rotate-45"></div>
                                <div className="h-10 w-[1px] bg-white -rotate-45"></div>
                            </button>

                            <div className='flex justify-center items-center flex-col gap-7'>
                                {
                                    items?.map((list, i) => {
                                        return <li key={i} className={`cursor-pointer list-item hover:opacity-50 transition-opacity ease-in-out duration-200`} onMouseEnter={() => handleListHover(i)}>
                                            {list}
                                        </li>
                                    })
                                }
                            </div>
                        </ul>
                    </div>

                </div>
                <div className="w-full h-screen bg-WholePage flex flex-col justify-center items-center">
                    <img src={logo} alt="" className='w-2/6' />
                </div>

            </div >
        </>
    )
}

export default Menu
