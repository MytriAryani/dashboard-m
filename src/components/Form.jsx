import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
function Form(props){
    const navigate = useNavigate();
    const [email, setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmpwd,setConfirmPwd]=useState("");
    const [visible, setVisible]=useState(false);
    const [confirmVisible, setConfirmVisible]=useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        setError("");
        setSuccess("");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
            }

        if (!email || !password || (props.confirmpwd && !confirmpwd)) {
            setError("All fields are required.");
            return;
        }
        
        if(props.confirmpwd){
        const existingUser = JSON.parse(localStorage.getItem("user"));

        if (existingUser && existingUser.email === email) {
            setError("An account with this email already exists.");
            return;
        }
        if(password !== confirmpwd){
            setError("passwords do not match");
            return;
        }
        localStorage.setItem("user",JSON.stringify({email,password}));
        
       
        console.log(`User Email: ${email}, password: ${password}`);
        setEmail("");
        setPassword("");
        setConfirmPwd("");
        navigate("/dashboard");
    }else{
        const savedUser=JSON.parse(localStorage.getItem("user"));
        if(!savedUser){
            setError("No user found");
            return;
        }
        if(savedUser.email!==email || savedUser.password!==password){
            setError("Invalid credentials");
            return;
        }else{
            setSuccess("Login successful");
            console.log(`User Email: ${email},password: ${password}`);
            navigate("/dashboard");
        }
    }
    };

    return(
        <div className="w-75 sm:w-120 h-100 p-8 border-1 border-white rounded-xl bg-white/10 backdrop-blur-sm flex flex-col justify-center items-start space-y-3 text-white selection:bg-blue-950">
            <h2 className="text-5xl font-medium">{props.heading}</h2>
            <p className="text-xl">{props.subheading}</p>
            {error && <p className="text-white-400 font-medium">{error}</p>}
            {success && <p className="text-white-400 font-medium">{success}</p>}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3 ">
                <input type="text" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email" 
                 
                className="w-55 sm:w-100 border-b-1 h-9 outline-0 caret-blue-950"/>
                <div className="flex flex-row w-55 sm:w-100 border-b-1">
                <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type={visible? "text" : "password"} 
                placeholder="Password" 
                 
                className="w-55 sm:w-100  h-9 outline-0 caret-blue-950"/>
                <div className="cursor-pointer"  role="button" tabIndex={0} onClick={()=>setVisible(!visible)}>
                    {visible? <EyeOutlined/> : <EyeInvisibleOutlined/>}
                </div>
                </div>
                {props.confirmpwd && 
                    <div className="flex flex-row w-55 sm:w-100 border-b-1">
                <input 
                value={confirmpwd}
                onChange={(e)=>setConfirmPwd(e.target.value)}
                type={confirmVisible? "text" : "password"}
                placeholder="Confirm Password" 
                 
                className="w-55 sm:w-100  h-9 outline-0 caret-blue-950"/>
                <div className="cursor-pointer" role="button" tabIndex={0} onClick={()=>setConfirmVisible(!confirmVisible)}>
                    {confirmVisible? <EyeOutlined/> : <EyeInvisibleOutlined/>}
                </div>
                </div>
                }
                <button type="submit" className="border-1 w-21 h-9 rounded-xl self-center cursor-pointer hover:bg-white hover:text-blue-800 hover:border-0 ">{props.heading}</button>
            </form>
            {/* <div className="flex space-x-2 justify-center items-center w-100"> 
                    <hr className="w-35 opacity-25" />
                    <p className="opacity-75">or</p>
                    <hr className="w-35 opacity-25"/>
                 </div>
                 <p className="flex justify-center w-100 ">{props.heading} with <a className="pl-1 underline cursor-pointer hover:text-purple-900 font-medium">Google</a></p> */}
        </div>
    );

}

export default Form;