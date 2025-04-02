import icon from "../../assets/icon.webp";

function ImageContainer() {
  return (
    <div className="w-[60%] md:visible invisible md:h-0 h-50 flex justify-center items-center">
      <img src={icon} alt="logo" className="md:w-[80%] w-[40%]" />
    </div>
  );
}

export default ImageContainer;
