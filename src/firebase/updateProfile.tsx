import { doc, setDoc } from "firebase/firestore";
import { db } from "../hooks/useAuth";
import { setLoading } from "../slices/loadingSlice";
import { setMessage } from "../slices/messsageSlice";
import { User } from "../utils/types"
import { uploadImage } from './uploadImage';

export const updateProfile = async (setUser: (value:User) => void, image:any, user:User, name:string, role: "user" | "company", dispatch:any) => {
    dispatch(setLoading({message:'Updating profile', show:true}))

    uploadImage(image, user.uid).then(async(promise:any)=> {
        if(promise){
            const profileData:User = {
              email:user.email,
              name,
              role,
              uid:user.uid,
              profileImage:promise.url,
            }
            await setDoc(doc(db, "users", user.uid), profileData)
            .then((a)=> (    
                dispatch(setLoading({message:'Updating profile', show:false})),
                dispatch(setMessage({show:true, type:"SUCCESS", text:'Profile was updated'})), 
                setUser(profileData)))
            .catch((e) => (
            dispatch(setLoading({message:'Updating profile', show:true})),
            dispatch(setMessage({show:true, type:"ERROR", text:'Something went wrong'}))))
        }
        else {
            dispatch(setLoading({message:'Updating profile', show:false}))
            dispatch(setMessage({show:true, type:"ERROR", text:'Something went wrong'}))
        }
    })

}