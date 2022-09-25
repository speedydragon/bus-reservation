import React , {useState} from 'react'
import DayDetails from './DayDetails'

const DayContainer = ({name , trips}) => {

  return (
    <div className="flex mt-5">

        <div className="w-[170px]">
            <span className="text-sm">{name}</span>
        </div>

        <div className="">
           {trips.map(trip => <DayDetails
           key={trip.id}
           hour={trip.hour}
           minute={trip.minute}
           source = {trip.source}
           destination={trip.destination}
           />)}

        </div>
    </div>
  )
}

export default DayContainer