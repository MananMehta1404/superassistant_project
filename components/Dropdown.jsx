'use client'

import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

const SelectIndicator = () => {
  return (
    <Select
      placeholder="Choose"
      indicator={<KeyboardArrowDown />}
      sx={{
        width: 200,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="option1">Option 1</Option>
      <Option value="option2">Option 2</Option>
      <Option value="option3">Option 3</Option>
    </Select>
  );
}

const Dropdown = () => {
  return (
    <div className='w-[55%] m-2 p-7 rounded-xl bg-white'>
          <p className='text-[16px]'>Dropdown <span className='text-red-500'>*</span></p>
          <div className='mt-7 text-[15px]'>
            <SelectIndicator />
          </div>
        </div>
  )
}

export default Dropdown
