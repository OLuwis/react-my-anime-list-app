import StarRoundedIcon from '@mui/icons-material/StarRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { Link } from "react-router-dom";
import { useState } from 'react';

const Card = (props: { title: string, img: string, link: string, rate: number, reviewers: number, members: number }) => {
    const [ stats, setStats ] = useState(false)
    
    return (
        <Link to={props.link} className="text-sm overflow-hidden text-center w-28 sm:w-40 dark:text-white" onMouseEnter={() => setStats(true)} onMouseLeave={() => setStats(false)}>
            <div className='relative rounded-md overflow-hidden border border-blue-600 shadow-md text-white'>
                <img src={props.img} alt="Cover" className={`rounded-md object-cover`} style={{aspectRatio: 75/106}} loading="lazy"/>
                <div className={`grid grid-cols-2 justify-around bg-blue-600 absolute z-10 w-full bottom-0 text-xs transition-transform py-0.5 place-items-center ${stats ? "translate-y-0" : "sm:translate-y-16 translate-y-0"}`} id="stats">
                    <span className="flex items-center flex-col justify-center" id="rate"><StarRoundedIcon fontSize="small" className="fill-yellow-300"/>{props.rate !== null ? props.rate : "N/A"}<br/>({props.reviewers !== null ? Intl.NumberFormat("en", { notation: "compact"}).format(props.reviewers) : "N/A"})</span>
                    <span className="flex items-center justify-center flex-col" id="members"><PersonRoundedIcon fontSize="small" className="fill-gray-100"/>{Intl.NumberFormat("en", { notation: "compact"}).format(props.members)}</span>
                </div>
            </div>
            <h1 className={`mt-1 line-clamp-2`}>{props.title}</h1>
        </Link>
    )
}
 
export default Card;