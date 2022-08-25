const Font = (props) => {
  return (
    <div className="f-example">
      <div className="fe-weight">{props.styleText}</div>
      <p style={{ fontWeight: props.fontWeight, fontFamily: props.fontName, fontStyle: props.fontStyle }}>The quick brown fox jumps over the lazy dog.</p>
    </div>
  );
};

export default Font;