import { BellRing, CalendarDays, Check, Database, PencilLine, Trash, X } from 'lucide-react';
import { overviewData, recentSalesData, topProducts } from "@/constants";
import React from 'react'

const notification = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <h1 className='text-3xl font-semibold text-slate-900 transition-colors dark:text-slate-50'>
        Notification
      </h1>
        <div className='card grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-5 grid-flow-row rounded-lg boarder  border-slate-300  bg-white p-2  transition-colors dark:border-slate-700 dark:bg-slate-900  gap-y-4  '>
            <div className='grid col-span-5 sm:col-span-5 p-1 gap-4'>
                <div  className='flex items-center gap-2 col-span-3'>
                    <div className='w-f rounded-lg bg-blue-500/20 p-2  text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600'>
                    <CalendarDays size={15} />
                    </div>
                    <div className=''>
                        <p className='card-title '>Date : 2024-05-16</p>
                    </div>
                </div>
             
               
                <div className='grid card-noboarder col-span-5 xl:col-span-3  bg-slate-100 transition-colors dark:bg-slate-950 xl:mx-5 p-4'>
                <div className="card-header justify-between ">
                   
                  
                     <p className="card-title">Final Destination : colombo</p>
                     <p className="card-title ">ORC : 12</p>
                </div>
                <div className="card-header justify-between  bg-blue-500/20 p-2 rounded-lg text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                        <p className="card-title"> Order Detailes</p>
                        <p className="card-title"> Mode: Van</p>
                    </div>
                  
                    <div className="card-body h-[200px] overflow-auto p-0 [scrollbar-width:_thin]">
                                            {recentSalesData.map((sale) => (
                                                <div
                                                    key={sale.id}
                                                    className="flex items-center justify-between gap-x-4 py-2 pr-2"
                                                >
                                                    <div className="flex items-center gap-x-4">
                                                        <img
                                                            src={sale.image}
                                                            alt={sale.name}
                                                            className="size-10 flex-shrink-0 rounded-full object-cover"
                                                        />
                                                        <div className="flex flex-col gap-y-1">
                                                            <p className="font-medium text-slate-900 dark:text-slate-50">Product: Stationary</p>
                                                            <p className="text-sm text-slate-600 dark:text-slate-400">Location: Maradhana</p>
                                                            <p className="text-sm text-slate-600 dark:text-slate-400 underline ">see more</p>
                                                        </div>
                                                    </div>
                                                   
                                                    
                                                    <div className="flex items-center gap-x-4">
                                                <button className="text-blue-500 dark:text-blue-600">
                                                    <Check size={20} />
                                                </button>
                                                <button className="text-red-500">
                                                    <X size={20} />
                                                </button>
                                            </div>
                                                   
                                                </div>
                                            ))}
                                        </div>
                </div>
                
                




                 
            </div>
        </div>
        <div className='card grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-5 grid-flow-row rounded-lg boarder  border-slate-300  bg-white p-2  transition-colors dark:border-slate-700 dark:bg-slate-900  gap-y-4  '>
            <div className='grid col-span-5 sm:col-span-5 p-1 gap-4'>
                <div  className='flex items-center gap-2 col-span-3'>
                    <div className='w-f rounded-lg bg-blue-500/20 p-2  text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600'>
                    <CalendarDays size={15} />
                    </div>
                    <div className=''>
                        <p className='card-title '>Date : 2024-05-15</p>
                    </div>
                </div>
             
               
                <div className='grid card-noboarder col-span-5 xl:col-span-3  bg-slate-100 transition-colors dark:bg-slate-950 xl:mx-5 p-4'>
                <div className="card-header justify-between ">
                   
                  
                     <p className="card-title">Final Destination : Kandy</p>
                     <p className="card-title ">ORC : 12</p>
                </div>
                <div className="card-header justify-between  bg-blue-500/20 p-2 rounded-lg text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                        <p className="card-title"> Order Detailes</p>
                        <p className="card-title"> Mode: Van</p>
                    </div>
                  
                    <div className="card-body h-[200px] overflow-auto p-0 [scrollbar-width:_thin]">
                                            {recentSalesData.map((sale) => (
                                                <div
                                                    key={sale.id}
                                                    className="flex items-center justify-between gap-x-4 py-2 pr-2"
                                                >
                                                    <div className="flex items-center gap-x-4">
                                                        <img
                                                            src={sale.image}
                                                            alt={sale.name}
                                                            className="size-10 flex-shrink-0 rounded-full object-cover"
                                                        />
                                                        <div className="flex flex-col gap-y-1">
                                                            <p className="font-medium text-slate-900 dark:text-slate-50">Product: spare parts</p>
                                                            <p className="text-sm text-slate-600 dark:text-slate-400">Location: Kegalle</p>
                                                            <p className="text-sm text-slate-600 dark:text-slate-400 underline ">see more</p>
                                                        </div>
                                                    </div>
                                                   
                                                    
                                                    <div className="flex items-center gap-x-4">
                                                <button className="text-blue-500 dark:text-blue-600">
                                                    <Check size={20} />
                                                </button>
                                                <button className="text-red-500">
                                                    <X size={20} />
                                                </button>
                                            </div>
                                                   
                                                </div>
                                            ))}
                                        </div>
                </div>
                
                




                 
            </div>
        </div>
    </div>
  )
}
export default notification;