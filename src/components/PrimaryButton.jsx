

function PrimaryButton(props){
    return(
        <button onClick={props.onClick} className={`text-shadow text-[16px] pt-0.5 pb-0.5 pl-3 pr-3 bg-[#04969b] rounded-[8px] cursor-pointer active:translate-y-1 transition-all duration-200`}>{props.text}</button>
    );
}
export default PrimaryButton;