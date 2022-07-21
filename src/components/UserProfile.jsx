import React from 'react'
import { MdOutlineCancel } from "react-icons/md";

import { Button } from '.'
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from "../data/avatar.jpg";

const UserProfile = () => {
  const { currentColor, handleCloseClick } = useStateContext();

  return (
    <div className='absolute nav-item bg-white right-1 top-16 p-8 rounded-lg w-96 dark:bg-[#42464D]'>
      <div className='flex justify-between items-center'>
        <p className='font-semibold text-lg dark:text-gray-200'>User Profile</p>
        <Button 
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          onClick={handleCloseClick}
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className='flex gap-5 items-center mt-6 border-color border-b-1 pb-6'>
        <img src={avatar} alt="user profile" className='rounded-full h-24 w-24' />
        <div>
          <p className='font-semibold text-xl dark:text-gray-200'>Prashant Mishra</p>
          <p className='text-gray-500 dark:text-gray-400 text-sm'>Administrator</p>
          <p className='text-gray-500 text-sm font-semibold dark:text-gray-400'>pgmd.9873@gmail.com</p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color hover:bg-light-gray cursor-pointer p-4 dark:hover:bg-[#42464D]">
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>
            <div>
              <p className='font-semibold dark:text-gray-200'>{item.title}</p>
              <p className='text-gray-500 text-sm dark:text-gray-400'>{item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-5'>
          <Button 
            color="white"
            bgColor={currentColor}
            width="full"
            text="Logout"
            borderRadius='10px'
          />
      </div>
    </div>
  )
}

export default UserProfile