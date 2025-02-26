import {useState} from "react";
import GuideContainer from "./GuideContainer";

function ContentContainer() {
  const [showMacGuide, setShowMacGuide] = useState(false);
  const [showWindowsGuide, setShowWindowsGuide] = useState(false);

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
    <div className="w-[50%] h-full flex justify-center items-center z-20 overflow-y-scroll">
      <div className="relative w-[70%] h-[52%] p-18 bg-subsub text-center rounded-xl shadow-lg shadow-blue-500/50">
        <div className="text-7xl mb-10 text-shadow">Auto Page</div>
        <h1 className="text-3xl">Download App</h1>
        <p className="my-10 text-xl">Click the button! start your download.</p>
        <div className="flex justify-center items-center">
          <a href="https://github.com/soobolee/auto-page/releases/download/v1.0.0-mac/AutoPage-darwin-arm64.zip">
            <button className="p-2 mx-3 bg-blue text-xl rounded-xl hover:bg-[#21a1f1] hover:scale-125 active:scale-90 transition duration-300 animate-bounce cursor-pointer">
              Download for Mac
            </button>
          </a>
          <a href="https://github.com/soobolee/auto-page/releases/download/v1.0.0-window/AutoPage-win32-x64.zip">
            <button className="p-2 mx-3 bg-blue text-xl rounded-xl hover:bg-[#21a1f1] hover:scale-125 active:scale-90 transition duration-300 animate-bounce cursor-pointer">
              Download for Window
            </button>
          </a>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-10 flex items-center">
          <button className="w-[50%] h-full bg-green rounded-bl-xl" onClick={handleMacGuideClick}>
            Guide for Mac
          </button>
          <button className="w-[50%] h-full bg-subsub rounded-br-xl" onClick={handleWindowsGuideClick}>
            Guide for Window
          </button>
          <GuideContainer showMacGuide={showMacGuide} showWindowsGuide={showWindowsGuide} handleCloseModal={handleCloseModal} />
        </div>
      </div>
    </div>
  );
}

export default ContentContainer;
