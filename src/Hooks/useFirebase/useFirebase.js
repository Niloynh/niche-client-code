import initializeFirebase from "../../Pages/Login/Firebase/firebase.init"
import {useState, useEffect} from 'react';
import {getAuth,  onAuthStateChanged,signOut} from "firebase/auth";
// initialize firebase app 
initializeFirebase()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState('')
    const auth = getAuth()

    // observer user state 
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user)
            }
            else{
                setUser({ })
            }
            setIsloading(false)
        })
        return () => unsubscribe
    },[])

    const logOut = () => {
        setIsloading(true)
        signOut(auth)
        .then(() => {
            setUser({ })
        })
        .finally(() => setIsloading(false));
    }
    const savedUser = (email, displayName) => {
        const user = {email, displayName}
        fetch('https://mighty-garden-13181.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        savedUser,
        isLoading,
        error,
        logOut
    }
}

export default useFirebase;