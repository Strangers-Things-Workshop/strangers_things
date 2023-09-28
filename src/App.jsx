import "../src/styles/Homepage.css";
import "../src/styles/Navbar.css";
import "../src/styles/Footer.css";
import "../src/styles/App.css";
import "../src/styles/Form.css";
import "bootstrap/dist/css/bootstrap.css";
import "../src/styles/Media-query.css";
import Header from "./assets/Header";
import PagesContainer from "./components/PagesContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className="content-wrapper">
        <PagesContainer />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
