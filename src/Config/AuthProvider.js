import React, { useContext ,useState ,useEffect} from 'react';
import { auth } from './Firebase';


const AuthContext = React.createContext();

//usecontext function
export const useAuth = () =>{
    return useContext(AuthContext);
} 

export function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState('');
    const [loading,setLoading] = useState(true);

    // on mount see if there is a currently signed in user if yes setcurrentuser to true and loading to false
    useEffect (()=>{
    const aut = auth.onAuthStateChanged(user => {
        setCurrentUser(user);
        setLoading(false);
    })

    return aut},
    [])

    
    function signup (email,password){
        return  auth.createUserWithEmailAndPassword(email,password);
    }

    const login =(email,password) => auth.signInWithEmailAndPassword(email,password);
    const passwordreset =(email) => auth.sendPasswordResetEmail(email);
    const updatePassword =(password) => currentUser.updatePassword(password);
    const updateEmail =(email) => currentUser.updateEmail(email);
    const anonymous =()=> auth.signInAnonymously();
    const Logout=()=>{
        return auth.signOut()
    }

    const value ={
        currentUser,
        signup,
        login,
        passwordreset,
        updatePassword,
        updateEmail,
        Logout,
        anonymous
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

