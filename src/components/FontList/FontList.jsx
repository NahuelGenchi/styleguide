import { Font } from "../index";

import "./FontList.scss";

const FontList = (props) => {
  console.log(props);
  return(
    <div className="fontlist-container">
      <h3>{props.fontName}</h3>
      <Font fontName={props.fontName} styleText="Light 300" fontWeight={300}/>
      <Font fontName={props.fontName} styleText="Regular 400" fontWeight={400}/>
      <Font fontName={props.fontName} styleText="Regular 400 Italic" fontWeight={400} fontStyle="italic"/>
      <Font fontName={props.fontName} styleText="Bold 700" fontWeight={700}/>
      <Font fontName={props.fontName} styleText="Black 900" fontWeight={900}/>
    </div>
  );
};

export default FontList;