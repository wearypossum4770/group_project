

const initalState = {
    username:"",
    appren_first_name:"",
    appren_last_name:"",  
    appren_sup_first_name:"",
    appren_sup_last_name:"",
    prof_occupation:"",
    shop_name:"",
    shop_license_number:"",
    shop_address:"",
    period_ending:"",
    year_ending:"",
    days_absent:"",
    written_grade:"",
    mailing_street1: "",
    mailing_street2: "",
    mailing_city: "",
    mailing_state: "",
    mailing_zipcode: "",
    additional_notes:"",
    appren_signature:"",
    appren_sup_signature:"",
}


const userReducers = (state = initalState, action) =>{
    switch (action.type) {
        default:
            return state
    }
}


export default userReducers