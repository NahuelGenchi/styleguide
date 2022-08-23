import "./ColorList.scss";

const ColorList = (props) => {
  console.log(props);
  return(
    <div className="colorlist-container">
      <h3>{props.color}</h3>
      <div className="cc-colors">
        
      </div>
    </div>
  );
};

export default ColorList;