const ButtonSingIn = ({ onClick = null, children = null }) => (
  <div className="container_center">
    <button className="log_in" onClick={onClick}>
      {children}
    </button>
  </div>
);

export default ButtonSingIn;
