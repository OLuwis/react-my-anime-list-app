import SearchBar from "../Components/SearchBar";
import Select from "../Components/Select";
import TuneIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react"
import { Link, useOutletContext, useSearchParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import CardSkeleton from "../Components/CardSkeleton";
import Card from "../Components/Card";
import Pagination from "../Components/Pagination";

const categories = ["type", "status", "sort"]
const anime = [{values: ["none", "tv", "movie", "ova", "special", "ona"]}, {values: ["none", "airing", "complete", "upcoming"]}, { values: ["favorites", "members"]}]
const manga = [{values: ["none", "manga", "novel", "lightnovel", "oneshot", "manhwa", "manhua"]}, {values: ["none", "publishing", "complete", "hiatus", "discontinued", "upcoming"]}, {values: ["favorites", "members"]}]

const SearchPage = () => {
    const [ reload, setReload ] = useSearchParams()
    const { data, loading, pagination } = useFetch(window.location.pathname + window.location.search)
    const [ filters, setFilters ] = useState([{ filter: "type", value: "none"}, { filter: "status", value: "none"}, { filter: "sort", value: "members"}])
    const [ filter, setFilter ] = useState(3)
    const [ container, setContainer ] = useState(false)
    const category: [string, React.Dispatch<React.SetStateAction<string>>, string, React.Dispatch<React.SetStateAction<string>>] = useOutletContext()
    
    return (
        <main className="w-full p-5 max-w-screen-lg mx-auto h-auto gap-y-3 gap-x-5 sm:gap-x-0 dark:text-white py-1.5">
            <section className="w-full max-w-screen-md mx-auto grid sm:grid-cols-4 mt-2 sm:gap-5 grid-cols-5 gap-2 px-4" id="filters">
                <SearchBar className="sm:col-span-3 col-span-4" category={category[0]} changeCategory={category[1]} inputValue={category[2]} setInput={category[3]} changeMenu="" />
                <div className="p-1.5 rounded-md cursor-pointer bg-slate-100 dark:bg-slate-800 dark:fill-white hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center col-span-1 gap-1 shadow-md" onClick={() => setContainer(!container)} >
                    <TuneIcon className="sm:p-0 p-0.5" />{window.matchMedia("(min-width: 640px)").matches && "Filters"}
                </div>
                <div className={`dark:bg-slate-800 sm:col-span-4 col-span-5 bg-slate-100 p-4 rounded-lg sm:grid-cols-4 grid-cols-2 gap-5 ${container ? "grid" : "hidden"}`} id="wrapper">
                    {categories.map((cat, i) => {
                        return <Select className={filter === i ? "block" : "hidden"} value={filters[i].value} handleClick={() => filter === i ? setFilter(3) : setFilter(i)} key={cat} >
                            {category[0] === "anime" ? anime[i].values.map(filter => <div className='hover:dark:bg-slate-600 hover:bg-slate-300 cursor-pointer capitalize h-10 flex items-center justify-center' onClick={() => {
                                setFilter(3)
                                return setFilters(prevState => [...prevState].map(fill => fill.filter === cat ? {...fill, value: filter} : {...fill}))}
                            } key={filter}>{filter}</div>) : manga[i].values.map(filter => <div className='hover:dark:bg-slate-600 hover:bg-slate-300 cursor-pointer capitalize h-10 flex items-center justify-center' onClick={() => {
                                setFilter(3)
                                return setFilters(prevState => [...prevState].map(fill => fill.filter === cat ? {...fill, value: filter} : {...fill}))}
                            } key={filter}>{filter}</div>)}
                        </Select>
                    })}
                    <Link to={`/${category[0]}?q=${category[2].length > 1 ? category[2].split(" ").join("+") : window.location.search.split("&")[0].substring(3)}&sort=desc${filters[0].value !== "none" ? "&type=" + filters[0].value : ""}${filters[1].value !== "none" ? "&status=" + filters[1].value : ""}&order_by=${filters[2].value}&sfw=true&page=1`}>
                        <SearchIcon className="hover:dark:bg-slate-600 hover:bg-slate-300 cursor-pointer h-10 flex items-center justify-center w-full rounded-md p-2 dark:bg-slate-700 bg-slate-200" fontSize="large"/>
                    </Link>
                </div>
            </section>
            <section className="w-full text-center" id="results">
                <h1 className="font-medium text-2xl my-5">Results for {window.location.search.split("&")[0].substring(3).split("+").join(" ")}</h1>
                <div className="grid sm:grid-cols-5 grid-cols-2 gap-y-3.5 place-items-center place-content-start">
                    {(loading && window.matchMedia("(max-width: 640px)").matches) ? [1,2,3,4].map(sample => <CardSkeleton key={sample}/>) : loading && [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(sample => <CardSkeleton key={sample}/>)}
                    {(data.length > 0 && !loading) && data.map((cards: {title: string, images: {webp: {image_url: string}}, score:number, scored_by: number, members: number, mal_id: number}) => {
                    return <Card title={cards.title} img={cards.images.webp.image_url} link={window.location.pathname.search("anime") !== -1 ? `/anime/${cards.mal_id}/full` : `/manga/${cards.mal_id}/full`} rate={cards.score} reviewers={cards.scored_by} members={cards.members} />})}
                    {(data.length > 0 && !loading) && <Pagination currentPage={pagination.current_page} lastPage={pagination.last_visible_page} />}
                </div>
            </section>
        </main>
    );
}
 
export default SearchPage;