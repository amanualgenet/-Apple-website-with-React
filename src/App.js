import React from "react";

import Header from "./component/Header/Header";
import Alert from "./component/Alert/Alert";
import FirstSection from "./component/FirstSection/FirstSection";
import SecondSection from "./component/SecondSection/SecondSection";
import ThirdSection from "./component/ThirdSection/ThirdSection";
import FourthSection from "./component/FourthSection/FourthSection";
import FifthSection from "./component/FifthSection/FifthSection";
import SixthSection from "./component/SixthSection/SixthSection";
import Footer from "./component/Footer/Footer";
import "./component/Footer/Toggle"; //importing toggle function for footer section.

function App() {
  return (
    <div>
      <Header />
      <Alert />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  );
}

export default App;
