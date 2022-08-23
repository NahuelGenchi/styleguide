const Color = (props) => {
  console.log(props);
  return(
    <div className="ccc-item">
      <div className="ccci-color" style={{ backgroundColor: props.colorCode }}></div>
      <div className="ccci-color-grade">{props.colorNumber}</div>
      <div className="ccci-color-code">{props.colorCode}</div>
    </div>
  );
};

export default Color;