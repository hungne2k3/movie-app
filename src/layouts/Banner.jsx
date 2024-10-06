import IconRating from '../assets/rating.png';
import IconRatingHalf from '../assets/rating-half.png';
import ImageMovie from '../assets/temp-1.jpeg';
import IconPlay from '../assets/play-button.png';

function Banner() {
    return (
        <div className="w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover relative">
            <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30" />

            <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
                <div className='flex flex-col space-y-5 items-baseline w-[50%]'>
                    <p className="text-white bg-gradient-to-r from-red-600 to-red-300 text-md py-1 px-3 rounded-sm">TV Show</p>

                    <div className="flex flex-col space-y-4">
                        <h2 className="text-white text-[40px] font-bold">
                            Nghe nói em thích tôi
                        </h2>

                        <div className="flex items-center space-x-3">
                            <img src={IconRating} alt="rating" className='w-8 h-8' />

                            <img src={IconRating} alt="rating" className='w-8 h-8' />

                            <img src={IconRating} alt="rating" className='w-8 h-8' />

                            <img src={IconRating} alt="rating" className='w-8 h-8' />

                            <img src={IconRatingHalf} alt="rating" className='w-8 h-8' />
                        </div>

                        <p className='text-white'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum eaque alias ullam qui, consequatur, quasi reiciendis ad, in officia facere a est nulla fugiat quos. Minus dolor necessitatibus vitae magni.
                        </p>

                        <div className='flex items-center space-x-4'>
                            <button className='p-2 text-white bg-black font-bold text-lg rounded hover:bg-gray-800 active:bg-red-700 focus:outline-none focus:ring focus:ring-slate-300'>
                                Chi tiết
                            </button>

                            <button className='p-2 text-white bg-red-500 font-bold text-lg rounded hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-slate-300'>
                                Xem phim
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-[40%] flex items-center justify-center'>
                    <div className='w-[300px] h-[400px] relative group'>
                        <img src={ImageMovie} alt="movie" className='w-full h-full object-cover' />

                        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
                            <img src={IconPlay} alt="play" className='w-16 h-16 relative z-20 cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner