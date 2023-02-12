   const pattern =  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/

const Validation = (value, name) => {
      if(name === 'email') {
        if(value.length <1) {
            return {
                error : true,
                errorMessage: 'Email is required'
            }
        }
        else if (!pattern.test(value.toLowerCase())) {
            return {
                error:true,
                errorMessage:'Enter valid email'
            }
        }
      }
      else {
        if(value.length <1){
            return {
                error : true,
                errorMessage: 'Password is required'
            }
        }
        else if(value.length <4){
            return {
                error : true,
                errorMessage: 'Minimum 4 Characters required'
            }
        }
      }

      return {
        error:false,
        errorMessage:''
      }
}

export default Validation
