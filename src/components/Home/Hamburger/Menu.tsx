import { backimageList, items } from '../../../data/Hamburger'
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
                    <svg viewBox="0 0 150 25" className='w-2/6' xmlns="http://www.w3.org/2000/svg"><defs><path id="a" d="M0 24.0196078h150V0H0z" /></defs><g fill="none" fill-rule="evenodd"><path d="M69.2790835 4.9019608c-5.5376471 0-8.9769555 2.2540808-10.0031743 6.5347217-.2442598-4.5146622-3.3934072-6.5347217-10.1162879-6.5347217-5.3556818 0-8.854006 2.2638317-9.9490766 6.3982092V5.111605l-.1475394.1153855c-.7852377.6159312-1.7491621 1.0335943-2.7098078 1.1749823l-.0786877.011376v17.116063h2.9360349V13.3771097c.370488-5.026584 3.6573389-7.9095973 9.0179388-7.9095973 5.4605987 0 7.8949996 1.8331674 7.8949996 5.9431677v12.1187317h3.1688194v-9.121958c0-5.7644014 3.2163599-8.9399414 9.0556432-8.9399414 5.4605988 0 7.8949996 1.8331674 7.8949996 5.9431677v12.1187317h3.1688194V12.0249862c0-4.9258248-3.1261969-7.1230254-10.1326812-7.1230254M21.5525782 18.3522694c0 2.5069908-3.6507125 5.2137549-9.5519547 5.2137549-6.0911255 0-8.9278166-1.5343243-8.9278166-4.8273083 0-3.2782466 2.7194588-4.8731578 8.8155378-5.1744552l9.6642335-.5747575v5.3627661zM12.3523203 4.9019608c-5.3299412 0-9.3125366 1.395138-10.6549289 3.7318302-.5564405.9693916-.5729521 2.0304824-.0462324 2.9114498l.0280697.0442121h.249325l.0115581-.0785993c.300511-1.9764454 3.3287365-6.309233 10.3725807-6.309233 6.0448931 0 9.2398857 2.4169292 9.2398857 6.9937021v.4945207c-3.6011778.2030482-6.8572633.3897216-10.1826975.6140572C3.4410153 13.7263719.041279 15.3753201 0 18.8173154c.0429301 3.5975563 3.3700155 5.2022924 10.7903239 5.2022924 5.4636851 0 9.6642336-1.6997102 10.7622543-4.2853004v3.936516h2.9572257V12.9698535c0-5.2792543-4.2038507-8.0678927-12.1574836-8.0678927zM147.042774 18.3522694c0 2.5069908-3.650712 5.2137549-9.551954 5.2137549-6.091126 0-8.927817-1.5343243-8.927817-4.8273083 0-3.2782466 2.719459-4.8731578 8.815538-5.1744552l9.664233-.5747575v5.3627661zM150 23.6708234V12.9698535c0-5.2792543-4.203851-8.0678927-12.157484-8.0678927-5.329941 0-9.312536 1.395138-10.654928 3.7318302-.556441.9693916-.572953 2.0304824-.046233 2.9114498l.026419.0442121h.250976l.011558-.0785993c.300511-1.9764454 3.328736-6.309233 10.372581-6.309233 6.044893 0 9.239885 2.4169292 9.239885 6.9937021v.4945207c-3.601177.2030482-6.857263.3897216-10.182697.6140572-7.928866.4224713-11.330253 2.0714195-11.369881 5.5134148.04293 3.5975563 3.371667 5.2022924 10.790324 5.2022924 5.463685 0 9.665885-1.6997102 10.762254-4.2869379v3.9381535H150z" fill="#222222" /><mask id="b" fill="#fff"><use xlinkHref="#a" /></mask><path fill="#222222" mask="url(#b)" d="M97.0588235.5764706h12.2549015V0H97.0588235zM93.079995 13.1892766c.2510626-4.748709 4.4943511-7.8353697 10.838637-7.8730319 5.967692 0 10.044156 3.1603477 10.179598 7.8730319H93.079995zm10.995551-8.2873158c-8.3015831.0376622-13.8794676 3.8710165-13.8794676 9.5399924 0 5.601839 5.465567 9.5399925 13.2931046 9.5776546 8.169445 0 11.791684-4.4441365 12.969366-6.3550825l.08589-.1391863h-.404673l-.026428.0343872c-2.163763 2.6216149-6.532583 4.1870513-11.684322 4.1870513-7.0033254-.0769618-11.3539762-3.2012848-11.3539762-8.1579544v-.0245623h23.5916272v-.168661c0-5.0008817-5.176515-8.493639-12.591121-8.493639z" /></g></svg>
                </div>

            </motion.div >
        </>
    )
}

export default Menu
