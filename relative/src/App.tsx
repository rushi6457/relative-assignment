import React from 'react';
import './App.css';
import bitcoin from "./assets/bitcoin.png"
import solana from "./assets/solana.png"
import ethm from "./assets/ethereum.jpg"
import binance from "./assets/binance.png"
import shib from "./assets/shib.png";
import {BsGraphUp} from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <div>
        <div className='head'><BsGraphUp/><h1 className='text-white text-justify text-xl'>Trending assets</h1></div>
       <div className='h-0 w-full flex justify-around mb-12 '>
            <div className='circle' >
              <img className='w-full p-5' src={bitcoin} alt="" />
            </div>
            <div className='circle'>
              <img className='w-full p-5' src={solana} alt="" />
            </div>
            <div className='circle'>
              <img className='w-full p-5' src={ethm} alt="" />
            </div>
            <div className='circle'>
              <img className='w-full p-5' src={binance} alt="" />
            </div>
            <div className='circle'>
              <img className='w-full p-5' src={shib} alt="" />
            </div>
        </div>


        <div className='h-96 w-full mt-0 flex justify-around gap-10 pl-6 pr-6 pb-10 '>
            <div className='cards'>
              <div className='cut'></div>
              <p className='text-slate-600 text-center mt-20 text-xl'>Bitcoin (BTC)</p>
              <div className='price'>
                <p className='text-white tracking-wider font-bold font-mono '>$31,812.80</p>
                <p className='text-emerald-500 font-bold tracking-wider text-sm'>+10%</p>
              </div>
              <p className='text-slate-600 text-center font-mono pt-2 '>Price</p>
              <div className='price'>
                <p className='text-white tracking-wider font-bold font-mono '>$60,000</p>
              </div>
              <p className='text-slate-600 text-center font-mono pt-2 '>TVL</p>
               <div className='icons'>
                <img src={solana} alt="" />
                <img src={ethm} className='' alt="" />
                <img src={binance} alt="" />
              </div>
              <p className='text-slate-600 text-center font-mono pt-2 '>Popular pairs</p>
            </div>


            <div className='cards'>
              <div className='cut'></div>
               <p className='text-slate-600 text-center mt-20 text-xl'>Solana (SOL)</p>
                <div className='price'>
                <p className='text-white tracking-wider font-bold font-mono text-center '>$32.83</p>
                <p className='text-red-600 font-bold tracking-wider text-sm text-left left-4'>-12.32%</p>
              </div>
               <p className='text-slate-600 text-center font-mono pt-2 '>Price</p>
               <div className='price'>
                <p className='text-white tracking-wider font-bold font-mono '>$60,000</p>
              </div>
              <p className='text-slate-600 text-center font-mono pt-2 '>TVL</p>
              <div className='icons'>
                <img src={bitcoin} alt="" />
                <img src={ethm} className='' alt="" />
                <img src={binance} alt="" />
              </div>
              <p className='text-slate-600 text-center font-mono pt-2 '>Popular pairs</p>
            </div>


            <div className='cards'>
              <div className='cut'></div>
               <p className='text-slate-600 text-center mt-20 text-xl'>Etharium (ETH)</p>
                <div className='price'>
                <p className='text-white tracking-wider font-bold font-mono '>$1,466.45</p>
                <p className='text-red-600 font-bold tracking-wider text-sm'>-11.93%</p>
              </div>
               <p className='text-slate-600 text-center font-mono pt-2 '>Price</p>
               <div className='price'>
                <p className='text-white tracking-wider font-bold font-mono '>$60,000</p>
              </div>
              <p className='text-slate-600 text-center font-mono pt-2 '>TVL</p>
              <div className='icons'>
                <img src={solana} alt="" />
                <img src={bitcoin} className='' alt="" />
                <img src={binance} alt="" />
              </div>
              <p className='text-slate-600 text-center font-mono pt-2 '>Popular pairs</p>
            </div>


            <div className='cards'>
              <div className='cut'></div>
               <p className='text-slate-600 text-center mt-20 text-xl'>Binance USD (BUSD)</p>
                <div className='price'>
                <p className='text-white tracking-wider font-bold font-mono '>$1.00</p>
                <p className='text-emerald-500 font-bold tracking-wider text-sm'>+0.26%</p>
              </div>
               <p className='text-slate-600 text-center font-mono pt-2 '>Price</p>
               <div className='price'>
                <p className='text-white tracking-wider font-bold font-mono '>$60,000</p>
              </div>
              <p className='text-slate-600 text-center font-mono pt-2 '>TVL</p>
              <div className='icons'>
                <img src={solana} alt="" />
                <img src={ethm} className='' alt="" />
                <img src={binance} alt="" />
              </div>
              <p className='text-slate-600 text-center font-mono pt-2 '>Popular pairs</p>
            </div>


          <div className='cards'>
              <div className='cut'></div>
               <p className='text-slate-600 text-center mt-20 text-xl'>Shiba Inu (SHIB)</p>
                <div className='price'>
                <p className='text-white tracking-wider font-bold font-mono '>$0.0000001948</p>
                <p className='text-red-600 font-bold tracking-wider text-sm'>-8.1%</p>
              </div>
               <p className='text-slate-600 text-center font-mono pt-2 '>Price</p>
               <div className='price'>
                <p className='text-white tracking-wider font-bold font-mono '>$60,000</p>
              </div>
              <p className='text-slate-600 text-center font-mono pt-2 '>TVL</p>
              <div className='icons'>
                <img src={solana} alt="" />
                <img src={ethm} className='' alt="" />
                <img src={binance} alt="" />
              </div>
              <p className='text-slate-600 text-center font-mono pt-2 '>Popular pairs</p>
            </div>
          </div>
       
      </div>
    </div>
  );
}

export default App;
