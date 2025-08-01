'use client'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'

import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import { ChevronDownIcon } from 'lucide-react'
import React from 'react'

const ReservetableFrom = () => {
    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)
    return (
        <div>
            <form className="flex flex-col  gap-8 text-black w-full">
                <div className='flex flex-col gap-4 md:flex-row w-full'>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"

                        className="p-3 w-full md:w-1/2 border-b-2 bg-white text-sm outline-none"
                        required
                    />
                    <select
                        id="persons"
                        name="persons"

                        className="p-3 w-full md:w-1/2 border-b-2  bg-white text-sm outline-none "
                    >
                        <option>1 Person</option>
                        <option>2 Persons</option>
                        <option>3 Persons</option>
                        <option>4 Persons</option>
                        <option>5 Persons</option>
                        <option>6 Persons</option>
                        <option>10 Persons</option>
                        <option>15 Persons</option>
                    </select>
                </div>

                <div className="flex flex-col md:flex-row gap-4 w-full ">
                    <div className="flex flex-col gap-3 w-full md:w-1/2 border-b-2">

                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    id="date-picker"
                                    className=" border-none  justify-between font-normal"
                                >
                                    {date ? date.toLocaleDateString() : "Select date"}
                                    <ChevronDownIcon />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    captionLayout="dropdown"
                                    onSelect={(date) => {
                                        setDate(date)
                                        setOpen(false)
                                    }}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className=" border-b-2 outline-none w-full md:w-1/2">

                        <Input
                            type="time"
                            id="time-picker"
                            step="1"
                            defaultValue="10:30:00"
                            className="bg-background w-full border-none outline-none appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                        />
                    </div>
                </div>




                <div className="w-56 mt-6 mx-auto">
                    <button
                        type="submit"
                        className="bg-[#B31217] text-white py-3 px-8 rounded-lg text-[16px] font-medium  w-full"
                    >
                        Book Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ReservetableFrom
