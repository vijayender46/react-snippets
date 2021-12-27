import React from "react";
import { ClassComponent } from "./components/ClassComponent";
import { ClickCounter } from "./components/ClickCounter";
import { FetchData } from "./components/FetchData";

const App = () => {
  const Page_Title = 'This is page title';
  return (
    <div className="App">
      <section className="text-center">
        <h1>{Page_Title}</h1>
      </section>
      <section><ClassComponent /></section>
      <section><FetchData /></section>
      <section><ClickCounter /></section>
    </div>
  );
}
 
export default App;