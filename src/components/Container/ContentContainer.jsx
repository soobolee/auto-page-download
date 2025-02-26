import {useState} from "react";
import windowAlert from "../../assets/windowalert.png";
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
        </div>
        {(showMacGuide || showWindowsGuide) && (
          <div className="fixed inset-0 flex justify-center items-center z-40">
            <div className="relative w-[40%] h-[40%] bg-sub rounded-xl p-10 shadow-lg overflow-y-scroll">
              <button
                className="absolute top-5 right-5 p-2 bg-red-400 text-white rounded-xl"
                onClick={() => {
                  setShowMacGuide(false);
                  setShowWindowsGuide(false);
                }}
              >
                Close
              </button>
              {showMacGuide && (
                <div>
                  <h2 className="text-2xl mb-4">Guide for Mac</h2>
                  <div className="text-left">
                    <p className="text-lg mb-10">코드 서명을 하지 않았기 때문에 가이드를 필수로 읽어주시기 바랍니다.</p>
                    <p>1. Spotlig를 열고 검색 필드에 터미널을 입력한 다음 터미널을 엽니다.</p>
                    <p>2. 다음의 명령어를 입력합니다.</p>
                    <p>3. xattr -c /Applications/[...directory]/AutoPage.app</p>
                    <p>4. 이제 앱을 실행합니다.</p>
                  </div>
                </div>
              )}
              {showWindowsGuide && (
                <div>
                  <h2 className="text-2xl mb-4">Guide for Window</h2>
                  <div className="text-left">
                    <p className="text-lg mb-10">코드 서명을 하지 않았기 때문에 가이드를 필수로 읽어주시기 바랍니다.</p>
                    <p>1. AutoPage.exe 파일을 실행합니다.</p>
                    <p>2. 다음의 팝업창이 나타나면 추가 정보를 선택합니다.</p>
                    <img src={windowAlert} width="300" height="50" />
                    <p>4. 신뢰 버튼을 선택합니다.</p>
                    <p>4. 이제 앱을 실행합니다.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContentContainer;
