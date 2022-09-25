import React, {useState} from 'react'
import Login from '../loginpage/Login'
import ReservationPage from '../reservation/ReservationPage'


const LoginContainer = () => {

    const [page, setPage] = useState(0);

    // const [data, setData] = useState({
    //     studentNumber: "" ,
    //     melliCode: "",
    // });

    const PageDisplay = () => {
        if (page === 0) {
            return <Login setPage={setPage} />
        } else {
            return <ReservationPage setPage={setPage}/>
        }
    }

  return (
    <div>
        {PageDisplay()}
    </div>
  )
}

export default LoginContainer