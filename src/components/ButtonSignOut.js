
const ButtonSingOut = ({ 
    onClick = null, 
    children = null 
}) => 
(
    <button className="log_out" onClick={onClick}> {children} </button>
  );
  
export default ButtonSingOut;