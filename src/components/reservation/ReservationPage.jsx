import React , {useState} from 'react'
import lorestanac from "../../images/lorestanac.jpeg"
import DayContainer from './DayContainer';

const ReservationPage = ({setPage}) => {

  const time = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  const day = ["شنبه","یک شنبه","دو شنبه","سه شنبه","چهار شنبه","پنج شنبه","جمعه"]


  const [days, setdays] = useState([
    {
      id : 0,
      name : "شنبه",
      trips : [
        {id : 134 , hour : 7 , minute : 0 , source : 1 , destination : 3}
      ]
    },
    {
      id : 3,
      name : "سه شنبه",
      trips : [
        {id : 135 , hour : 8 , minute : 0 , source : 1 , destination : 3}
      ]
    },
    {
      id : 5,
      name : "پنج شنبه",
      trips : [
        {id : 136 , hour : 9 , minute : 0 , source : 1 , destination : 3}
      ]
    },
  ]);

  const [locations , setLocations] = useState([
        {
            id : 1,
            name : "دانشکده ادبیات"
        },
        {
            id : 2,
            name : "دانشکده کشاورزی"
        },
        {
            id : 3,
            name : "خوابگاه دختران شماره دو"
        },
        {
            id : 4,
            name : "خوابگاه پسران شماره یک"
        },
        {
          id : 4,
          name : "میدان آزادی"
        }

    ])

  return (
    <>

      <div className="flex justify-between ml-5 mr-5 mt-5">
        <img src={lorestanac} alt="logo" className='h-32 w-32' />
        <p className='mt-12'>سلام آقای فلانی به سامانه رزرو اتوبوس دانشگاه لرستان خوش آمدید</p>
        <button onClick={() => setPage(prevpage => prevpage - 1)} className='bg-blue-500 h-fit py-3 px-3 text-white rounded-lg border-none text-sm font-black text-center transition-all duration-200 ease-in hover:bg-blue-600 mt-7' >بازگشت به صفحه ورود</button>
      </div>

      <div className="ml-48 mr-48 mt-28 p-7 border border-solid border-[#c0c0c0] rounded-xl w-fit bg-[#f6f6f6]" >
        
        <div className="text-red-700 flex border-b border-solid border-[#c0c0c0] pb-2">
        <span className="ml-40" >روز</span>
        <span className="ml-40" >ساعت</span>
        <span className="ml-40" >مبدا</span>
        <span className="ml-40" >مقصد</span>
        <span>امکان</span>
        </div>
        <div>
        {
          days.map(day => <DayContainer key={day.id} name={day.name} trips={day.trips} /> )
        }
        </div>
      </div>

      <div className='ml-48 mr-48 mt-20 h-[200px]'>

      <button className="bg-lime-500 px-3 ml-24 py-1 text-white rounded-md border-none text-lg font-black text-center hover:bg-lime-600">+</button>
        
      <select className='ml-10 bg-[#f6f6f6] py-1 px-2 rounded-md text-sm' name="day" id="1">
            {day.map(day => <option>{day}</option>)}
      </select>

      <select className='ml-10 bg-[#f6f6f6] py-1 px-2 rounded-md text-sm' name="time" id="2">
            {time.map(time => <option>{time}</option>)}
      </select>

      <select className='ml-10 bg-[#f6f6f6] py-1 px-2 rounded-md text-sm' name="source" id="3">
            {locations.map(locations => <option>{locations.name}</option>)}
      </select>

      <select className="bg-[#f6f6f6] py-1 px-2 rounded-md text-sm" name="destination" id="4">
            {locations.map(locations => <option>{locations.name}</option>)}
      </select>
        
      </div>

    </>
  )
}

export default ReservationPage