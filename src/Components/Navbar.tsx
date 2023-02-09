import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';

const Navbar = (props: {category: [string, React.Dispatch<React.SetStateAction<string>>, string, React.Dispatch<React.SetStateAction<string>>]}) => {
  const [ hoverMenu, setHoverMenu ] = useState(0)
  const [ menu, setMenu ] = useState(window.matchMedia("(max-width: 640px)").matches ? false : true)
  const [ theme, setTheme ] = useState(localStorage.getItem("theme") !== null ? localStorage.theme : "")

  useEffect(() => {
    theme.length > 1 && localStorage.setItem("theme", theme);
    if ((localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))) {
        document.documentElement.classList.add('dark')
        setTheme("dark")
    } else {
        document.documentElement.classList.remove('dark')
        setTheme("light")
    }
  }, [theme])
  
  return (
    <header className=" w-full h-20">
        <nav className="max-w-screen-lg mx-auto p-5 w-full h-full flex items-center justify-between relative">
            <Link to="/" className="p-2 px-4 font-semibold rounded-lg bg-blue-600 text-white shadow-md
            hover:bg-blue-500" onClick={() => {
                window.matchMedia("(max-width: 640px)").matches && setMenu(false)
                return document.body.style.overflow = "auto"
            }}>NotMyAnimeList</Link>
            <div className={`items-center sm:gap-5 ${menu === false ? "hidden" : "flex"} absolute sm:static flex-col sm:flex-row top-full bg-slate-50 left-0 w-full sm:w-auto px-4 gap-3 sm:px-0 dark:bg-slate-900 h-screen sm:h-auto z-20`} id="menu">
                <div className='relative dark:text-white' id="menu-anime" onClick={() => {
                        hoverMenu === 1 ? setHoverMenu(0) : setHoverMenu(1)
                    }} onMouseEnter={() => setHoverMenu(1)} onMouseLeave={() => setHoverMenu(0)}>
                    <label className='flex items-center cursor-pointer'>Anime<ArrowDropDownIcon className="-translate-y-0.5 -mx-1 p-0.5" fontSize="large" /></label>
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 flex-col whitespace-nowrap bg-slate-100 rounded-md overflow-hidden shadow-md z-10 ${hoverMenu === 1 ? "flex" : "hidden"} dark:bg-slate-800`}>
                        <Link onClick={() => setTimeout(() => {
                            window.matchMedia("(max-width: 640px)").matches && setMenu(false)
                            return document.body.style.overflow = "auto"
                        } ,100)} to="top/anime?type=tv&filter=bypopularity&page=1" className="px-4 py-2.5
                        hover:bg-slate-200 dark:hover:bg-slate-700">Top Animes</Link>
                        <Link onClick={() => setTimeout(() => {
                            window.matchMedia("(max-width: 640px)").matches && setMenu(false)
                            return document.body.style.overflow = "auto"
                        } ,100)} to="top/anime?type=movie&filter=bypopularity&page=1" className="px-4 py-2.5
                        hover:bg-slate-200 dark:hover:bg-slate-700">Top Movies</Link>
                        <Link onClick={() => setTimeout(() => {
                            window.matchMedia("(max-width: 640px)").matches && setMenu(false)
                            return document.body.style.overflow = "auto"
                        } ,100)} to="top/anime?type=ova&filter=bypopularity&page=1" className="px-4 py-2.5
                        hover:bg-slate-200 dark:hover:bg-slate-700">Top OVAs</Link>
                        <Link onClick={() => setTimeout(() => {
                            window.matchMedia("(max-width: 640px)").matches && setMenu(false)
                            return document.body.style.overflow = "auto"
                        } ,100)} to="/" className="px-4 py-2.5
                        hover:bg-slate-200 dark:hover:bg-slate-700">Top Season</Link>
                        <Link onClick={() => setTimeout(() => {
                            window.matchMedia("(max-width: 640px)").matches && setMenu(false)
                            return document.body.style.overflow = "auto"
                        } ,100)} to="top/anime?filter=airing&page=1" className="px-4 py-2.5
                        hover:bg-slate-200 dark:hover:bg-slate-700">Top Airing</Link>
                    </div>
                </div>
                <div className='relative dark:text-white' id="menu-manga" onClick={() => {
                        hoverMenu === 2 ? setHoverMenu(0) : setHoverMenu(2)
                    }} onMouseEnter={() => setHoverMenu(2)} onMouseLeave={() => setHoverMenu(0)}>
                    <label className='flex items-center cursor-pointer'>Manga<ArrowDropDownIcon className="-translate-y-0.5 -mx-1 p-0.5" fontSize="large" /></label>
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 flex-col whitespace-nowrap bg-slate-100 rounded-md overflow-hidden shadow-md z-10 ${hoverMenu === 2 ? "flex" : "hidden"} dark:bg-slate-800`}>
                        <Link onClick={() => setTimeout(() => {
                            window.matchMedia("(max-width: 640px)").matches && setMenu(false)
                            return document.body.style.overflow = "auto"
                        } ,100)} to="top/manga?type=manga&filter=bypopularity&page=1" className='px-4 py-2.5
                        hover:bg-slate-200 dark:hover:bg-slate-700'>Top Mangas</Link>
                        <Link onClick={() => setTimeout(() => {
                            window.matchMedia("(max-width: 640px)").matches && setMenu(false)
                            return document.body.style.overflow = "auto"
                        } ,100)} to="top/manga?type=manhwa&filter=bypopularity&page=1" className='px-4 py-2.5
                        hover:bg-slate-200 dark:hover:bg-slate-700'>Top Manhwas</Link>
                        <Link onClick={() => setTimeout(() => {
                            window.matchMedia("(max-width: 640px)").matches && setMenu(false)
                            return document.body.style.overflow = "auto"
                        } ,100)} to="top/manga?type=novel&filter=bypopularity&page=1" className='px-4 py-2.5
                        hover:bg-slate-200 dark:hover:bg-slate-700'>Top Novels</Link>
                        <Link onClick={() => setTimeout(() => {
                            window.matchMedia("(max-width: 640px)").matches && setMenu(false)
                            return document.body.style.overflow = "auto"
                        } ,100)} to="top/manga?type=oneshot&filter=bypopularity&page=1" className='px-4 py-2.5
                        hover:bg-slate-200 dark:hover:bg-slate-700'>Top OneShots</Link>
                        <Link onClick={() => setTimeout(() => {
                            window.matchMedia("(max-width: 640px)").matches && setMenu(false)
                            return document.body.style.overflow = "auto"
                        } ,100)} to="top/manga?filter=publishing&page=1" className='px-4 py-2.5
                        hover:bg-slate-200 dark:hover:bg-slate-700'>Top Releasing</Link>
                    </div>
                </div>
                <SearchBar className={''} category={props.category[0]} changeCategory={props.category[1]} inputValue={props.category[2]} setInput={props.category[3]} changeMenu={() => {
                    window.matchMedia("(max-width: 640px)").matches && setMenu(false)
                    return document.body.style.overflow = "auto"
                }}/>
                <DarkModeIcon className={`p-1.5 rounded-lg cursor-pointer bg-slate-100 shadow-md
                hover:bg-slate-200 ${theme === "light" ? "block" : "hidden"} dark:bg-slate-800 dark:fill-white dark:hover:bg-slate-700`} fontSize="large" onClick={() => setTheme("dark")} />
                <LightModeIcon className={`p-1.5 rounded-lg cursor-pointer bg-slate-100 shadow-md
                hover:bg-slate-200 ${theme === "dark" ? "block" : "hidden"} dark:bg-slate-800 dark:fill-white dark:hover:bg-slate-700`} fontSize="large" onClick={() => setTheme("light")} />
            </div>
            <MenuIcon className="p-1.5 rounded-md cursor-pointer block bg-slate-100 sm:hidden shadow-sm dark:bg-slate-800 dark:fill-white
            hover:bg-slate-200 dark:hover:bg-slate-700" fontSize="large" onClick={() => {
                (window.matchMedia("(max-width: 640px)").matches && !menu) ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
                setMenu(!menu)
            }}/>
        </nav>
    </header>
  )
}

export default Navbar