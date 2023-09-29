import whitelogo from "../assets/icons/iCON 7.svg";

const Footer = () => {
  return (
    <div className="bg-[#120B48] w-full max-sm:text-xs">
      <div className="w-10/12 h-96 m-auto  text-white flex justify-between items-center max-sm:flex-col max-sm:justify-normal max-sm:h-64 max-sm:w-full">
        <div className="flex items-center gap-2 text-xl max-sm:text-xs max-sm:pt-4 max-sm:pb-5 max-sm:left-0 max-sm:w-full max-sm:pl-4">
          <img src={whitelogo} />
          <h1>HelpMeOut</h1>
        </div>
        <div className="w-9/12 flex justify-between max-sm:gap-8">
          <div>
            <ul className="leading-loose text-lg max-sm:text-xs">
              <li className="font-semibold">Menu</li>
              <li>Home</li>
              <li>Converter</li>
              <li>How it Works</li>
            </ul>
          </div>
          <div>
            <ul className="leading-loose text-lg max-sm:text-xs">
              <li className="font-semibold">About us</li>
              <li>About</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <ul className="leading-loose text-lg max-sm:text-xs">
              <li className="font-semibold">Screen record</li>
              <li>Browser Window</li>
              <li>Desktop</li>
              <li>Application</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
