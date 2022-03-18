import React, { Suspense } from "react";
import Loader from "./Loader";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <Suspense fallback={<Loader />}>
       <Header/>
         <Main />
        <Footer/>
    </Suspense>
  );
}
export default App;