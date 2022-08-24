import React from "react";
import { Section, ColorList, FontList } from "../index";

import { colorsData, fontsData } from "../../mock/data";

import "./Main.scss";

const Main = () => {
  return(
    <main className="main">
      <Section className="colors">
        <header className="c-header">
          <h2>Colors</h2>
          <p>Default color palette for your project.</p>
        </header>
        <main className="c-data">
          {colorsData.map((colorElement, index) => {
            return(
              <ColorList color={colorElement.color} colors={colorElement.colors} key={index}/>
            );
          })}
        </main>
      </Section>
      <Section className="fonts">
        <header>
          <h2>Fonts</h2>
          <p>Font families for your project.</p>
        </header>
        <main className="f-data">
          {fontsData.map((element, index) => {
            return(
              <FontList fontName={element} key={index}/>
            );
          })}
        </main>
      </Section>
    </main>
  );
};

export default Main;