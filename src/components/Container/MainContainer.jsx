import Footer from "../Footer/Footer";
import MainContent from "../Content/MainContent";
import Header from "../Header/Header";

function MainContainer() {
  return (
    <div className="w-full h-full text-white">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default MainContainer;
