import ContentContainer from "../Container/ContentContainer";
import ImageContainer from "../Container/ImageContainer";

function MainContent() {
  return (
    <main className="w-full h-[90%] flex justify-center items-center">
      <ImageContainer />
      <ContentContainer />
    </main>
  );
}

export default MainContent;
