import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import contents from './Contents.json';


export default function App() {
  return (
    <main className="bg-white w-full h-screen">
     <Header />
     <section>
       <div className="flex flex-row justify-between pb-5">
       <h1 className="mx-4 text-green-600 text-3xl my-5 font-medium">Vision & Mission</h1>
       <img src="https://ispsc.edu.ph/images/misc/ispsclettersgreen.png" alt="ispsc" className="w-auto h-10 mt-12 mx-4" />
       </div>
       
     <div className="flex w-full justify-center items-center"><div className="w-[90%] border-[1px] border-cyan-200"></div></div>
     <h1 className="text-red-800 text-xl font-bold mx-4 my-5">Vision</h1>
     
     <p className="text-md mx-4 my-2">{ contents.vision.en }</p>
     <p className="text-md mx-4 my-2 text-blue-500">{ contents.vision.filipino }</p>
     <p className="text-md mx-4 my-2 text-green-500">{ contents.vision.iloco }</p>
     
     <h1 className="text-red-800 text-xl font-bold mx-4 my-5">Mission</h1>
     <p className="text-md mx-4 my-2">{ contents.mission.en }</p>
     <p className="text-md mx-4 my-2 text-blue-500">{ contents.mission.filipino }</p>
     <p className="text-md mx-4 my-2 text-green-500">{ contents.mission.iloco }</p>
     
     
     <h1 className="text-red-800 text-xl font-bold mx-4 my-5">Goals and Objectives</h1>
     
     {contents && (
  <ol className="ml-8 mr-5">
    {contents.goalsAndObjectives.map((text, i) => (
      <li key={i} className="my-2">
        <b className="text-red-800">{i + 1}. </b>
        {text}
      </li>
    ))}
  </ol>
)}

    
     
     <h1 className="text-red-800 text-xl font-bold mx-4 my-5">Core Values</h1>
     
     {contents && (
  <div className="mx-8">
    {contents.coreValues.map((text, i) => (
      <li key={i} className="my-2">
        <b className="text-red-600 text-xl">{text.charAt(0)} </b>
        {text.slice(1)}
      </li>
    ))}
  </div>
)}

    
     <h1 className="text-red-800 text-xl font-bold mx-4 my-5">Strategic Developmental Goals ("BRAVE D’ STORM")</h1>
     {contents && (
  <div className="mx-8">
    {contents.coreValues.map((text, i) => (
      <li key={i} className="my-2">
        <b className="text-green-600 text-xl">{text.charAt(0)} </b>
        {text.slice(1)}
      </li>
    ))}
  </div>
)}
     <h1 className="text-red-800 text-xl font-bold mx-4 my-5">Philosophy</h1>
     <div className="mx-8">
     <p><b className="text-blue-500 text-4xl mr-3">F</b> Flourish ISPSC,</p>
     <p><b className="text-blue-500 text-4xl mr-3">D</b> Deliver Quality Education and Services and</p>
     <p><b className="text-blue-500 text-4xl mr-3">L</b> Launch Academic Excellence</p>
     </div>
     </section>
     <Footer />
    </main>
  );
}
