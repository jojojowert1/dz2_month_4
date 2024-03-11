import Title from "./componets/Title";
import About from "./componets/About";
import React from "react";



function App() {

    const aboutData ={
        title: "value",
        body: "value",
        link:"value"

    }

  return (
    <div className="App">
        <Title title={'title'} subtitle={'subtitle'}/>
        <About data={aboutData}/>
    </div>
  );
}

export default App;
