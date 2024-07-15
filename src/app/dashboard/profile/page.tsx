


import { getSession } from '@/app/lib';
import Link from 'next/link';
import { Redirect } from 'next';
import Dash_profile_render from '../../components/dash_profile_render'
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

async function getdetails(){
    const user = cookies().get('user_id')?.value;
    console.log(user)
     const rooturl = "http://127.0.0.1:8000/api"
     const res = await fetch(`${rooturl}/patient_personal_info/${user}`)
     const data = await res.json() 
     if(res.ok){
        return data
     }else{
        return console.log('data not fetched')
     }
     return data


}

export default async function Profile() {
    await new Promise(reslove => setTimeout(reslove, 3000))
    const user = cookies().get('user_id')?.value;
    const session = await getSession()
    if(session){
       const data = await getdetails()  
       console.log(data)  
    }else{
     redirect('/accounts/sign-in')
    }
    
 

    return (
        <div>
            <header className="bg-white shadow md:pt-12 pt-6">
                <div className="container">
                    <div className="flex items-center mb-5 md:space-x-8 space-x-4">
                        <Link href="/profile">
                            <div className="overflow-hidden relative rounded-lg shadow-sm md:w-24 md:h-20 h-12 w-16">
                                <div className=''></div>
                            </div>
                        </Link>
                        <div className="flex-1">
                            <h3 className="md:text-3xl sm:text-2xl text-xl md:mb-2 font-semibold capitalize">globaltrusttrade</h3>
                            <div className="flex items-center justify-between">
                                <div className="flex space-x-3 items-center text-sm md:pt-1 text-gray-500">
                                    <div>User Dashboard</div>
                                    <div className="md:block hidden">·</div>
                                    <div className="md:flex items-center space-x-0.5 text-yellow-400 hidden"></div>
                                </div>
                                <div className="flex space-x-3 items-center lg:hidden">
                                    <Link href="#"></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav className="">
                        <ul className="flex gap-10 justify-center items-center text-xl">
                            <li className="active"><Link href="/dashboard">Dashboard</Link></li>
                            <li><Link href="/dashboard/profile">Profile Info</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            
            <Dash_profile_render user={user}/>
           
        </div>
    );
}
