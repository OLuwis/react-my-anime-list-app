import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { Form } from "react-router-dom"

const SearchBar = (props: {className: string, category: string, changeCategory: React.Dispatch<React.SetStateAction<string>>, inputValue: string, setInput: React.Dispatch<React.SetStateAction<string>>, setMenu: () => void}) => {
    const [ reload, setReload ] = useState(true)
    const [ openSelect, setOpenSelect ] = useState(false)

    return (
        <Form className={`bg-slate-100 flex items-center rounded-md shadow-md w-full dark:bg-slate-800 dark:text-white p-0.5 px-1 ${props.className}`} id="searchbar" method='get' action={`/${props.category}`} onSubmit={props.setMenu}>
            <SearchIcon className="p-1.5 pl-2" fontSize="large" />
            <div className='capitalize flex items-center cursor-pointer relative justify-center pl-1' id='select' onClick={() => setOpenSelect(!openSelect)}>
                {props.category} <ArrowDropDownIcon className="-translate-y-0.5 p-1 -mx-1" fontSize="large" />
                <div className={`absolute top-full left-0 z-10 bg-white  rounded-b-lg overflow-hidden ${openSelect ? "block" : "hidden"} dark:bg-slate-800`}>
                    <div className="capitalize bg-slate-100 px-3.5 py-2
                    hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700" onClick={(e) => {
                        props.changeCategory((e.target as HTMLElement).innerText.toLowerCase())
                        return setOpenSelect(false)
                    }}>anime</div>
                    <div className="capitalize bg-slate-100 px-3.5 py-2
                    hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700" onClick={(e) => {
                        props.changeCategory((e.target as HTMLElement).innerText.toLowerCase())
                        return setOpenSelect(false)
                    }}>manga</div>
                </div>
            </div>
            <input type="search" name="q" id="search" className='bg-transparent outline-none w-full' autoComplete='off' value={props.inputValue} onChange={(e) => props.setInput(e.target.value)} placeholder="Search..."/>
            <input type="hidden" name="order_by" value="members" />
            <input type="hidden" name="sort" value="desc" />
            <input type="hidden" name="sfw" value="true" />
            <input type="hidden" name="page" value={1} />
        </Form>
    );
}
 
export default SearchBar;