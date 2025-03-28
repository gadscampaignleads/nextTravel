import React, { createContext, useContext,useState } from 'react'
import axios from "axios";
const HotelContext = createContext();
export const useHotel = () =>useContext(HotelContext);


export const HotelProvider =({children}) =>{

    const [hotels, setHotels] = useState([]);
     const [loading, setLoading] = useState(false);
     const [errorCode, setErrorCode] = useState(null);

    const fetchHotels = async (searchParams) => {
        try {
            setLoading(true);
            setErrorCode(null);
            const response = await axios.get(`/api/v1/hotels/search-hotels?${searchParams}`);


            if (response.data.length === 0) {
                setErrorCode("There is no Hotel available now...");
            } else {
                setHotels(response.data);
                // console.log("Fetched Hotels:", response.data);


            }

            setLoading(false);

        } catch (error) {
            console.error("Error fetching hotels:", error);
            setErrorCode("Failed to fetch flight hotels. Please try again later.");
        }
        finally {
            setLoading(false);
        }

    };
    return(
        <HotelContext.Provider value={{hotels,loading,errorCode,fetchHotels,setHotels}}>
            {children}
            
        </HotelContext.Provider>
    )


}


export default HotelContext