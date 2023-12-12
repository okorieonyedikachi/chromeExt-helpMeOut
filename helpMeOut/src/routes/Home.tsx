import logo from "../assets/icons/iCON 7 1.svg"
import profile from "../assets/icons/profile-circle.svg"
import arrow from "../assets/icons/arrow-down.svg"
import video1 from "../assets/images/video frame.png"
import link from "../assets/icons/link.png"
import more from "../assets/icons/more.png"
import search from "../assets/icons/search-normal.svg";

const Home = () => {
  return (
    <div className="flex justify-center flex-col">
      <nav className="flex justify-between mt-12 w-11/12 m-auto max-sm:text-sm">
        <div className="flex gap-2 items-center ">
          <div className="">
            <img src={logo} alt="logo" />
          </div>
          <p className="font-bold">HelpMeOut</p>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <img src={profile} />
          </div>
          <h1>John Mark</h1>
          <div className="w-5 h-5">
            <img src={arrow} />
          </div>
        </div>
      </nav>
      <div className="flex  mt-12 justify-between w-11/12 m-auto mb-12 max-sm:flex-col">
        <div>
          <h1 className="font-bold text-2xl font-[Sora] mb-2">
            Hello, John Mark
          </h1>
          <p className="font-[Work Sans] mb-2">Here are your recorded videos</p>
        </div>
        <div className="bg-[#E7E7ED] flex gap-2 items-center justify-center w-96 pl-3 rounded-md max-sm:w-full max-sm:h-16 bg-no-repeat bg-[mt-4px]">
          <img src={search} alt="" className="w-5 h-5" />
          <input
            type="text"
            className="w-full h-full bg-inherit p-2 border-none "
            placeholder="Search for a particular"
          />
        </div>
      </div>
      <div>
        <hr />
      </div>
      <div className="overflow-y-auto bg-re-600 mt-12 w-full flex items-center justify-around pl-32 max-sm:pl-8">
        <div className=" w-full">
          <div className="w-full flex flex-col ">
            <h2>Recent files</h2>
            <div className="flex justify-between w-11/12 gap-6 my-8 max-sm:flex-col">
              <div className="w-3/6 max-sm:w-full  border-[#B6B3C6] border-2 border-opacity-20 p-4 rounded-2xl">
                <img src={video1} />
                <div className="mt-4 flex justify-between">
                  <p className="font-[Work Sans] font-semibold">
                    How to Create Facebook Ad Listing
                  </p>
                  <div className="flex gap-2 bg-re-500 items-center">
                    <img src={link} />
                    <img src={more} />
                  </div>
                </div>
                <p className="text-[#B6B3C6] text-sm">SEPTEMBER 23, 2023</p>
              </div>
              <div className="w-3/6 max-sm:w-full border-[#B6B3C6] border-2 border-opacity-20 p-4 rounded-2xl">
                <img src={video1} />
                <div className="mt-4 flex justify-between">
                  <p className="font-[Work Sans] font-semibold">
                    How to Create Facebook Ad Listing
                  </p>
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
              <div className="flex justify-between w-11/12 gap-6 my-8 max-sm:flex-col">
                <div className="w-3/6 max-sm:w-full border-[#B6B3C6] border-2 border-opacity-20 p-4 rounded-2xl">
                  <img src={video1} />
                  <div className="mt-4 flex justify-between">
                    <p className="font-[Work Sans] font-semibold">
                      How to Create Facebook Ad Listing
                    </p>
                    <div className="flex gap-2 items-center">
                      <img src={link} />
                      <img src={more} />
                    </div>
                  </div>
                  <p className="text-[#B6B3C6] text-sm">SEPTEMBER 23, 2023</p>
                </div>
                <div className="w-3/6 max-sm:w-full bg-geen-400 border-[#B6B3C6] border-2 border-opacity-20 p-4 rounded-2xl">
                  <img src={video1} />
                  <div className="mt-4 flex justify-between">
                    <p className="font-[Work Sans] font-semibold">
                      How to Create Facebook Ad Listing
                    </p>
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
  );
}

export default Home