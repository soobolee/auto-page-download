import windowAlert from "../../assets/windowalert.webp";

function GuideContainer({showMacGuide, showWindowsGuide, handleCloseModal}) {
  return (
    (showMacGuide || showWindowsGuide) && (
      <div className="fixed inset-0 flex justify-center items-center z-40">
        <div className="relative w-[40%] h-[40%] bg-sub rounded-xl p-10 shadow-lg overflow-y-scroll">
          <button className="absolute top-5 right-5 p-2 bg-red-400 text-white rounded-xl" onClick={handleCloseModal}>
            Close
          </button>
          {showMacGuide && (
            <div>
              <h2 className="text-2xl mb-4">Guide for Mac</h2>
              <div className="text-left">
                <p className="text-lg mb-10">코드 서명을 하지 않았기 때문에 가이드를 필수로 읽어주시기 바랍니다.</p>
                <p>1. Spotlight를 열고 검색 필드에 터미널을 입력한 다음 터미널을 오픈합니다.</p>
                <p>
                  2. 다음의 명령어를 입력합니다. <span className="text-green">directory</span>에는 현재 앱의 경로를 넣어 주세요.
                </p>
                <div className="bg-gray-600 h-10 px-2 my-2 flex items-center rounded-xl">
                  <p>
                    xattr -c /Applications/<span className="text-green">...directory</span>/AutoPage.app
                  </p>
                </div>
                <p>3. 이제 앱을 실행합니다.</p>
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
                <img src={windowAlert} className="my-2" width="500" height="50" />
                <p>4. 신뢰 버튼을 선택합니다.</p>
                <p>4. 이제 앱을 실행합니다.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
}

export default GuideContainer;
