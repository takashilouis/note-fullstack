import { createContext, useEffect, useState } from "react";
import { getAuth } from 'firebase/auth';
import { useNavigation } from 'react-router-dom'

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const [user, setUser] = useState({});
    const auth = getAuth();
    const navigate = useNavigation();

    useEffect(() => {
        const unsubcribed = auth.onIdTokenChanged((user) => {
            console.log('[From AuthProvider]',{user});
            if(user?.uid){
                setUser(user);
                localStorage.setItem('accessToken',user.accessToken);
                return;
            }
    
            //reset user info
            setUser({});
            localStorage.clear();
            navigate('/login');
        });
        
        return () => {
            unsubcribed();
        };
    },[auth]);
    
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}