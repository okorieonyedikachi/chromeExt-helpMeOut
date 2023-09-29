import logo from "../assets/icons/iCON 7 1.svg"
import profile from "../assets/icons/profile-circle.svg"
import arrow from "../assets/icons/arrow-down.svg"
import edit from "../assets/icons/edit.png"

const Listing = () => {
  return (
    <div className="flex flex-col items-center">
       <nav className="flex justify-between mt-12 mb-8 w-11/12 m-auto max-sm:text-sm font-custom">
                <div className="flex gap-2 items-center ">
                    <div className=""><img src={logo} alt="logo"/></div>
                    <p className="font-bold">HelpMeOut</p>
                </div>
                <div className="flex gap-2 items-center">
                    <div><img src={profile}/></div>
                    <h1 className="font-[Work Sans]">John Mark</h1>
                    <div className="w-5 h-5"><img src={arrow}/></div>
                </div>
        </nav>
        <div className="bg-red-100 w-11/12 m-auto font=[Work Sans]"><p className="text-[#141414B2]">Home / Recents Videos/ <span className="text-[#413C6D]">How to Create A Facebook Ad Listing</span></p></div>
        <div className="w-11/12 flex">
            <p>How To Create A Facebook Ad Listing</p>
            <img src={edit} />
        </div>
    </div>
  )
}

export default Listing