import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Select = (props: { value: string, children: JSX.Element[], className: (string|boolean), handleClick: React.MouseEventHandler<HTMLDivElement>}) => {
    return (
        <div className="dark:bg-slate-700 bg-slate-200 relative rounded-t-md" id="select">
            <div className="hover:dark:bg-slate-600 hover:bg-slate-300 cursor-pointer capitalize h-10 flex items-center justify-center rounded-t-md" id="display" onClick={props.handleClick}>
                {props.value} <ArrowDropDownIcon className="-translate-y-0.5 -mx-0.5"/>
            </div>
            <div className={`absolute top-full w-full dark:bg-slate-700 bg-slate-300 rounded-b-md overflow-hidden ${props.className} z-20`} id="options">
                {props.children}
            </div>
        </div>
    );
}
 
export default Select;