import logo from "../assets/icons/iCON 7 1.svg"
import arrow from "../assets/icons/arrow-right.png"
import videorepo from "../assets/images/Video Repository.png"
import icon1 from "../assets/icons/Icon placeholder.png"
import icon2 from "../assets/icons/Icon placeholder (1).png"
import icon3 from "../assets/icons/Icon placeholder (2).png"
import vector from "../assets/images/rec-1.cb7888a47e24214aeb105805426a8300.svg.png"
import one from "../assets/icons/Icon.png"
import two from "../assets/icons/Icon (1).png"
import three from "../assets/icons/Icon (2).png"
import Footer from "../Components/Footer"

const LandingPage = () => {
  return (
    <div className="bg-slate-200 w-full h-screen font-custom">
        <nav className="flex justify-between items-center h-24 p-12 px-12 bg-white">
            <div className="flex gap-2 items-center">
                <div><img src={logo} alt="logo"/></div>
                <p className="font-bold">HelpMeOut</p>
            </div>
            <div className="flex gap-5">
                <p>Features</p>
                <p>How it works</p>
            </div>
            <p className="text-lg font-semibold">Get Started</p>
        </nav>
        <section className="bg-white flex justify-center pt-28 h-4/5 mb-8">
            <div className="w-10/12 bg-blue-40 flex justify-between gap-4 max-sm:flex-col-reverse">
                <div className="w-2/6 items-center justify-center m-auto max-sm:w-full">
                    <h1 className="font-bold text-5xl my-5 w-5/6 ">Show Them Don’t Just Tell</h1>
                    <p className="mt-5 mb-10">Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                    <button className="h-20 w-72 bg-slate-300 rounded-lg bg-[#120B48] flex justify-center items-center gap-4 text-white">Install HelpMeOut <img src={arrow} alt="" /></button>
                </div>
                <div className="bg-red-400 w-4/6 max-sm:w-full">kneknw</div>
            </div>
        </section>
        <section className="bg-white mt-6 h-4/5 pb-20 mb-20">
            <div className='w-full flex flex-col items-center'>
                <h1 className="pb-2 pt-14 text-4xl font-extrabold">Features</h1>
                <p className="pb-6">Key Highlights of Our Extension</p>
            </div>
            <div className="flex w-10/12 mt-16 justify-between m-auto gap-14">
                <section className="bg-greenn-700 w-auto flex flex-col justify-around">
                    <div className="flex  gap-6">
                        <div className=""><img src={icon1}/></div>
                        <div className="">
                            <h2 className="text-3xl font-semibold mb-3">Simple Screen Recording</h2>
                            <p className="w-5/6">Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className=""><img src={icon2}/></div>
                        <div className="">
                            <h2 className="text-3xl font-semibold mb-3">Easy-to-Share URL</h2>
                            <p className="w-5/6">Share your recordings instantly with a single link. No attachments, no downloads.</p>
                        </div>
                    </div>
                    <div className="flex  gap-6">
                        <div className=""><img src={icon3}/></div>
                        <div className="">
                            <h2 className="text-3xl font-semibold mb-3">Revisit Recordings</h2>
                            <p className="w-5/6">Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                        </div>
                    </div>
                   
                </section>
                <div>
                   <img src={videorepo} alt="" /> 
                </div>
                
            </div>
        </section>
        <section className="flex flex-col items-center mb-32">
            <h1 className="pb-2 pt-10 text-4xl font-extrabold mb-14">How it works</h1>
            <section className="flex justify-between w-10/12 gap-20">
                <div className="items-center flex flex-col">
                    <img src={one} alt="" />
                    <h1 className="text-2xl font-semibold mt-8 mb-4">Record Screen</h1>
                    <p className="mb-7 text-center text-lg">Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.</p>
                    <img src={vector} className="w-full"/>
                </div>
                <div className="items-center flex flex-col">
                    <img src={two} alt="" />
                    <h1 className="text-2xl font-semibold mt-8 mb-4">Share Your Recording</h1>
                    <p className="mb-7 text-center text-lg">We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                    <img src={vector} className="w-full"/>
                </div>
                <div className="items-center flex flex-col">
                    <img src={three} alt="" />
                    <h1 className="text-2xl font-semibold mt-8 mb-4">Learn Effortlessly</h1>
                    <p className="mb-7 text-center text-lg">Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                    <img src={vector} className="w-full"/>
                </div>
            </section>
        </section>
        <Footer/>
    </div>
  )
}

export default LandingPage