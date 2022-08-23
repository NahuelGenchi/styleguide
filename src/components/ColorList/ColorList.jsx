import { Color } from "../index";

import "./ColorList.scss";

const ColorList = (props) => {
  return(
    <div className="colorlist-container">
      <h3>{props.color}</h3>
      <div className="cc-colors">
        {props.colors.map((colorItem, index) => {
          return(
            <Color colorNumber={colorItem[0]} colorCode={colorItem[1]} key={index}/>
          );
        })}
      </div>
    </div>
  );
};

export default ColorList;