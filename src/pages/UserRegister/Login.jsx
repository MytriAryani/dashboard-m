import Form from "../../components/Form";
import {Link} from "react-router-dom";
function Login(){
    return(
    <div className='min-h-[95dvh] flex flex-col space-y-3 rounded justify-center items-center bg-gradient-to-r from-[#090d19] via-[#1944b8] to-[#090d19]' >
      <Form heading={"Login"} subheading={"Welcome back!"} confirmpwd={false}/>
      <p className="text-white selection:bg-blue-950">Don't have an account?<Link to="/signup" className="pl-1 underline font-medium cursor-pointer hover:text-blue-950">Sign up</Link></p>

      </div>
      );
}

export default Login;