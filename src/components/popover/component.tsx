import React from 'react'
import { Popover as CustomPopover, PopoverContent, PopoverTrigger } from './ui'
import { Label } from '../label/ui'
import { Input } from '../input/ui'

type props = {
    triggerComponent?: React.ReactNode;
    children?: React.ReactNode;
}

const Popover = ({...props}: props) => {
  return (
    <CustomPopover>
      <PopoverTrigger asChild>
        <button className='border-none outline-none'>
            {props.triggerComponent}
        </button>
      </PopoverTrigger>
      {props.children && <PopoverContent className="w-80 bg-background-primary">
        {props.children}
      </PopoverContent>}
    </CustomPopover>
  )
}

export default Popover