import React from "react";
import { Section, ColorList } from "../index";

import { colorsData } from "../../mock/data";

import "./Main.scss";

const Main = () => {
  return(
    <main className="main">
      <Section className="colors">
        <header className="c-header">
          <h2>Customizing Colors</h2>
          <p>Customizing the default color palette for your project.</p>
        </header>
        <main className="c-data">
          {colorsData.map((colorElement, index) => {
            return(
              <ColorList color={colorElement.color} colors={colorElement.colors} key={index}/>
            );
          })}
        </main>
      </Section>
    </main>
  );
};

export default Main;