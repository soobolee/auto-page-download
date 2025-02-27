import icon from "../../assets/icon.png";

function ImageContainer() {
  return (
    <div className="w-[60%] h-full flex justify-center items-center">
      <img src={icon} alt="logo" className="w-[80%]" />
    </div>
  );
}

export default ImageContainer;
