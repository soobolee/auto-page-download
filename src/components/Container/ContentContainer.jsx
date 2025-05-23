import {useState} from "react";
import GuideContainer from "./GuideContainer";

function ContentContainer() {
  const [showMacGuide, setShowMacGuide] = useState(false);
  const [showWindowsGuide, setShowWindowsGuide] = useState(false);
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

  const handleMacGuideClick = () => {
    setShowMacGuide(!showMacGuide);
    setShowWindowsGuide(false);
  };

  const handleWindowsGuideClick = () => {
    setShowWindowsGuide(!showWindowsGuide);
    setShowMacGuide(false);
  };

  const handleCloseModal = () => {
    setShowMacGuide(false);
    setShowWindowsGuide(false);
  };

  return (
    <div className="w-[50%] h-full flex justify-center items-center z-20">
      <div className="relative w-[70%] min-w-sm p-18 bg-subsub text-center rounded-xl shadow-lg shadow-blue-500/50">
        <div className="text-7xl mb-10 text-shadow">Auto Page</div>
        <h1 className="text-3xl">Download App</h1>
        <p className="my-10 text-xl">Click the button! start your download.</p>
        <div className="flex md:flex-row flex-col justify-center items-center">
          <a href={isMobile ? "#" : "https://github.com/soobolee/auto-page/releases/download/v1.0.3-mac/Auto.Page.zip"}>
            <button className="p-2 m-2 bg-blue text-xl rounded-xl hover:bg-[#21a1f1] hover:scale-125 active:scale-90 transition duration-300 animate-bounce cursor-pointer">
              {isMobile ? "Sorry You Need a Desktop" : "Download for Mac"}
            </button>
          </a>
          <a href={isMobile ? "#" : "https://github.com/soobolee/auto-page/releases/download/v1.0.3-window/Auto.Page.zip"}>
            <button className="p-2 m-2 bg-blue text-xl rounded-xl hover:bg-[#21a1f1] hover:scale-125 active:scale-90 transition duration-300 animate-bounce cursor-pointer">
              {isMobile ? "Sorry You Need a Desktop" : "Download for Window"}
            </button>
          </a>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-10 flex items-center">
          <button className="relative w-[50%] h-full bg-green rounded-bl-xl cursor-pointer" onClick={handleMacGuideClick}>
            Guide for Mac
            <div className="absolute top-[-25px] left-27 h-7 w-15 flex justify-center items-center animate-pulse rounded-full bg-red-500">
              <span className="text-2xs">Click</span>
            </div>
          </button>
          <button className="relative w-[50%] h-full bg-deep-blue rounded-br-xl cursor-pointer" onClick={handleWindowsGuideClick}>
            Guide for Window
            <div className="absolute top-[-25px] right-27 h-7 w-15 flex justify-center items-center animate-pulse rounded-full bg-red-500">
              <span className="text-2xs">Click</span>
            </div>
          </button>
          <GuideContainer showMacGuide={showMacGuide} showWindowsGuide={showWindowsGuide} handleCloseModal={handleCloseModal} />
        </div>
      </div>
    </div>
  );
}

export default ContentContainer;
