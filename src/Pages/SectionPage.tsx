import { useSearchParams } from "react-router-dom";
import Card from "../Components/Card";
import CardSkeleton from "../Components/CardSkeleton";
import Pagination from "../Components/Pagination";
import useFetch from "../Hooks/useFetch";

interface myData {
    title: string,
    images: {
        jpg: {
            image_url: string
        }
    },
    score: number,
    scored_by: number,
    members: number,
    mal_id: number
}

const SectionPage = () => {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const { data, loading, pagination } = useFetch(window.location.pathname + window.location.search)

    return (
        <main className="w-full p-5 max-w-screen-lg mx-auto h-auto grid sm:grid-cols-5 gap-y-3 gap-x-5 sm:gap-x-0 place-items-center dark:text-white py-1.5 grid-cols-2 items-start">
            <h1 className="sm:col-span-5 col-span-2 text-center font-medium sm:text-2xl text-xl capitalize">Top {
                window.location.search.split("&")[0].substring(window.location.search.split("&")[0].indexOf("=") + 1) === "tv" ? "Animes" : window.location.search.split("&")[0].startsWith("type", 1) ? window.location.search.split("&")[0].substring(window.location.search.split("&")[0].indexOf("=") + 1) + "s" : window.location.search.split("&")[0].substring(window.location.search.split("&")[0].indexOf("=") + 1) === "publishing" ? "Releasing" : window.location.search.split("&")[0].substring(window.location.search.split("&")[0].indexOf("=") + 1)
            }</h1>
            {(loading && window.matchMedia("(max-width: 640px)").matches) ? [1,2,3,4].map(sample => <CardSkeleton key={sample} />) : loading && [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(sample => <CardSkeleton key={sample} />)}
            {(data.length > 0 && !loading) && data.map((cards: myData) => {
                return <Card title={cards.title} img={cards.images.jpg.image_url} link={window.location.pathname.search("anime") !== -1 ? `/anime/${cards.mal_id}/full` : `/manga/${cards.mal_id}/full`} rate={cards.score} reviewers={cards.scored_by} members={cards.members} key={cards.title} />
            })}
            {(data.length > 0 && !loading) && <Pagination currentPage={pagination.current_page} lastPage={pagination.last_visible_page} />}
        </main>
    );
}
 
export default SectionPage;