import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { validate } from './validate';
import lorestanac from "../../images/lorestanac.jpeg"


const Login = ({setPage}) => {

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [data, setData] = useState({
        studentNumber: "" ,
        melliCode: "",
    });

    useEffect(() => {
        setErrors(validate(data, "signup"))
    }, [data, touched])

    const changeHandler = event => {
        
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const focusHanlder = event => {
        setTouched({ ...touched, [event.target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            alert("شما با موفقیت وارد شدید")
            setPage(prevpage => prevpage + 1)
        } else {
            alert("اطلاعات وارد شده نامعتبر است")
            setTouched({
                studentNumber:true,
                melliCode : true,
            })
        }
    }

  return (
    <div className="bg-[#fcfcfc] w-screen h-screen flex justify-center items-center">

        <div className="border border-solid border-stone-400 rounded-lg w-fit h-fit shadow-xl bg-white">
            <form onSubmit={submitHandler} className="pl-20 pr-20 pt-4" >

                <div className='flex justify-center mt-2'>
                    <img src={lorestanac} alt="Lorestanac Logo" className="h-32 w-32" />
                </div>
                
                <div className='formField mt-8 mb-6'>
                    <label className="labals">شماره دانشجویی</label>
                    <input type="number" className={(errors.studentNumber && touched.studentNumber) ? "uncompleted" : "formInput" }  name="studentNumber"  value={data.studentNumber} onChange={changeHandler} onFocus={focusHanlder}/>
                    {errors.studentNumber && touched.studentNumber && <span className="errorSpan">{errors.studentNumber}</span>}
                </div>
                
                <div className="formField mb-10">
                    <label className="labals">کد ملی</label>
                    <input type="number" className={(errors.melliCode && touched.melliCode) ? "uncompleted" : "formInput" } name="melliCode"  value={data.melliCode} onChange={changeHandler} onFocus={focusHanlder}/>
                    {errors.melliCode && touched.melliCode && <span className="errorSpan">{errors.melliCode}</span>}
                    <p>{}</p>
                </div>

                <div className="flex justify-center mb-14">           
                    <button type="submit" className="bg-blue-500 w-full py-3 text-white rounded-lg border-none text-sm font-black text-center transition-all duration-200 ease-in hover:bg-blue-600">ورود</button>
                </div>
            </form>
            </div>
        </div>
    
  )
}

export default Login