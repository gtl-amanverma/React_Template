import React from 'react'
import { Switch as CustomSwitch } from './ui'
import { Label } from '../label/ui'

const Switch = () => {
  return (
    <div className="flex items-center space-x-2">
      <CustomSwitch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}

export default Switch