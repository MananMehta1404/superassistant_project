import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

const ariaLabel = { 'aria-label': 'description' };

const Inputs = () => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <Input placeholder="Your answer" inputProps={ariaLabel} />
    </Box>
  );
}

const ShortAnswer = () => {
  return (
    <div className='w-[55%] m-2 p-7 rounded-xl bg-white'>
          <p className='text-[16px]'>Short Answer <span className='text-red-500'>*</span></p>
          <div className='mt-7 text-[12px]'>
            <Inputs />
          </div>
        </div>
  )
}

export default ShortAnswer
