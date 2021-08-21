import React, {useState, createContext} from "react"

export const RatingContext = React.createContext();
export const RatingProvider = (props) =>{
    
        const [ratings,setRating] = useState(0)
        
    return(
<RatingContext.Provider value={[ratings,setRating]}>
{props.children}
</RatingContext.Provider>
    );
}