import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../GlobalContext/globalContext";





function related_listings() {
      //contexts

      const [products,setProducts] = useState()

//   const globalContext = useContext(Context);
//   const {domain, setIsLoggedIn,setGlobalProducts} = globalContext;

    axios
      .post(`http://10.0.3.2:8000/api/v1/listings/search/`,{
        home_type:"Condo",
        city:''
      })
      .then(response => {
          console.log(response.data)
      
      
      })

      .catch(error => console.log(error));

}

export {related_listings}