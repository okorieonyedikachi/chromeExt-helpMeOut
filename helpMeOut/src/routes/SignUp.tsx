import logo from "../assets/icons/iCON 7 1.svg";
import google from "../assets/icons/Google svg.png";
import facebook from "../assets/icons/Facebook svg.png";
import line from "../assets/icons/Line 18.png";

const SignUp = () => {
  return (
    <div className="flex justify-center font-custom">
      <div className="w-7/12 bg-re-600 mt-20 h-screen">
        <nav>
          <div className="flex gap-2 items-center">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <p className="font-bold">HelpMeOut</p>
          </div>
        </nav>
        <div className="mt-10 flex flex-col items-center bg-ble-300 w-4/6 m-auto h-5/6">
          <div className="flex flex-col items-center mb-8">
            <h1 className="text-2xl font-semibold">Log in or Sign Up</h1>
            <p>
              Join millions of others in sharing successful moves on HelpMeOut.
            </p>
          </div>

          <div className="bg-rd-400 w-full ">
            <div className="w-full justify-center flex gap-4 p-2 border-black border-2 rounded-lg mb-8">
              <img src={google} alt="" />
              <p>Continue with Google</p>
            </div>
            <div className="w-full justify-center flex gap-4 p-2 border-black border-2 rounded-lg mb-8">
              <img src={facebook} alt="" />
              <p>Continue with Facebook</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-8">
            <img src={line} alt="" />
            <span className="text-[#B9C2C8]">or</span>
            <img src={line} alt="" />
          </div>
          <div>
            <div className="">
              <label>Email</label>
              <input type="text" placeholder="Enter your email address" />
            </div>
            <div>
              <label>Password</label>
              <input type="text" placeholder="Enter your Password" />
            </div>
          </div>

          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
