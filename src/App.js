import "./App.css";
import PageContent from "./Components/PageContent";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Sidemenu from "./Components/sidemenu/Sidemenu";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="SideMenuAndPageContent">
        <Sidemenu />
        <PageContent />
      </div>
      <div className="AppFooter">
      <Footer/>
      </div>

    </div>
  );
}
export default App;
