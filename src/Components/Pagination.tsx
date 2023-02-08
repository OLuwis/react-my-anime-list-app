import { Link } from "react-router-dom";

const Pagination = (props: { currentPage: number, lastPage: number}) => {
    return ( 
        <div className="flex mx-auto rounded-md overflow-hidden sm:col-span-5 col-span-2 shadow-md mt-3" id="pagination">
                <Link to={window.location.pathname + window.location.search.replace(/[0-9]+/g, "1")} className={`w-8 sm:w-10 aspect-square bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:dark:bg-blue-600 hover:bg-blue-500 sm:text-base text-sm ${props.currentPage === 1 && `dark:bg-blue-600 bg-blue-500`}`}>1</Link>

                {props.currentPage > 4 && <div className="w-8 sm:w-10 aspect-square bg-slate-100 dark:bg-slate-800 flex items-center justify-center sm:text-base text-sm">...</div>}

                {props.currentPage > 3 && <Link to={window.location.pathname + window.location.search.replace(/[0-9]+/g, (props.currentPage - 2).toString())} className={`w-8 sm:w-10 aspect-square bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:dark:bg-blue-600 hover:bg-blue-500 sm:text-base text-sm ${props.currentPage === props.currentPage - 2 && `dark:bg-blue-600 bg-blue-500`}`}>{props.currentPage - 2}</Link>}

                {props.currentPage > 2 && <Link to={window.location.pathname + window.location.search.replace(/[0-9]+/g, (props.currentPage - 1).toString())} className={`w-8 sm:w-10 aspect-square bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:dark:bg-blue-600 hover:bg-blue-500 sm:text-base text-sm ${props.currentPage === props.currentPage - 1 && `dark:bg-blue-600 bg-blue-500`}`}>{props.currentPage - 1}</Link>}

                {(props.currentPage !== 1 && props.currentPage !== props.lastPage) && <Link to={window.location.pathname + window.location.search.replace(/[0-9]+/g, props.currentPage.toString())} className={`w-8 sm:w-10 aspect-square bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:dark:bg-blue-600 hover:bg-blue-500 sm:text-base text-sm ${props.currentPage === props.currentPage && `dark:bg-blue-600 bg-blue-500`}`}>{props.currentPage}</Link>}

                {(props.currentPage < props.lastPage - 1) && <Link to={window.location.pathname + window.location.search.replace(/[0-9]+/g, (props.currentPage + 1).toString())} className={`w-8 sm:w-10 aspect-square bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:dark:bg-blue-600 hover:bg-blue-500 sm:text-base text-sm ${props.currentPage === props.currentPage + 1 && `dark:bg-blue-600 bg-blue-500`}`}>{props.currentPage + 1}</Link>}

                {(props.currentPage < props.lastPage - 2) && <Link to={window.location.pathname + window.location.search.replace(/[0-9]+/g, (props.currentPage + 2).toString())} className={`w-8 sm:w-10 aspect-square bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:dark:bg-blue-600 hover:bg-blue-500 sm:text-base text-sm ${props.currentPage === props.currentPage + 2 && `dark:bg-blue-600 bg-blue-500`}`}>{props.currentPage + 2}</Link>}

                {(props.currentPage < props.lastPage - 3) && <div className="w-8 sm:w-10 aspect-square bg-slate-100 dark:bg-slate-800 flex items-center justify-center sm:text-base text-sm">...</div>}

                <Link to={window.location.pathname + window.location.search.replace(/[0-9]+/g, props.lastPage.toString())} className={`w-8 sm:w-10 aspect-square bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:dark:bg-blue-600 hover:bg-blue-500 sm:text-base text-sm ${props.currentPage === props.lastPage && `dark:bg-blue-600 bg-blue-500`}`}>{props.lastPage}</Link>
            </div>
    )
}
 
export default Pagination;