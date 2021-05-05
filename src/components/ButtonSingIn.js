
const ButtonSingIn = ({ 
    onClick = null, 
    children = null 
}) => 
(   
    <div className="container_center">
        <div className="container_log_in">
            <button className="log_in" onClick={onClick}> {children} </button>
        </div>
    </div>
);
  
  export default ButtonSingIn;