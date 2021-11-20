import React, {useState} from 'react';

import { useCount } from './CountContext'

const ViewCounter = () => {
  // set state count from useCount
  const count = useCount()
  console.log(count)
  return (
    <div>
      {/* change 0 with count from context */}
      Count is {count.state.count}
    </div>
  );
}

export default ViewCounter;