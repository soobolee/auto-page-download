function ContentContainer() {
  return (
    <div className="w-[50%] h-full flex justify-center items-center z-20 overflow-y-scroll">
      <div className="w-[70%] h-[50%] p-18 bg-subsub text-center rounded-xl shadow-lg shadow-blue-500/50">
        <div className="text-7xl mb-10 text-shadow">Auto Page</div>
        <h1 className="mb-10 text-3xl">Download App</h1>
        <p className="text-xl">Click the button! start your download.</p>
        <button className="w-40 h-15 m-10 bg-blue text-xl rounded-xl hover:bg-[#21a1f1] hover:scale-125 active:scale-90 transition duration-300 animate-bounce cursor-pointer">
          Download
        </button>
      </div>
    </div>
  );
}

export default ContentContainer;
