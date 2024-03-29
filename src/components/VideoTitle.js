import { Link } from "react-router-dom"


const VideoTitle = ({title, overview,movieId}) => {
  return (
    <div className="w-screen aspect-video md:pt-[12%] pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-2xl font-bold mb-6 md:text-6xl md:mb-0">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="flex mt-4">
        <Link to={`/movie/${movieId}`}>
            <button className="bg-white text-black py-1 md:py-4 px-8 text-xl rounded-md mr-2 hover:bg-opacity-80">
             Play
            </button>
        </Link>
            <button className="hidden md:inline-block bg-gray-500 text-black p-4 px-12 text-xl bg-opacity-50 rounded-md">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle