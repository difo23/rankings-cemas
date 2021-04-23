
const Login = ({ 
    onClick = null, 
    children = null 
}) => 
(
    <button onClick={onClick}> {children} </button>
  );
  
  export default Login;