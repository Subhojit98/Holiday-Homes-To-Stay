import { Link } from "react-router-dom"
import ServerDownSvg from "../../components/svgs/ServerDownSvg"
const PageNotFound: React.FC = () => {
    return (
        <>

            <div className="w-full h-full ">
                <div className=" flex items-center mt-10">
                    <div className="container flex flex-col tablet:flex-row items-center justify-between px-5 text-gray-700">
                        <div className="w-full tablet:w-1/2 mx-8">
                            <div className="text-7xl text-green-500 font-extrabold mb-8"> 404</div>
                            <p className="text-2xl tablet:text-3xl leading-normal mb-8 font-chakra">
                                Sorry we couldn't find the page you're looking for
                            </p>

                            <Link to={"/"}>  <button className="btn bg-red-500 btn-outline text-white">
                                back to homepage
                            </button></Link>
                        </div>
                        <div className="w-11/12 tablet:flex tablet:justify-end tablet:w-1/2 mx-5 my-12 justify-center">
                            <ServerDownSvg />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PageNotFound
