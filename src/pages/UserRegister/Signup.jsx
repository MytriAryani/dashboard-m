import Form from "../../components/Form";
import {Link} from "react-router-dom";

function Signup(){
    return(
      
        <div className='h-145 flex flex-col space-y-3  rounded justify-center items-center bg-gradient-to-r from-[#090d19] via-[#1944b8] to-[#090d19]' >
      <Form heading={"Sign Up"} subheading={"Join us!"} confirmpwd={true}/>
      <p className="text-white selection:bg-blue-950">Already have an account?<Link to="/login" className="pl-1 underline font-medium cursor-pointer hover:text-blue-950">Login</Link></p>

      </div>
    );
}

export default Signup;