export default function Header() {
  return (
    <>
   <div className="flex flex-col w-full justify-center items-center bg-red-900 py-5">
        <img src="https://ispsc.edu.ph/file-manager/images/LogoWhiteSmall.webp" alt="ISPSC Logo" />
        <h1 className="text-yellow-500 text-xl my-2 font-light">Republic of the Philippines</h1>
        <div className="w-[70%] border-[1px] border-yellow-500"></div>
        <h1 className="mx-10 text-yellow-500 mt-3 text-4xl font-medium text-center">Ilocos Sur Polytechnic State College</h1>
        <p className="text-yellow-500 text-xl">Ilocos Sur, Philippines</p>
      </div>
      <div className="flex flex-row w-full bg-red-700 py-3 justify-between">
        <input type="text" placeholder="Search" className="bg-yellow-100 rounded-full py-2 px-4 outline-none border-none mx-3 shadow text-balck font-bold w-[70%]" />
        <button className="border-none outline-none bg-transparent text-black transition-all duration-300 rounded-full hover:bg-yellow-200 px-2 mx-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
         <button className="outline-none bg-transparent text-black border-2 border-black px-3 rounded-md mx-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
          
        </button>
      </div>
      </>
     ) 
}