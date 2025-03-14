import { FilePenLine, FolderPen, FolderPenIcon, Mail, MapPinHouse, MessageSquareDot, Pencil, Star, TabletSmartphone, User, UserPen, UserPenIcon, UserRoundCog } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import profileImg from "@/assets/profile-image.jpg";
const Profile = () => {

    const [isEditing, setIsEditing] = useState(false);
    const [username,setusername]=useState("shinan 363");
    const [Lastname, setLastname] = useState('Mohamed Sanan');
    const [firstName, setFirstName] = useState('Mohamed Sanan');
    const [Email,setEmail]=useState('shinanmohamed363@gmail.com');
    const [Rating,setRating]=useState('3/5');
    const [Mobile,setmobile]=useState('+94740245152')
    const [Address,setAddress]=useState('kotiyakumbura')
    
    
    const handleEditToggle = () => {
        setIsEditing(!isEditing);
      };
      const handleLastNameChange = (e) => {
        setLastname(e.target.value);
      };
      const handleuserNamechange = (e) => {
        setusername(e.target.value);
      };
      const handleEmail=(e)=>{
        setusername(e.target.value);
      };
      const handleRating=(e)=>{
        setRating(e.target.value);
      };

      const handleMobile=(e)=>{
        setmobile(e.target.value);
      };
      const handleAddress=(e)=>{
        setAddress(e.Address.value);
      };



      const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
      };
  return (
    <div className='flex flex-col gap-y-4'>
        <h1 className='title'>Settings</h1>
        <div className='card align-top'>
                
            <div className='grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-1 lg:grid-cols-1   xl:grid-cols-1 '>
                  
                    <div className='grid grid-cols-1 gap-y-2'>
                        
                        <div className="card-header flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                        <UserPen size={20} />
                                    </div>
                                    <p className="card-title">Personal Information</p>
                                </div>
                                
                        </div>

                    
                            <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                                        <div className="card-header flex items-center justify-end">
                                            <div className="flex items-center gap-2">
                                            <button
            onClick={handleEditToggle}
            className="flex items-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-950 p-1 text-blue-500 transition-colors hover:bg-blue-500/30 dark:bg-blue-600/20 dark:text-blue-600 dark:hover:bg-blue-600/30 "
          >
              <UserRoundCog size={18} />
            <span>{isEditing ? 'Save' : 'Edit'}</span>
          </button>
                                            </div>
                                        </div>

                            
                                   
                                        <div className='settings-lable  '>
                                                        <div className="card-header ">
                                                                    <div className="lable_and_icone">
                                                                        <User size={15} />
                                                                    </div>
                                                                    <p className="profile-lable">Profile Picture</p>
                                                        </div> 
                                                        <div className="card-header">
                                                                    
                                                        <div className="sm:w-25 sm:h-25 rounded-full overflow-hidden bg-gray-200 size-24">
                                                        <img
                                                            src={profileImg}
                                                            alt="Profile Picture"
                                                            className="w-full h-full object-cover"
                                                        />
                                                        </div>
                                                        </div> 
                                                        </div>
                                        <div className='settings-lable '>
                                                        <div className="card-header ">
                                                                    <div className="lable_and_icone">
                                                                        <UserPen size={15} />
                                                                    </div>
                                                                    <p className="profile-lable">username</p>
                                                        </div> 
                                                        <div className="card-header">
                                                                    
                                                        {isEditing ? (
                                                            <input
                                                            type="text"
                                                            value={username}
                                                            onChange={handleuserNamechange}
                                                            className=" profile-lable  bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:text-slate-50 border-b-2 border-blue-500 focus:outline-none focus:border-blue-600 break-words w-full"
                                                            />
                                                        ) : (
                                                            <p className="profile-lable break-words w-full">{username}</p>
                                                        )}
                                                        </div> 
                                        </div>

                                        <div className="settings-lable">
                                                        <div className="card-header">
                                                        <div className="lable_and_icone">
                                                            <FolderPenIcon size={15} />
                                                        </div>
                                                        <p className="profile-lable">First Name</p>
                                                        </div>
                                                        <div className="card-header">
                                                        {isEditing ? (
                                                            <input
                                                            type="text"
                                                            value={firstName}
                                                            onChange={handleFirstNameChange}
                                                            className=" profile-lable  bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:text-slate-50 border-b-2 border-blue-500 focus:outline-none focus:border-blue-600 break-words w-full"
                                                            />
                                                        ) : (
                                                            <p className="profile-lable break-words w-full">{firstName}</p>
                                                        )}
                                                        </div>
                                        </div>
                                        <div className='settings-lable '>
                                                        <div className="card-header ">
                                                                    <div className="lable_and_icone">
                                                                        <FolderPenIcon size={15} />
                                                                    </div>
                                                                    <p className="profile-lable">Last Name</p>
                                                        </div> 
                                                        <div className="card-header">
                                                                    
                                                        {isEditing ? (
                                                            <input
                                                            type="text"
                                                            value={Lastname}
                                                            onChange={handleLastNameChange}
                                                            className=" profile-lable  bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:text-slate-50 border-b-2 border-blue-500 focus:outline-none focus:border-blue-600 break-words w-full"
                                                            />
                                                        ) : (
                                                            <p className="profile-lable break-words w-full">{Lastname}</p>
                                                        )}
                                                        </div> 
                                        </div>
                                        <div className='settings-lable '>
                                                        <div className="card-header ">
                                                                    <div className="lable_and_icone">
                                                                        <Mail size={15} />
                                                                    </div>
                                                                    <p className="profile-lable">Email</p>
                                                        </div> 
                                                        <div className="card-header">
                                                                    
                                                        {isEditing ? (
                                                            <input
                                                            type="text"
                                                            value={Email}
                                                            onChange={handleEmail}
                                                            className=" profile-lable  bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:text-slate-50 border-b-2 border-blue-500 focus:outline-none focus:border-blue-600 break-words w-full"
                                                            />
                                                        ) : (
                                                            <p className="profile-lable break-words w-full">{Email}</p>
                                                        )}
                                                        </div> 
                                        </div>
                                        <div className='settings-lable '>
                                                        <div className="card-header ">
                                                                    <div className="lable_and_icone">
                                                                        <Star size={15} />
                                                                    </div>
                                                                    <p className="profile-lable">Rating</p>
                                                        </div> 
                                                        <div className="card-header">
                                                                    
                                                        {isEditing ? (
                                                            <input
                                                            type="text"
                                                            value={Rating}
                                                            onChange={handleRating}
                                                            className=" profile-lable  bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:text-slate-50 border-b-2 border-blue-500 focus:outline-none focus:border-blue-600 break-words w-full"
                                                            />
                                                        ) : (
                                                            <p className="profile-lable break-words w-full">{Rating}</p>
                                                        )}
                                                        </div> 
                                        </div>
                                        <div className='settings-lable '>
                                                        <div className="card-header ">
                                                                    <div className="lable_and_icone">
                                                                        <TabletSmartphone size={15} />
                                                                    </div>
                                                                    <p className="profile-lable">Mobile</p>
                                                        </div> 
                                                        <div className="card-header">
                                                                    
                                                        {isEditing ? (
                                                            <input
                                                            type="text"
                                                            value={Mobile}
                                                            onChange={handleMobile}
                                                            className=" profile-lable  bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:text-slate-50 border-b-2 border-blue-500 focus:outline-none focus:border-blue-600 break-words w-full"
                                                            />
                                                        ) : (
                                                            <p className="profile-lable break-words w-full">{Mobile}</p>
                                                        )}
                                                        </div> 
                                        </div>
                                        <div className='settings-lable '>
                                                        <div className="card-header ">
                                                                    <div className="lable_and_icone">
                                                                        <MapPinHouse size={15} />
                                                                    </div>
                                                                    <p className="profile-lable">Address</p>
                                                        </div> 
                                                        <div className="card-header">
                                                                    
                                                        {isEditing ? (
                                                            <input
                                                            type="text"
                                                            value={Address}
                                                            onChange={handleAddress}
                                                            className=" profile-lable  bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:text-slate-50 border-b-2 border-blue-500 focus:outline-none focus:border-blue-600 break-words w-full"
                                                            />
                                                        ) : (
                                                            <p className="profile-lable break-words w-full">{Address}</p>
                                                        )}
                                                        </div> 
                                        </div>
                        

                                        
                            
                          
                                              </div>
                    

                    </div>
                    <div className='grid grid-cols-1 gap-y-2'>
                        
                        <div className="card-header flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                        <MessageSquareDot size={20} />
                                    </div>
                                    <p className="card-title">suggestions (Display in Manufecture Dashboard)</p>
                                </div>
                                
                        </div>

                    
                            <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                            <div className="card-header flex items-center justify-end">
                                <div className="flex items-center gap-2">
                                        <button 
                                        className="flex items-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-950 p-1 text-blue-500 transition-colors hover:bg-blue-500/30 dark:bg-blue-600/20 dark:text-blue-600 dark:hover:bg-blue-600/30 dark:hover:border-s-black "
                                        >
                                        <FilePenLine size={18} />
                                        <span>Edit</span>
                                    </button>
                                </div>
                            </div>

                            

                            <div className='settings-lable '>
                                                        <div className="card-header ">
                                                                    <div className="lable_and_icone">
                                                                        <Pencil size={8} />
                                                                    </div>
                                                                    <p className="profile-lable">Address</p>
                                                        </div> 
                                                        <div className="card-header">
                                                                    
                                                        {isEditing ? (
                                                            <input
                                                            type="text"
                                                            value={Address}
                                                            onChange={handleAddress}
                                                            className=" profile-lable  bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:text-slate-50 border-b-2 border-blue-500 focus:outline-none focus:border-blue-600 break-words w-full"
                                                            />
                                                        ) : (
                                                            <p className="profile-lable break-words w-full">{Address}</p>
                                                        )}
                                                        </div> 
                                        </div>

                                       

                        
                            
                          
                                              </div>
                    

                    </div>
                   
        
      

            </div>
        </div>
    </div>
  )
}
export default Profile;