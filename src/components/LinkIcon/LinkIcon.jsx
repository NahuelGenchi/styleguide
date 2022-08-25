const LinkIcon = (props) => {
  return(
    <a href={props.link} target="_blank">
      <ion-icon name={props.iconName}></ion-icon>
    </a>
  );
};

export default LinkIcon;