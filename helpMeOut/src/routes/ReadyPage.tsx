import logo from "../assets/icons/iCON 7 1.svg";
import edit from "../assets/icons/edit.png";
import copy from "../assets/icons/copy.svg";
import facebook from "../assets/icons/Facebook svg.png";
import telegram from "../assets/icons/Group.png";
import whatsapp from "../assets/icons/Vector (2).png";
import video from "../assets/images/video.png";
import arrow from "../assets/icons/arrow-down.svg";
import Footer from "../Components/Footer";

const ReadyPage = () => {
  return (
    <div className="w-full h-screen font-custom">
      <nav className="flex justify-between items-center h-24 p-12 px-12 bg-white max-sm:text-xs  border-b-2 font max-sm:px-4">
        <div className="flex gap-2 items-center">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <p className="font-bold font-[Inter]">HelpMeOut</p>
        </div>
        <div className="flex gap-5 font-[Work Sans] max-sm:hidden">
          <p className="max-sm:text-xs">Features</p>
          <p className="max-sm:text-xs">How it works</p>
        </div>
        <p className="text-lg font-semibold font-[Sora] max-sm:text-sm">Get Started</p>
      </nav>
      <section className="w-full pt-10">
        <section className="w-10/12 m-auto flex justify-between max-sm:flex-col max-sm:w-11/12 max-md:w-11/12">
          <div className="border-r-2 w-3/6 max-sm:w-full">
            <p className="text-4xl font-bold font-[Sora] pb-10 max-sm:text-2xl max-sm:pb-6">
              Your video is ready
            </p>
            <div className="w-11/12 ">
              <div className="mb-16 w-full flex flex-col font-[Sora] max-sm:mb-8">
                <label className=" text-xs pb-2 ">Name</label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Untitled_Video_20232509"
                    className="w-64 font-semibold text-black"
                  />
                  <img src={edit} className="w-5 h-5" />
                </div>
              </div>
              <form action="" className="flex mb-16 max-sm:mb-8">
                <div className="flex w-full h-72px items-center bg-[#B6B3C680] justify-between px-6 rounded-xl max-sm:w-full">
                  <p className="text-[#141414] text-sm">
                    enter email of reciever
                  </p>
                  <button className="h-11 w-20 bg-[#605C84] rounded-lg">
                    Send
                  </button>
                </div>
              </form>
              <div className="flex items-center bg-[#FAFAFA] w-full h-16 justify-between px-6 rounded-xl max-sm:w-full max-sm:px-2">
                <p className="text-[#4B4B4B] font-[Work Sans] text-base max-sm:text-xs truncate">
                  https://www.helpmeout/Untitled_Video_20232509
                </p>
                <button className="border-[#120B48] border-1px h-12 px-2 items-center rounded-xl flex gap-2 max-sm:text-xs max-sm:py-2 ">
                  <img src={copy} className="w-5 h-5" />
                  <p className="max-sm:text-xs text-sm">Copy URL</p>
                </button>
              </div>
              <div className="mt-8 w-3/6 max-sm:mb-8">
                <p className="mb-4 font-bold">Share your video</p>

                <ul className="flex gap-4  w-fit max-sm:flex-col">
                  <li className="flex w-36  h-12 border-[#08051E] border-1px items-center justify-center gap-2 rounded-md ">
                    <img
                      src={facebook}
                      className="w-6 h-6 max-sm:w-3 max-sm:h-3"
                    />
                    <p>Facebook</p>
                  </li>
                  <li className="flex w-36 h-12 border-[#08051E] border-1px items-center justify-center gap-2 rounded-md ">
                    <img src={whatsapp} className="w-6 h-6" />
                    <p>Whatsapp</p>
                  </li>
                  <li className="flex w-36 h-12 border-[#08051E] border-1px items-center justify-center gap-2 rounded-md ">
                    <img src={telegram} className="w-6 h-6" />
                    <p>Telegram</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className=" w-3/6 max-sm:w-11/12">
            <div className=" w-9/12 ml-8 max-sm:w-full max-sm:m-auto">
              <div className="mb-20">
                <img src={video} alt="" />
              </div>
              <section id="transcript" className="w-full ">
                <div className="mb-5">
                  <p className="mb-4 font-[Sora] font-bold">Transcript</p>
                  <div className="flex border-1px w-1/5 h-12 justify-center items-center gap-4 rounded-sm border-[#CFCFCF] max-sm:w-2/5">
                    <p className="text-xs text-[#9D9D9D] font-[Work Sans]">English</p>
                    <img src={arrow} className="h-5 w-5" />
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex gap-10 mb-10">
                    <p className="font-[Work Sans] text-sm">0.01</p>
                    <p className="font-[inter] text-sm leading-7">
                      First step. Open Facebook on your desktop or mobile device
                      and locate "Marketplace" in the left-hand menu or at the
                      top of the First step. 
                    </p>
                  </div>
                  <div className="flex gap-10 mb-10">
                    <p className="font-[Work Sans] text-sm leading-7">0.15</p>
                    <p className="font-[inter] text-sm">
                      First step. Open Facebook on your desktop or mobile device
                      and locate "Marketplace" in the left-hand menu or at the
                      top of the . 
                    </p>
                  </div>
                  <div className="flex gap-10 mb-10">
                    <p className="font-[Work Sans] text-sm">0.30</p>
                    <p className="font-[inter] text-sm leading-7">
                      First step. Open Facebook on your desktop or mobile device
                      and locate "Marketplace" in the left-hand menu or at the
                      top of the First step. 
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>
      <section className="w-full flex justify-center mt-16 bg-[#f6f3f3f4] py-12 mb-16">
        <div className="items-center  flex flex-col w-2/6 ">
            <p className="text-center mb-10 font-[Sora]">To ensure the availability and privacy of your video, we recommend saving it to your account.</p>
            <button className="mb-10 font-[Work Sans] w-36 rounded-md h-14 bg-[#120B48] text-[#F9F9FF]">save video</button>
            <p className="font-[Sora] text-[#7E7E7E]">Don’t have an account? <span className="text-[#120B48] underline">Create account</span></p>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ReadyPage;
