
const SingOut = ({ 
    onClick = null, 
    children = null 
}) => 
(
    <button onClick={onClick}> {children} </button>
  );
  
  export default SingOut;