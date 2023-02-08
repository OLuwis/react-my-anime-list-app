const FullPageSkeleton = () => {
    return (
    <div className="w-full p-4 max-w-screen-lg mx-auto dark:bg-slate-800 rounded-md shadow-md bg-slate-50 dark:text-white grid grid-cols-4 gap-y-1.5 gap-x-4">
        <h1 className='mx-auto col-span-full text-center text-2xl font-bold animate-pulse w-32 dark:bg-slate-700 bg-slate-100 rounded-md shadow-md relative h-6'><span className="ml-1 p-0.5 px-2 dark:bg-slate-700 bg-slate-100 rounded-md text-xl shadow-md w-8 h-6 block absolute -right-10"></span></h1>
        <h1 className='col-span-full text-center font-bold text-lg mb-1 h-6 animate-pulse w-28 dark:bg-slate-700 bg-slate-100 shadow-md rounded-md mx-auto mt-2'></h1>
        <div className="col-span-full w-full flex items-center justify-center mb-2.5 gap-2 mt-1" id="tags">
            <span className="rounded-full shadow-md dark:bg-slate-700 bg-slate-100 animate-pulse h-5 w-12"></span>
        </div>
        <div className="sm:col-span-1 col-span-full flex flex-col justify-start items-center">
            <div className="rounded-md shadow-md border-none w-full dark:bg-slate-700 bg-slate-100 animate-pulse" style={{aspectRatio: 75/106}}></div>
            <div className={`mt-1.5 text-start text-lg p-1.5 w-full dark:bg-slate-700 bg-slate-100 animate-pulse h-24 rounded-md shadow-md`}>
                <h1 className="dark:bg-slate-600 bg-slate-200 w-28 h-5 animate-pulse shadow-md rounded-md"></h1>
                <div className="flex flex-col p-1.5 pl-5 text-base gap-1.5">
                    <h1 className="dark:bg-slate-600 bg-slate-200 w-28 h-5 animate-pulse shadow-md rounded-md"></h1>
                    <h1 className="dark:bg-slate-600 bg-slate-200 w-28 h-5 animate-pulse shadow-md rounded-md"></h1>
                </div>
            </div>
        </div>
        <div className='col-span-full sm:col-span-3 dark:bg-slate-700 bg-slate-100 shadow-md rounded-md p-4'>
            <div className='dark:bg-slate-600 bg-slate-200 shadow-md rounded-md flex flex-row gap-1.5 whitespace-nowrap overflow-auto'>
                <span className="-skew-x-12 dark:bg-slate-600 bg-slate-200 p-2 px-4 flex flex-row gap-3">
                    <span className="skew-x-12 block dark:text-gray-300 text-gray-600 h-5 w-12 animate-pulse dark:bg-slate-500 shadow-md rounded-md bg-slate-300"></span> <span className="skew-x-12 block dark:text-gray-300 text-gray-600 h-5 w-12 animate-pulse dark:bg-slate-500 shadow-md rounded-md bg-slate-300"></span>
                </span>
                <span className="-skew-x-12 dark:bg-slate-500 bg-slate-300 p-2 px-4 flex flex-row gap-3">
                    <span className="skew-x-12 block dark:text-gray-300 text-gray-600 h-5 w-12 animate-pulse dark:bg-slate-600 shadow-md rounded-md bg-slate-200"></span> <span className="skew-x-12 block dark:text-gray-300 text-gray-600 h-5 w-12 animate-pulse dark:bg-slate-600 shadow-md rounded-md bg-slate-200"></span>
                </span>
                <span className="-skew-x-12 dark:bg-slate-600 bg-slate-200 p-2 px-4 flex flex-row gap-3">
                    <span className="skew-x-12 block dark:text-gray-300 text-gray-600 h-5 w-12 animate-pulse dark:bg-slate-500 shadow-md rounded-md bg-slate-300"></span> <span className="skew-x-12 block dark:text-gray-300 text-gray-600 h-5 w-12 animate-pulse dark:bg-slate-500 shadow-md rounded-md bg-slate-300"></span>
                </span>
                <span className="-skew-x-12 dark:bg-slate-500 bg-slate-300 p-2 px-4 flex flex-row gap-3">
                    <span className="skew-x-12 block dark:text-gray-300 text-gray-600 h-5 w-12 animate-pulse dark:bg-slate-600 shadow-md rounded-md bg-slate-200"></span> <span className="skew-x-12 block dark:text-gray-300 text-gray-600 h-5 w-12 animate-pulse dark:bg-slate-600 shadow-md rounded-md bg-slate-200"></span>
                </span>
                <span className="-skew-x-12 dark:bg-slate-600 bg-slate-200 p-2 px-4 flex flex-row gap-3">
                    <span className="skew-x-12 block dark:text-gray-300 text-gray-600 h-5 w-12 animate-pulse dark:bg-slate-500 shadow-md rounded-md bg-slate-300"></span> <span className="skew-x-12 block dark:text-gray-300 text-gray-600 h-5 w-12 animate-pulse dark:bg-slate-500 shadow-md rounded-md bg-slate-300"></span>
                </span>
                <span className="-skew-x-12 dark:bg-slate-500 bg-slate-300 p-2 px-4 flex flex-row gap-3">
                    <span className="skew-x-12 block dark:text-gray-300 text-gray-600 h-5 w-12 animate-pulse dark:bg-slate-600 shadow-md rounded-md bg-slate-200"></span> <span className="skew-x-12 block dark:text-gray-300 text-gray-600 h-5 w-12 animate-pulse dark:bg-slate-600 shadow-md rounded-md bg-slate-200"></span>
                </span>
                <span className="-skew-x-12 dark:bg-slate-600 bg-slate-200 p-2 px-4 flex flex-row gap-3">
                    <span className="skew-x-12 block dark:text-gray-300 text-gray-600 h-5 w-12 animate-pulse dark:bg-slate-500 shadow-md rounded-md bg-slate-300"></span> <span className="skew-x-12 block dark:text-gray-300 text-gray-600 h-5 w-12 animate-pulse dark:bg-slate-500 shadow-md rounded-md bg-slate-300"></span>
                </span>
            </div>
            <div className={`flex flex-col mt-2 gap-2 items-center justify-center`}>
                <h1 className="text-xl w-36 h-6 mt-0.5 dark:bg-slate-600 animate-pulse rounded-md shadow-md bg-slate-200"></h1>
                <iframe src="" className="aspect-video sm:w-2/4 w-full rounded-lg shadow-md dark:bg-slate-600 animate-pulse bg-slate-200"></iframe>
            </div>
            <div className="flex flex-col mt-2 gap-2 items-center justify-center">
                <h1 className="text-xl w-36 h-6 mt-0.5 dark:bg-slate-600 animate-pulse rounded-md shadow-md bg-slate-200"></h1>
                <p className="dark:bg-slate-600 bg-slate-200 rounded-md p-4 w-full h-20 animate-pulse"></p>
            </div>
        </div>
    </div>
    );
}
 
export default FullPageSkeleton;