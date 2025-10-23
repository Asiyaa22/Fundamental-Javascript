import React, {useEffect} from 'react'
import axios from 'axios';

const Data = () => {
    const API_Url = "https://api.github.com/users";
    const getData = async () => {
        const data = await axios.get(API_Url);
        console.log(data);
    }
    useEffect(() => {
       return getData();
    }, [])


  return (
    <div>
        <h3>Learning Axios</h3>
    </div>
  )
}

export default Data