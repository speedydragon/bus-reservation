import React from 'react'

const DayDetails = ({ hour , minute , source , destination}) => {
  return (
    <div className='flex'>
        <div className="mr-5">
            <span className='mr-[2px]'>{hour}</span>
            <span className='mr-[2px]'>:</span>
            <span>{minute}</span>
        </div>

        <span className='mr-[180px]'>{source}</span>

        <span className="mr-[185px]">{destination}</span>
        
        <button className="bg-red-600 mr-24 mb px-11  py-3 text-white rounded-md border-none text-xs font-black text-center hover:bg-red-700" >حذف</button>
    </div>
  )
}

export default DayDetails