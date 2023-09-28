import logo from "../assets/icons/iCON 7 1.svg"
import arrow from "../assets/icons/arrow-right.png"

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
        <section className="bg-white flex justify-center pt-28 h-4/5 ">
            <div className="w-11/12 bg-blue-40 flex justify-between gap-4 max-sm:flex-col-reverse">
                <div className="w-2/6 items-center justify-center m-auto max-sm:w-full">
                    <h1 className="font-bold text-5xl my-5 w-5/6 ">Show Them Don’t Just Tell</h1>
                    <p className="mt-5 mb-10">Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                    <button className="h-20 w-72 bg-slate-300 rounded-lg bg-[#120B48] flex justify-center items-center gap-4 text-white">Install HelpMeOut <img src={arrow} alt="" /></button>
                </div>
                <div className="bg-red-400 w-4/6 max-sm:w-full">kneknw</div>
            </div>
        </section>
        <section className="bg-white mt-6">
            <div className='w-full flex flex-col items-center'>
                <h1 className="py-4 text-xl  font-semibold">Features</h1>
                <p className="">Key Highlights of Our Extension</p>
            </div>
            <div>
                <section className="bg-green-700">
                    <div>
                        <img src="" alt="" />
                        <div>
                            <h2>Simple Screen Recording</h2>
                            <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <h2>Easy-to-Share URL</h2>
                            <p>Share your recordings instantly with a single link. No attachments, no downloads.</p>
                        </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <h2>Revisit Recordings</h2>
                            <p>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                        </div>
                    </div>
                    
                </section>
                <div>
                   <img src="" alt="" /> 
                </div>
                
            </div>
        </section>
        <section className="bg-orange-400">
            <h1>How it works</h1>
            <section className="w-11/12 flex">
                <div>
                    <img src="" alt="" />
                    <h1>Record Screen</h1>
                    <p>Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.</p>
                    <img src="" alt="" />
                </div>
                <div>
                    <img src="" alt="" />
                    <h1>Share Your Recording</h1>
                    <p>We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                    <img src="" alt="" />
                </div>
                <div>
                    <img src="" alt="" />
                    <h1>Learn Effortlessly</h1>
                    <p>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                    <img src="" alt="" />
                </div>
            </section>
        </section>
    </div>
  )
}

export default LandingPage