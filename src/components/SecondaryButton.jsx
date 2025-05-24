import { useNavigate } from "react-router-dom";


function SecondaryButton(props){

    const navigate = useNavigate();
      const handleClick=()=>{
            if(props.text==="Sign Up"){
            navigate("/signup");
      }
        }
    return(
        <button onClick={handleClick} className={`text-[16px] pt-0.5 pb-0.5 pl-3 pr-3 bg-[#ffffff27] rounded-[8px] cursor-pointer   active:translate-y-1 transition-all duration-200`}>{props.text}</button>
    );
}
export default SecondaryButton;