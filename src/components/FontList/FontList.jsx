import "./FontList.scss";

const FontList = (props) => {
  console.log(props);
  return(
    <div className="fontlist-container">
      <h3>{props.fontName}</h3>
      <div className="f-example">
        <div className="fe-weight">Light 300</div>
        <p style={{fontWeight: 300, fontFamily: props.fontName}}>The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div className="f-example">
        <div className="fe-weight">Regular 400</div>
        <p style={{fontWeight: 400, fontFamily: props.fontName}}>The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div className="f-example">
        <div className="fe-weight">Refular 400 Italic</div>
        <p style={{fontWeight: 400, fontFamily: props.fontName, fontStyle: "italic"}}>The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div className="f-example">
        <div className="fe-weight">Bold 700</div>
        <p style={{fontWeight: 700, fontFamily: props.fontName}}>The quick brown fox jumps over the lazy dog.</p>
      </div>
      <div className="f-example">
        <div className="fe-weight">Black 900</div>
        <p style={{fontWeight: 900, fontFamily: props.fontName}}>The quick brown fox jumps over the lazy dog.</p>
      </div>
    </div>
  );
};

export default FontList;