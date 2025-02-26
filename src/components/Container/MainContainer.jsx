import Footer from "../Footer/Footer";
import MainContent from "../Content/MainContent";
import Header from "../Header/Header";
import ParticleCanvas from "../Canvas/ParticleCanvas";

function MainContainer() {
  return (
    <div className="w-screen h-screen bg-main text-white">
      <Header />
      <MainContent />
      <Footer />
      <ParticleCanvas />
    </div>
  );
}

export default MainContainer;
