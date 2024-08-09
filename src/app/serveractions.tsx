'use server'
import { cookies } from "next/headers";
import { getSession, encrypt } from "./lib";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


const rooturl = "http://127.0.0.1:8000/api"



export async function SignupAction(formData:FormData) {


    const newform = {
        first_name: formData.get('firstname'),
        last_name: formData.get('lastname'),
        email: formData.get('email'),
        phone_number: formData.get('phonenumber'),
        Gender: formData.get('gender'),
        password: formData.get('password'),
      };

      console.log(newform)

    try {
        const res = await fetch(`${rooturl}/signup/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newform)
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
            return {"message":message, "success":false}

    }
}
    catch (error) {
       
        // Handle errors

    }
}


export async function handleupdatepatientinfo(user:any,form:any) {
   const id = user
    const first_name = form.first_name as string || '';
    const last_name = form.last_name as string || ''
    const email = form.email as string|| ''
    const country = form.country as string|| ''
    const city = form.city as string || ''
    const Date_of_birth = form.Date_0f_birth as string|| ''
    const Gender = form.Gender as string|| ''
    const phone_number = form.phone_number as string|| ''
    const Address = form.Address as string|| ''

    console.log(id,first_name,last_name,email,country,city,Date_of_birth,Gender, phone_number,Address)


    try {
        const res = await fetch(`${rooturl}/patient_personal_info/${user}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"firstname":first_name,"lastname":last_name,"email":email,"country":country,"city":city,"Date_of_birth":Date_of_birth,"Gender":Gender,"Contact_info":phone_number,"Address":Address})
        });

        const data = await res.json()
        if (res.status === 200){
     
         console.log(data)
         return{"success": true}
        
        }else{
            console.log(data)
            return{"success": false}
        }
       
    } catch (error) {
        
    }
    
    
    }


export default async function logoutroute(){
    console.log('movied')
   const delete_session = cookies().delete('session')
   const delete_user = cookies().delete('user_id')
   const delelte_user_role = cookies().delete('user_role')
   console.log('movied')
   return true
}



export async function validatebooking(){
    const session = cookies().get('session')?.value
    const res = await fetch(`${rooturl}/validatebooking/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session}`
        },
    })

    const data = await res.json()

    if(res.status === 200){
    return {"show_model": true}
    }else{
        logoutroute()
      return {"show_model":false}
    }
}


export async function add_booking(formData:FormData){

      
  
       const  patient= formData.get('patient') 
       const  doctor= formData.get('doctor') 
      const booking_type= formData.get('booking_type') 
      const date= formData.get('date') 
      const time= formData.get('time')

      

     

    try {
        const res = await fetch(`${rooturl}/booking/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(doctor)
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
 