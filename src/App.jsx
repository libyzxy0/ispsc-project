import Header from './components/Header.jsx';

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
     <p className="text-md mx-4 my-2">A vibrant and nurturing Polytechnic Service College for transforming lives and communities.</p>
     <p className="text-md mx-4 my-2 text-blue-500">Filipino: (Pangitain) Maningning at mapag-arugang politeknikong serbisyo-kolehiyo para sa pagpapaunlad ng buhay at lipunan..</p>
     <p className="text-md mx-4 my-2 text-green-500">Iloco: (Sirmata) Narimat ken managtaripato nga serbisyo-kolehiyo politekniko para ti pannakabalbaliw iti biag ken kagimongan.</p>
     
     <h1 className="text-red-800 text-xl font-bold mx-4 my-5">Mission</h1>
     <p className="text-md mx-4 my-2">To improve the lives of people and communities through quality instruction, innovations, productivity, initiatives, environment and industry-feasible technologies, resource mobilization and transformational outreach programs and services.</p>
     <p className="text-md mx-4 my-2 text-blue-500">Filipino: Mapaunlad ang buhay ng tao at lipunan sa pamamagitan ng de-kalidad na pagtuturo, pagkamalikhain, panguguna sa pagiging produktibo, teknolohiyang pangkapaligiran at industria, tamang paggamit ng pinagkukunang yaman at mga program at serbisyong makapagbabago sa kabuhayan.</p>
     <p className="text-md mx-4 my-2 text-green-500">Iloco: Mapadur-as iti panagbiag dagiti tattao ken gimong babaen iti de-kalidad a panagisuro, panagpartuat, nabunga ken naballigi a gannuat, teknolohiya a mangsaluad iti aglawlaw ken iti industria, naikalintegan a panagusar dagiti pagbaknangan ken pannakaipaay iti programa ken serbisyo nga mangidanon iti panagbalbaliw.</p>
     
     
     <h1 className="text-red-800 text-xl font-bold mx-4 my-5">Goals and Objectives</h1>
     
     <ol className="ml-8 mr-5">
       <li className="my-2"><b className="text-red-800">1. </b>To make the college responsive and relevant to the individual and social needs for optimum human development.</li>
       <li className="my-2"><b className="text-red-800">2. </b>To offer priority programs in tourism, teacher education, agriculture fishery, agro-forestry, trades, business industry and Information technology which will generate knowledge base to educate the people and communities.</li>
       <li className="my-2"><b className="text-red-800">3. </b>To conduct a wide-range of research and extension programs to provide quality training and technologies for inclusive growth.</li>
       <li className="my-2"><b className="text-red-800">4. </b>To implement government programs and thrusts in the context of regional and national development for poverty alleviation.</li>
       <li className="my-2"><b className="text-red-800">5. </b>To prepare and develop highly productive and employable professionals, “glocal” (global and local) technopreneurs who are morally-crafted and environmentally-oriented for coping globalization standards.</li>
     </ol>
     
     <h1 className="text-red-800 text-xl font-bold mx-4 my-5">Core Values</h1>
     <div className="mx-8">
       <li className="my-2"><b className="text-red-600 text-xl">P </b>roductivity - The delivery of quality programs in instruction, research, extension, production and development of responsive, proactive professionals and graduates and professing determination and hard work in the system.)</li>
       <li className="my-2"><b className="text-red-600 text-xl">R </b>esiliency - Refers to the renewal and motivational strategies, looking at the bright side of academic life and cultivating positive attitudes amidst failures and adversities.</li>
       <li className="my-2"><b className="text-red-600 text-xl">A </b>ccountability - Means the responsibility, answerability, transparency, impartially, decisiveness and delegation of work roles and streamlining of functions.</li>
       <li className="my-2"><b className="text-red-600 text-xl">I </b>ngenuity - Refers to prudent use of resources, prudence in spending, cost cutting measure and deciding the best possible action considering circumstances.</li>
       <li className="my-2"><b className="text-red-600 text-xl">S </b>ynergy - Pertains to the teamwork, collaboration, orchestration, subordination and of all partner agencies, sponsors and stakeholders, parents, alumni and communities.</li>
       <li className="my-2"><b className="text-red-600 text-xl">E </b>xcellence - Refers to global orientation, borderless perspective, equal opportunities, empowerment, and transformation, multi-tasking and leading by example.</li>
     </div>
     
     <h1 className="text-red-800 text-xl font-bold mx-4 my-5">Strategic Developmental Goals ("BRAVE D’ STORM")</h1>
     <div className="mx-8">
     <li className="my-2"><b className="text-green-600 text-xl">B</b>ridging Networks and Building Communities</li>
     <li className="my-2"><b className="text-green-600 text-xl">R</b>esource Generation and Employees Empowerment</li>
     <li className="my-2"><b className="text-green-600 text-xl">A</b>ccreditation and Development of Academic Programs</li>
     <li className="my-2"><b className="text-green-600 text-xl">V</b>irtual Technology Systems and Website Development</li>
     <li className="my-2"><b className="text-green-600 text-xl">D</b>evelopment of Quality, Relevant and Accessible Undergraduate and Graduate School System</li>
     <li className="my-2"><b className="text-green-600 text-xl">S</b>cholarship and Financial Assistance</li>
     <li className="my-2"><b className="text-green-600 text-xl">T</b>raining  of Employees for Global Competitiveness</li>
     <li className="my-2"><b className="text-green-600 text-xl">O</b>rganizational Immersion and Revolutionary Extension Activities</li>
     <li className="my-2"><b className="text-green-600 text-xl">R</b>evolutionized Research and Gender Development Programs</li>
     <li className="my-2"><b className="text-green-600 text-xl"></b></li>
     <li className="my-2"><b className="text-green-600 text-xl">M</b>aintenance, Modernization and Mitigation Measures
</li>
     </div>
     <h1 className="text-red-800 text-xl font-bold mx-4 my-5">Philosophy</h1>
     <div className="mx-8">
     <p><b className="text-blue-500 text-4xl mr-3">F</b> lourish ISPSC,</p>
     <p><b className="text-blue-500 text-4xl mr-3">D</b> eliver Quality Education and Services and</p>
     <p><b className="text-blue-500 text-4xl mr-3">L</b> aunch Academic Excellence</p>
     </div>
     </section>
     <footer className="border-t border-gray-300 bg-[#E2EEFC] mt-12 py-5">
       <h1 className="text-center mt-8 text-3xl font-bold text-green-600">Contact Us</h1>
       <div className="mx-8">
         <img src="https://ispsc.edu.ph/file-manager/images/ispsc_logo_small.png" alt="Contact Us" className="mt-8"/>
         <h1 className="text-green-700 text-xl font-bold mt-8">Office of the President</h1>
         <p>Email: op@ispsc.edu.ph</p>
         
         <h1 className="text-green-700 text-xl font-bold mt-8">Registrar</h1>
         <p>Tel. No.: (077) 604-1422</p>
         <p>Email: registrarispsc@yahoo.com</p>
         <p>FB <a href="https://www.facebook.com/ISPSCRegistrarsOffice/" >Registrar's Office Page</a></p>
         
         <h1 className="text-green-700 text-xl font-bold mt-8">Campuses</h1>
         <p>Main Campus</p>
         <p>Sta. Maria</p>
         <p>Santiago</p>
         <p>Narvacan</p>
         <p>Tagudin</p>
         <p>Candon City</p>
         <p>Cervantes</p>
       </div>
     </footer>
     <div className="w-full bg-red-900 h-10 text-center flex justify-center items-center text-white">© 2024 Ilocos sur Polytechnic State College</div>
    </main>
  );
}
