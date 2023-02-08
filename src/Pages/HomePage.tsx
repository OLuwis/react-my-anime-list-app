import Card from "../Components/Card"
import CardSkeleton from "../Components/CardSkeleton"
import useFetch from "../Hooks/useFetch"

const HomePage = () => {
  const { data, loading } = useFetch("/random/anime")

  return (
    <main className="w-full flex items-center justify-center p-4 pb-0" id="welcome">
      <div className="w-full max-w-screen-md bg-blue-600 rounded-lg shadow-lg relative mt-6 text-white p-4 pt-12 text-center text-lg flex flex-col gap-3 justify-center items-center">
        <span className="w-20 h-20 text-5xl bg-blue-600 flex items-center justify-center rounded-full font-bold absolute left-1/2 -translate-x-1/2 -top-8">
          <span className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-black">!</span>
        </span>
        <h1>Disclaimer: This website is not affliliated with <a href="https://myanimelist.net/" target="_blank" rel="noopener noreferrer" className="font-medium underline">MyAnimeList.net</a></h1>
        <h1>Welcome to my Project, I've created this site to test my skills and expand my knowledge on Front-End Development, </h1>
        <h1>Unfortunately, since this site uses <a href="https://jikan.moe/" target="_blank" rel="noopener noreferrer" className="underline font-medium">Jikan</a> API, you won't be able to login and track your anime and manga progress.</h1>
        <h1>Don't know where to start? Here's a random anime:</h1>
        {(Object.keys(data).length > 0 && !loading) && <Card title={data.title} img={data.images.webp.image_url} link={`/anime/${data.mal_id}/full`} rate={data.score} reviewers={data.scored_by} members={data.members} />}
        {loading && <CardSkeleton />}
      </div>
    </main>
  )
}

export default HomePage