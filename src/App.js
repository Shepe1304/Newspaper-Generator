import { useState } from "react";
// import Choices from "./components/layouts/Choices";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Main from "./components/pages/Main";

function App() {
  const [showChoices, setShowChoices] = useState(false);

  // const HandleExitClicked = () => {
  //   setShowChoices(!showChoices)
  // };

  return (
    <div className="App" style={{ position: "relative" }}>
      <Header />
      {/* {showChoices ? <Choices HandleExitClicked={HandleExitClicked} /> : null} */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;
