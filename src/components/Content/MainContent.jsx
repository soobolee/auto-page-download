import ContentContainer from "../Container/ContentContainer";
import ImageContainer from "../Container/ImageContainer";

function MainContent() {
  return (
    <main className="w-full h-[90%] flex md:flex-row flex-col justify-center items-center">
      <ImageContainer />
      <ContentContainer />
    </main>
  );
}

export default MainContent;
