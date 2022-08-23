import "./Section.scss";

const Section = (props) => {
  return(
    <section className={`section section-${props.className}`}>
      {props.children}
    </section>
  );
};

export default Section;