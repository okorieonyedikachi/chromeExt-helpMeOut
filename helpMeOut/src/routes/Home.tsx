import logo from "../assets/icons/iCON 7 1.svg"
import profile from "../assets/icons/profile-circle.svg"
import arrow from "../assets/icons/arrow-down.svg"
import search from "../assets/icons/search-normal.svg"
import line from "../assets/icons/Line 25.png"
import video1 from "../assets/images/video frame.png"
import link from "../assets/icons/link.png"
import more from "../assets/icons/more.png"

const Home = () => {
  return (
    <div className="flex justify-center flex-col">
       
            <nav className="flex justify-between mt-12 w-11/12 m-auto max-sm:text-sm">
                <div className="flex gap-2 items-center ">
                    <div className=""><img src={logo} alt="logo"/></div>
                    <p className="font-bold">HelpMeOut</p>
                </div>
                <div className="flex gap-2 items-center">
                    <div><img src={profile}/></div>
                    <h1>John Mark</h1>
                    <div className="w-5 h-5"><img src={arrow}/></div>
                </div>
            </nav>
            <div className="flex  mt-12 justify-between w-11/12 m-auto mb-12 max-sm:flex-col">
                <div>
                    <h1 className="font-bold text-2xl font-[Sora] mb-2">Hello, John Mark</h1>
                    <p className="font-[Work Sans] mb-2">Here are your recorded videos</p>
                </div>
                <div className="bg-[#E7E7ED] flex gap-2 items-center w-96 px-6 rounded-md max-sm:w-full max-sm:h-16">
                    <div className="w-5 h-5 text-sm"><img src={search} alt="" className="w-5 h-5"/></div>
                    <p className="text-[#C3C3C3] text-sm">Search for a particular</p>
                </div>
            </div>
            <div >
                <img src={line} alt="" />
            </div>
            <div className="overflow-y-auto bg-red400 mt-12 w-11/12 m-auto">
                <div>
                    <div className="w-full bg-gree-700">
                        <h2>Recent files</h2>
                        <div className="flex justify-between w-11/12 gap-6 my-8 max-sm:flex-col">
                            <div className="w-3/6 max-sm:w-full  border-[#B6B3C6] border-2 border-opacity-20 p-4 rounded-2xl">
                                <img src={video1}/>
                                <div className="mt-4 flex justify-between">
                                    <p className="font-[Work Sans] font-semibold">How to Create Facebook Ad Listing</p>
                                    <div className="flex gap-2 bg-re-500 items-center"> 
                                    <img src={link} />
                                    <img src={more} /> 
                                    </div>
                                
                                </div>
                                <p className="text-[#B6B3C6] text-sm">SEPTEMBER 23, 2023</p> 
                            </div>
                            <div className="w-3/6 max-sm:w-full bg-geen-400 border-[#B6B3C6] border-2 border-opacity-20 p-4 rounded-2xl">
                                <img src={video1}/>
                                <div className="mt-4 flex justify-between">
                                    <p className="font-[Work Sans] font-semibold">How to Create Facebook Ad Listing</p>
                                    <div className="flex gap-2 bg-re-500 items-center"> 
                                    <img src={link} />
                                    <img src={more} /> 
                                    </div>
                                
                                </div>
                                <p className="text-[#B6B3C6] text-sm">SEPTEMBER 23, 2023</p> 
                            </div>
                        </div>
                        <h2>Files from Last week</h2>
                        <div>
                            <div className="flex bg-rd-500 justify-between w-11/12 gap-6 my-8 max-sm:flex-col">
                                    <div className="w-3/6 max-sm:w-full bg-geen-400 border-[#B6B3C6] border-2 border-opacity-20 p-4 rounded-2xl">
                                    <img src={video1}/>
                                    <div className="mt-4 flex justify-between">
                                        <p className="font-[Work Sans] font-semibold">How to Create Facebook Ad Listing</p>
                                        <div className="flex gap-2 bg-re-500 items-center"> 
                                        <img src={link} />
                                        <img src={more} /> 
                                        </div>
                                    
                                    </div>
                                    <p className="text-[#B6B3C6] text-sm">SEPTEMBER 23, 2023</p> 
                                </div>
                                <div className="w-3/6 max-sm:w-full bg-geen-400 border-[#B6B3C6] border-2 border-opacity-20 p-4 rounded-2xl">
                                    <img src={video1}/>
                                    <div className="mt-4 flex justify-between">
                                        <p className="font-[Work Sans] font-semibold">How to Create Facebook Ad Listing</p>
                                        <div className="flex gap-2 bg-re-500 items-center"> 
                                        <img src={link} />
                                        <img src={more} /> 
                                        </div>
                                    
                                    </div>
                                    <p className="text-[#B6B3C6] text-sm">SEPTEMBER 23, 2023</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        
    </div>
  )
}

export default Home