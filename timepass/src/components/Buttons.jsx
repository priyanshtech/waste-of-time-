export default function Buttons(){
    return (<div >
      <div className="flex justify-around gap-10 border-2 border-black-200 px-10 py-10 rounded-lg grid grid-cols-2 bg-gradient-to-r from-violet-300 to-blue-200">
      <button className="border-2 border-black rounded-lg px-2 transition-gray-200 hover:bg-yellow-100 hover:scale-109 hover:rotate-9 hover:font-bold transition-all duration-900  "><p className="hover:rotate-9 transition-all duration-400">apple</p></button>
      <button className="border-2 border-black rounded-lg px-2">banana</button>
      <button className="border-2 border-black rounded-lg px-2">lichi</button>
      <button className="border-2 border-black rounded-lg px-2">mango</button></div>

    </div>
  )

    
}