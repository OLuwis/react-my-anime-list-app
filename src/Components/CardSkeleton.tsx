const CardSkeleton = () => {
    return (
        <div className="sm:w-36 w-28">
            <div className='rounded-md shadow-md animate-pulse dark:bg-slate-800 bg-slate-300' style={{aspectRatio: 75/106}}>
            </div>
            <h1 className="mt-3 line-clamp-2 animate-pulse dark:bg-slate-800 rounded-md h-5 bg-slate-300"></h1>
        </div>
    );
}
 
export default CardSkeleton;