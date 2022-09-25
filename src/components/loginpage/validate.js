export const validate = (data) => {

    const errors = {};

        if (!data.studentNumber) {
        errors.studentNumber = "هنوز شماره دانشجویی خود را وارد نکرده اید"

        }else if (data.studentNumber.length < 10) {
            errors.studentNumber = "شماره دانشجویی نباید از ده رقم کم تر باشد"
            
        } else {
            delete errors.studentNumber
        }


        if (!data.melliCode) {
            errors.melliCode = "هنوز کد ملی خود را وارد نکرده اید"

        } else if ((data.melliCode[0] === "0" && data.melliCode[1] === "0" && data.melliCode[2] === "2") === false ) {
            errors.melliCode = "فرمت کد ملی وارد شده اشتباه است"

        } else if (data.melliCode.length < 10) {
            errors.melliCode = "کد ملی نباید از ده رقم کم تر باشد"
            
        } else {
            delete errors.melliCode
        }

    return errors;
}

// if (!data.email) {
    //     errors.email = "هنوز ایمیل خود را وارد نکرده اید"
    // } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    //     errors.email = "ایمیل نامعتبر است"
    // } else {
    //     delete errors.email
    // }

    // if (!data.password) {
    //     errors.password = "هنوز پسورد خود را وارد نکرده اید"
    // } else if (data.password.length < 6) {
    //     errors.password = "پسورد باید از ۶ کاراکتر یا بیشتر تشکیل شده باشد"
    // } else {
    //     delete errors.password
    // }

   

        // if (!data.name.trim()) {
        //     errors.name = "هنوز نام خود را وارد نکرده اید"
        // } else {
        //     delete errors.name
        // }

        // if (!data.confirmPassword) {
        //     errors.confirmPassword = "پسورد قبلی خود را وارد کنید"
        // } else if (data.confirmPassword !== data.password) {
        //     errors.confirmPassword = "پسورد وارد شده با پسورد قبلی مطابقت ندارد"
        // } else {
        //     delete errors.confirmPassword
        // }
        