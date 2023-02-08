import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import FullPageSkeleton from "../Components/FullPageSkeleton";
import useFetch from "../Hooks/useFetch";

const FullPage = () => {
    const { data, loading } = useFetch(window.location.pathname)

    return (
        <main>
            {loading && <FullPageSkeleton />}
            {(Object.keys(data).length > 0 && !loading) && <div className="w-full p-4 max-w-screen-lg mx-auto dark:bg-slate-800 rounded-md shadow-md bg-slate-50 dark:text-white grid grid-cols-4 gap-y-1.5 gap-x-4">
                <h1 className='w-full col-span-full text-center text-2xl font-bold'>{data.title} <span className="ml-1 p-0.5 px-2 dark:bg-slate-700 bg-slate-100 rounded-md text-xl shadow-md">#{data.popularity}</span></h1>
                <h1 className='w-full col-span-full text-center font-bold text-lg mb-1'>{window.location.pathname.search("anime") !== -1 ? data.studios.map((studio: { name: string; }) => studio.name).join(" & ") : data.authors.map((author: { name: string }) => author.name).join(" & ")}</h1>
                <div className="col-span-full w-full flex items-center justify-center mb-2.5 gap-2" id="tags">
                    {data.genres.map((genre: { name: string; }) => <span className="bg-blue-600 text-white rounded-full p-0.5 px-2" key={genre.name}>{genre.name}</span>)}
                    {data.themes.map((theme: { name: string; }) => <span className="bg-blue-600 text-white rounded-full p-0.5 px-2" key={theme.name}>{theme.name}</span>)}
                </div>
                <div className="sm:col-span-1 col-span-full flex flex-col justify-start items-center">
                    <img src={data.images.webp.image_url} alt="Cover" className="rounded-md shadow-md" style={{aspectRatio: 75/106}} loading="lazy"/>
                    <div className={`mt-1.5 text-start text-lg pl-1.5 ${(window.location.pathname.search("anime") === -1 || data.streaming.length === 0) && "hidden"}`}>
                        <h1>External Links:</h1>
                        <div className="flex flex-col pl-1.5 text-base">
                            {window.location.pathname.search("anime") !== -1 && data.streaming.map((stream: { name:string, url:string }) => <a href={stream.url} target="_blank" rel="noopener noreferrer" className="w-fit -mb-1" key={stream.name}>{stream.name} <OpenInNewIcon fontSize="large" className="p-2 -translate-y-0.5 -mx-2"/></a>)}
                        </div>
                    </div>
                </div>
                <div className='col-span-full sm:col-span-3 dark:bg-slate-700 bg-slate-100 shadow-md rounded-md p-4'>
                    <div className='dark:bg-slate-600 bg-slate-200 shadow-md rounded-md flex flex-row gap-1.5 whitespace-nowrap overflow-auto'>
                        <span className="-skew-x-12 dark:bg-slate-600 bg-slate-200 p-2 px-4">
                            <span className="skew-x-12 block dark:text-gray-300 text-gray-600">Members: <span className="dark:text-white text-black">{Intl.NumberFormat("en", { notation: "compact"}).format(data.members)}</span></span>
                        </span>
                        <span className="-skew-x-12 dark:bg-slate-500 bg-slate-300 p-2 px-4">
                            <span className="skew-x-12 block dark:text-gray-300 text-gray-600">Rating: <span className="dark:text-white text-black">{data.score} ({Intl.NumberFormat("en", { notation: "compact"}).format(data.scored_by)})</span></span>
                        </span>
                        <span className="-skew-x-12 dark:bg-slate-600 bg-slate-200 p-2 px-4">
                            <span className="skew-x-12 block dark:text-gray-300 text-gray-600">{window.location.pathname.search("anime") !== -1 ? "Aired:" : "Chapters:"} <span className="dark:text-white text-black capitalize">{data.season} {window.location.pathname.search("anime") !== -1 && data.aired.prop.from.year} {data.chapters !== null ? data.chapters : data.status}</span></span>
                        </span>
                        <span className="-skew-x-12 dark:bg-slate-500 bg-slate-300 p-2 px-4">
                            <span className="skew-x-12 block dark:text-gray-300 text-gray-600">Type: <span className="dark:text-white text-black capitalize">{data.type}</span></span>
                        </span>
                        <span className="-skew-x-12 dark:bg-slate-600 bg-slate-200 p-2 px-4">
                            <span className="skew-x-12 block dark:text-gray-300 text-gray-600">Status: <span className="dark:text-white text-black capitalize">{data.status}</span></span>
                        </span>
                        <span className={`-skew-x-12 dark:bg-slate-500 bg-slate-300 p-2 px-4 ${window.location.pathname.search("anime") === -1 && "hidden"}`}>
                            <span className="skew-x-12 block dark:text-gray-300 text-gray-600">Episodes: <span className="dark:text-white text-black">{data.episodes}</span></span>
                        </span>
                        <span className={`-skew-x-12 dark:bg-slate-600 bg-slate-200 p-2 px-4 ${window.location.pathname.search("anime") === -1 && "hidden"}`}>
                            <span className="skew-x-12 block dark:text-gray-300 text-gray-600">Source: <span className="dark:text-white text-black capitalize">{data.source}</span></span>
                        </span>
                    </div>
                    <div className={`flex flex-col mt-2 gap-2 items-center justify-center ${(window.location.pathname.search("anime") === -1 || !data.trailer.embed_url) && "hidden"}`}>
                        <h1 className="text-xl">Trailer</h1>
                        <iframe src={(window.location.pathname.search("anime") !== -1 && data.trailer.embed_url) && data.trailer.embed_url.substring(0, data.trailer.embed_url.length - 11)} className="aspect-video sm:w-2/4 w-full rounded-lg shadow-md"></iframe>
                    </div>
                    <div className="flex flex-col mt-2 gap-2 items-center justify-center">
                        <h1 className="text-xl">Synopsis</h1>
                        <p className="dark:bg-slate-600 bg-slate-200 rounded-md p-4">{data.synopsis}</p>
                    </div>
                </div>
            </div>}
        </main>
    );
}
 
export default FullPage;