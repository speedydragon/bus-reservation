import React , {useState} from 'react'

const AddingTrips = ({name , key}) => {

    const [days , setDays] = useState("")
    const time = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

  return (
    <div className="h-[300px]">
        <button className="bg-lime-500 px-3  py-1 text-white rounded-md border-none text-lg font-black text-center hover:bg-lime-600">+</button>

        <select name="day" id="1">
            <option value="شنبه">شنبه</option>
            <option value="یک شنبه">یک شنبه</option>
            <option value="دو شنبه">دو شنبه</option>
            <option value="سه شنبه">سه شنبه</option>
            <option value="جهارشنبه">چهار شنبه</option>
            <option value="پنجشنبه">پنجشنبه</option>
            <option value="جمعه">جمعه</option>
        </select>

        <select name="time" id="2">
            {time.map(time => <option>{time}</option>)}
        </select>

        <span>{name}</span>
    </div>
  )
}

export default AddingTrips