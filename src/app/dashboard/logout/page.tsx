import { redirect } from "next/navigation";
import logoutroute from "@/app/serveractions";

export default async function logout(){

       const session= true
    if(session){
       redirect('/accounts/sign-in')
    }
    else{
        redirect('/accounts/sign-in')
    }

    return(
        <div>
            hello
        </div>
    )
}