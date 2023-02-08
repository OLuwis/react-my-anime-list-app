import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
  return (
    <footer className='text-center w-full dark:text-white p-4'>
      Made with <FavoriteIcon className="fill-red-500 stroke-black -translate-y-0.5"/> by <a href="https://github.com/OLuwis" target="_blank" rel="noopener noreferrer" className='font-medium underline'>Luwis</a>
    </footer>
  )
}

export default Footer