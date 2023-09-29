import logo from "../assets/icons/iCON 7 1.svg";
import profile from "../assets/icons/profile-circle.svg";
import arrow from "../assets/icons/arrow-down.svg";
import edit from "../assets/icons/edit.png";
import frame from "../assets/images/video frame.jpg";
import copy from "../assets/icons/copy.svg"
import facebook from "../assets/icons/Facebook svg.png"
import telegram from "../assets/icons/Group.png"
import whatsapp from "../assets/icons/Vector (2).png"

const Listing = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <nav className="flex justify-between mt-12 mb-8 w-11/12 m-auto max-sm:text-sm font-custom max-sm:w-ful">
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
          <h1 className="font-[Work Sans]">John Mark</h1>
          <div className="w-5 h-5">
            <img src={arrow} />
          </div>
        </div>
      </nav>
      <div className="w-11/12 m-auto font=[Work Sans]">
        <p className="text-[#141414B2]">
          Home / Recents Videos/{" "}
          <span className="text-[#413C6D]">
            How to Create A Facebook Ad Listing
          </span>
        </p>
      </div>
      <div className="w-11/12 flex items-center mt-6 gap-6">
        <p className="text-2xl font-bold">
          How To Create A Facebook Ad Listing
        </p>
        <img src={edit} className="w-5 h-5" />
      </div>
      <div className="border-1px  w-11/12 h-max p-4 rounded-xl mt-6">
        <div className="w-full">
          <img src={frame} className="w-11/" />
        </div>
      </div>
      <section className="w-11/12 mt-8 ">
        <div className="  flex justify-between max-sm:flex-col gap-y-5">
          <div className="flex w-2/6 h-72px items-center bg-[#B6B3C680] justify-between px-6 rounded-xl max-sm:w-full">
            <p className="text-[#141414] text-sm">enter email of reciever</p>
            <button className="h-11 w-20 bg-[#605C84] rounded-lg">Send</button>
          </div>
          <div className="flex items-center bg-[#FAFAFA] w-3/6 justify-between px-6 rounded-xl max-sm:w-full max-sm:px-2">
            <p className="text-[#4B4B4B] font-[Work Sans] text-base max-sm:text-xs">https://www.helpmeout/Untitled_Video_20232509</p>
            <button className="border-[#120B48] border-1px px-4 py-2.5 rounded-xl flex gap-2 max-sm:text-xs max-sm:py-2 ">
              <img src={copy} className="w-5 h-5"/>
              <p className="max-sm:text-xs" >Copy URL</p>
            </button>
          </div>
        </div>
        <div className="mt-8 w-3/6">
            <p className="mb-4 font-bold">Share your video</p>
            
             <ul className="flex gap-4  w-fit max-sm:flex-col">
                <li className="flex w-36  h-12 border-[#08051E] border-1px items-center justify-center gap-2 rounded-md "><img src={facebook} className="w-6 h-6 max-sm:w-3 max-sm:h-3"/><p>Facebook</p></li>
                <li className="flex w-36 h-12 border-[#08051E] border-1px items-center justify-center gap-2 rounded-md "><img src={whatsapp} className="w-6 h-6"/><p>Whatsapp</p></li>
                <li className="flex w-36 h-12 border-[#08051E] border-1px items-center justify-center gap-2 rounded-md "><img src={telegram} className="w-6 h-6"/><p>Telegram</p></li>

             </ul>
           
        </div>
      </section>
      <section id="transcript" className="w-full bg-green-400">
            jsdnfke
      </section>
    </div>
  );
};

export default Listing;
