'use server'

import { cookies } from "next/headers";
import { getSession, encrypt } from "./lib";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


const rooturl = "http://127.0.0.1:8000/api"



export async function SigninAction(formData: FormData) {


    const email = formData.get("email");
    const password = formData.get("password");

    try {
        const res = await fetch(`${rooturl}/signin/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        console.log(res.status)

        if (res.status === 200) {
            console.log(data);
            const {
                message= "No message",
                token: { access, user,user_role }
            } = data;

            console.log(access);
            console.log(message);

            // Setting cookies
            cookies().set('session', access);
            cookies().set('user_id', user);
            cookies().set('user_role', user_role);

            // Redirecting to the home page
         
           
            return({"message":message, "success":true})
            
        
        } else {
            console.log(data)
            const { message} = data || {};

    
        return({"message": message, "success":false})
    
    
        }
    } catch (error) {
       
        // Handle errors

    }
}

export async function SignupAction(formData: FormData) {


    const email = formData.get("email");
    const password = formData.get("password");

    try {
        const res = await fetch(`${rooturl}/signup/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        console.log(res.status)

        if (res.status === 201) {
            console.log(data);
            const {
                message= "No message",
                token: { access, user }
            } = data;

            console.log(access);
            console.log(message);

            // Setting cookies
            cookies().set('session', access);
            cookies().set('user_id', user);

            // Redirecting to the home page
         
            const msg = data.message

            return({"message":msg, "success":true})
            
        
        } else {
            console.log(data)
            const { email = [], password = [] } = data || {};

    if (email) {
        console.log(email)
        return({"message":email[0], "success":false})
    
    } if(password) {
        return({"message":password[0], "success":false})

    }
        }
    } catch (error) {
       
        // Handle errors

    }
}

export async function handleupdatepatientinfo(user_id:number,formData:FormData) {
   const user = user_id 
    const firstname = formData.get('firstname')
    const lastname = formData.get('lastname') as string;
    const email = formData.get('email') as string;
    const country = formData.get('country') as string;
    const city = formData.get('city') as string;
    const Date_of_birth = formData.get('dateOfBirth') as string;
    const Gender = formData.get('gender') as string;
    const Contact_info = formData.get('contactInfo') as string;
    const Address = formData.get('address') as string;

    console.log(firstname,lastname,email,country,city,Date_of_birth,Gender,Contact_info,Address, user_id)


    try {
        const res = await fetch(`${rooturl}/patient_personal_info/${user_id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"user":user,"firstname":firstname,"lastname":lastname,"email":email,"country":country,"city":city,"Date_of_birth":Date_of_birth,"Gender":Gender,"Contact_info":Contact_info,"Address":Address})
        });

        const data = await res.json()
        if (res.status === 200){
         const {user} = data
         return{"success": true}
        
        }else{
            console.log('data not acceptable',data)
        }
       
    } catch (error) {
        
    }
    
    
    }


export default async function logoutroute(){
   const delete_session = cookies().delete('session')
   const delete_user = cookies().delete('user_id')
   const delelte_user_role = cookies().delete('user_role')
   return true
}


