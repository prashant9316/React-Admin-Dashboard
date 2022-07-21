import React from 'react'
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { useStateContext } from '../contexts/ContextProvider';
import { chatData } from '../data/dummy';


const Notification = () => {
  const { currentColor, handleCloseClick } = useStateContext();

  return (
    <div className='bg-half-transparent w-full h-screen fixed top-0 right-0 z-10'>
      <div className='bg-white absolute right-5 md:right-40 top-16 nav-item p-8 rounded w-96'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-3'>
            <p className='font-semibold text-lg dark:text-gray-200 '>Notifications</p>
            <button 
              type="button"
              className='text-white bg-orange-500 text-xs rounded p-1'
            >
              5 New
            </button>
          </div>
          <Button 
            icon={<MdOutlineCancel />}
            color="rgb(171, 153, 180)"
            bgHoverColor="light-gray"
            onClick={handleCloseClick}
            size="2xl"
            borderRadius='50%'
          />
        </div>
        <div className='mt-5'>
          {chatData.map((item, index) => (
            <div key={index} className="p-3 border-b-1 border-color flex items-center leading-8 gap-3">
              <img src={item.image} alt={item.message} className='w-10 h-10 rounded-full' />
              <div>
                <p className='font-semibold dark:text-gray-200'>{item.message}</p>
                <p className='text-sm text-gray-500 dark:text-gray-400'>{item.desc}</p>
              </div>
            </div>
          ))}
          <div className='mt-5'>
            <Button 
              color="white"
              bgColor={currentColor}
              text="See All Notifications"
              borderRadius="10px"
              width="full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification