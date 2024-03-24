import { useEffect, useState } from 'react'
import NoBtn from './NoBtn';
import './App.css'

function App() {
  // https://media.tenor.com/mxg1RwQmzQQAAAAi/peach-goma-love-pat-head-cheek.gif
  // https://media1.tenor.com/m/xDxd1bVH4ccAAAAC/peach-peach-cat.gif
  // https://media.tenor.com/ivKWdfdbV3EAAAAi/goma-goma-cat.gif

  const [itemNo, setItemNo] = useState(0);
  const [yes, setYes] = useState(false);

  const [top, setTop] = useState("45%");
  const [left, setLeft] = useState("67%");

  const data = [
    {
      id: 1,
      image: 'https://media.tenor.com/mxg1RwQmzQQAAAAi/peach-goma-love-pat-head-cheek.gif',
      text: "DO You Love Me ? 🤗",
      subtext: "Bhebe Bolbiiii ! 🥹"
    },
    {
      id: 2,
      image: 'https://media1.tenor.com/m/xDxd1bVH4ccAAAAC/peach-peach-cat.gif',
      text: "Bhebe Nee bhalo kore 🙄",
      subtext: "Eto tara kiser NAA bolar 🥺"
    },
    {
      id: 3,
      image: 'https://media.tenor.com/ivKWdfdbV3EAAAAi/goma-goma-cat.gif',
      text: "Arr Ek Baar Bhebe Nee ☹️",
      subtext: "Keno Erom Korchis 😢"
    },
    {
      id: 4,
      image: 'https://media1.tenor.com/m/A4Lvk69JMJkAAAAC/mochi-cat.gif',
      text: "Hehehe I knew it ! 😘",
      subtext: ""
    },
  ]

  const handleYes = () => {
    setYes(true);
    setItemNo(3);
  }

  const handleNo = () => {
    if(itemNo >= 2) {
      return
    };
    
    setItemNo(prev => prev+1);
  }

  return (
    <>
    {itemNo == 2 && <NoBtn />}
    <div className='w-full h-screen bg-red-100 flex justify-center items-center'>
      
      <div className='w-96 p-2 flex flex-col items-center'>
        <div className="bg-white w-52 rounded-lg p-3">
        <img src={data[itemNo].image} alt="" srcset="" />
        </div>
        <h1 className='font-bold text-xl md:text-2xl m-2'>{data[itemNo].text}</h1>
        <p className="text-lg">{data[itemNo].subtext}</p>

        
      {!yes ? (
        <div className='m-1'>
        <button className='px-6 rounded-lg m-2 py-2 shadow-md bg-white' onClick={handleYes}>Yes</button>
        <button 
          className={`px-6 rounded-lg py-2 shadow-md bg-white ${itemNo == 2 && `invisible`}`} onClick={handleNo}>No</button>
      </div>
      ) : null}
      </div>
    </div>
    </>
  )
}

export default App
