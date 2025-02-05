
export default function SubHeroSec({ titel = '', description = '' }) {
    return (
        <div className="relative pt-8 lg:pt-0 min-h-[40vh] lg:h-[50vh] flex flex-col items-center justify-center bg-[#282c34] text-white px-6">
            {/* Dekoratives Element */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <Svg />
            </div>
            {/* Inhalt */}
            <div className="z-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    {titel}
                </h1>
                <p className="text-sm md:text-xl text-gray-300 mx-auto">
                    {description}
                </p>
            </div>
        </div>
    );
}
//supcom ######################### svg ######################### //
function Svg(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{width: '100%', height: '100%'}}>
            <defs>
                <pattern id="a" width="30" height="30" patternTransform="rotate(85)scale(3)" patternUnits="userSpaceOnUse">
                    <rect width="100%" height="100%" fill="#282c34"/>
                    <path fill="none" stroke="#4463ee" stroke-width=".5" d="M9 20.502A7.5 7.5 0 0 1 1.5 28 7.5 7.5 0 0 0-6 35.5a7.5 7.5 0 0 1-7.5 7.499 7.48 7.48 0 0 1-5.304-2.196A7.48 7.48 0 0 1-21 35.5a7.5 7.5 0 0 1 7.5-7.5A7.5 7.5 0 0 0-6 20.502a7.5 7.5 0 1 1 15 0zm15 0A7.5 7.5 0 0 1 16.5 28a7.48 7.48 0 0 1-5.304-2.196A7.48 7.48 0 0 1 9 20.502c0-2.072-.84-3.947-2.197-5.303A7.48 7.48 0 0 0 1.5 13.002a7.48 7.48 0 0 1-5.304-2.196A7.48 7.48 0 0 1-6 5.503a7.5 7.5 0 1 1 15 0c0 2.07.84 3.945 2.196 5.303a7.48 7.48 0 0 0 5.304 2.196c2.07 0 3.945.84 5.303 2.197A7.47 7.47 0 0 1 24 20.502zm15 0A7.5 7.5 0 0 1 31.5 28a7.5 7.5 0 0 0-7.5 7.5 7.5 7.5 0 0 1-7.5 7.499 7.48 7.48 0 0 1-5.304-2.196A7.48 7.48 0 0 1 9 35.5a7.5 7.5 0 0 1 7.5-7.5 7.5 7.5 0 0 0 7.5-7.498 7.5 7.5 0 1 1 15 0zm0-30A7.5 7.5 0 0 1 31.5-2 7.5 7.5 0 0 0 24 5.5a7.5 7.5 0 0 1-7.5 7.499 7.48 7.48 0 0 1-5.304-2.196A7.48 7.48 0 0 1 9 5.5 7.5 7.5 0 0 1 16.5-2 7.5 7.5 0 0 0 24-9.498a7.5 7.5 0 1 1 15 0zm-22.5 37.5a7.5 7.5 0 0 0-7.5 7.5c0-2.072-.84-3.947-2.197-5.303A7.48 7.48 0 0 0 1.5 28.002 7.5 7.5 0 0 0 9 20.503c0 2.07.84 3.945 2.196 5.303a7.48 7.48 0 0 0 5.304 2.196zm15-15a7.5 7.5 0 0 0-7.5 7.5c0-2.072-.84-3.947-2.197-5.303a7.48 7.48 0 0 0-5.303-2.197A7.5 7.5 0 0 0 24 5.503c0 2.07.84 3.945 2.196 5.303a7.48 7.48 0 0 0 5.304 2.196z"/>
                </pattern>
            </defs>
            <rect width="800%" height="800%" fill="url(#a)" transform="translate(-3 -123)"/>
        </svg>
    )
}
