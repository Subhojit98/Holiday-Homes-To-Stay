import { backimageList, items } from '../../../data/Hamburger'
import logo from '/src/assets/logo/amea-logo.svg'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface menuProp {
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const Menu: React.FC<menuProp> = ({ showMenu, setShowMenu }) => {
    const [backImage, setBackImage] = useState(0)
    const handleListHover = (index: number) => {
        setBackImage(index)
    }

    const menuVariants = {
        visible: {
            opacity: [0.5, 0.7, 0.8, 1], x: '0%',

            transition: {
                ease: 'easeOut',
                duration: '0.4',
                delay: 0.1,
                type: 'spring',
                stiffness: 50
            }
        },
        hidden: {
            opacity: 0, x: '100%'
        },
        transition: {
            ease: 'easeOut',
            duration: '0.7',
            delay: 0.2,
            type: 'spring',
        }
    }

    const handleCloseMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}

                animate={showMenu ? "visible" : "hidden"}
                variants={menuVariants}
                className={`fixed z-40 w-full h-full flex flex-col justify-center items-center bigTablet:flex-row bg-black`} >

                <div className={`w-full h-full  bg-center bg-cover transition-all relative duration-500 ease-out delay-300`} style={{ backgroundImage: `url(${backimageList[backImage]})` }} >

                    <div className="bg-black opacity-60 flex justify-center relative">
                        <ul className={`text-slate-100 list-none w-11/12 h-screen justify-around items-center flex-col flex gap-y-5 text-xl tablet:text-3xl font-Raleway `}>

                            <motion.button
                                whileHover={{ rotate: 90, transition: { duration: 0.2 } }}

                                className="inline-flex px-10 items-center justify-center " onClick={handleCloseMenu}>
                                <div className="h-10 w-[1px] bg-white rotate-45"></div>
                                <div className="h-10 w-[1px] bg-white -rotate-45"></div>
                            </motion.button>

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
                <div className="w-full h-screen bg-WholePage bigTablet:flex bigTablet:flex-col bigTablet:justify-center bigTablet:items-center hidden">
                    <img src={logo} alt="" className='w-2/6' />
                </div>

            </motion.div >
        </>
    )
}

export default Menu
