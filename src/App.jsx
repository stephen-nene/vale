// App.jsx

import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';

import './assets/styles/App.css';

function App() {
  // Example of how you might use darkMode from the Redux store
  const darkMode = useSelector((state) => state.app.darkMode);

  return (
    <>
      <Navbar />
    <div className={`h-screen w-screen flex justify-center items-center text-2 font-bold   text-center 
    ${darkMode ? 'bg-gray-900 text-whie' : 'bg-gray-200 text-black '}`}>

      <div className="w-[80%] bg-slate-500  rounded-lg  p-4 ">

      <form className='flex flex-col gap-3' action="">

<label htmlFor="">will you go out on valentines with me</label>
      <select name="" id="">
        <option value="">select an option</option>
        <option value="">yes</option>
        <option value="">no</option>
      </select>

      <label htmlFor="">place to go</label>
      {true ?       <input type="place" name="" placeholder='enter a location' />:
      <select name="" id="">
        <option value="">select an option</option>
        <option value="">galleria</option>
        <option value="">waterfront</option>
      </select>
       }

<label htmlFor="">Select a mode of transport</label>
      {/* {true ?       <input type="place" name="" placeholder='enter a location' />: */}
      <select name="" id="">
        <option value="">select an option</option>
        <option value="">walk</option>
        <option value="">bodaboda</option>
        <option value="">psv</option>
        <option value="">uber</option>
      </select>
       {/* } */}



       <label htmlFor="">Naweza vaa jezi <i>(bora red)</i></label>
      {!true ?       <input type="place" name="" placeholder='enter a location' />:
      <select name="" id="">
        <option value="">select an option</option>
        <option value="">Though naweza kosa kufuata🤣 🤣🤣</option>
        <option value="">Yes</option>
        <option value="">No</option>
      </select>
       }


<label htmlFor="">What will you contribute (preserve fareness)</label>
      <input type="number" name="" placeholder='enter a contribution' />

      </form>
       <button className=' bg-blue-500 rounded-lg p-2 mt-3'>submit</button>
      </div>

    </div>
    </>
  );
}

export default App;
