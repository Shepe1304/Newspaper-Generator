import Choices from "./components/layouts/Choices";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Main from "./components/pages/Main";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Header />
      <Choices />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
