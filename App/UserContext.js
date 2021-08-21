import React, {useState, createContext} from "react"

export const UserContext = React.createContext();
export const UserProvider = (props) =>{
    
        const [user,setUser] = useState({username:'Taire Boss',id:1})
        
    return(
<UserContext.Provider value={[user,setUser]}>
{props.children}
</UserContext.Provider>
    );
}