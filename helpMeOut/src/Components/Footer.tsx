import whitelogo from "../assets/icons/iCON 7.svg";

const Footer = () => {
  return (
    <div className="bg-[#120B48]">
      <div className="w-10/12 h-96 m-auto bg-orane-800  text-white flex justify-between items-center">
        <div className="flex items-center gap-2 text-xl">
          <img src={whitelogo} alt="" />
          <h1>HelpMeOut</h1>
        </div>
        <div>
          <ul className="leading-loose text-lg">
            <li className="font-semibold">Menu</li>
            <li>Home</li>
            <li>Converter</li>
            <li>How it Works</li>
          </ul>
        </div>
        <div>
          <ul className="leading-loose text-lg">
            <li className="font-semibold">About us</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <ul className="leading-loose text-lg">
            <li className="font-semibold">Screen record</li>
            <li>Browser Window</li>
            <li>Desktop</li>
            <li>Application</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
