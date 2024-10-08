import React, { useState, useEffect } from 'react'
import { Button } from 'react-native'
export default function effectCallBack() {

  const [count, setCount] = useState(0);
  const countEvery3 = Math.floor(count/3)
  useEffect(()=>{
    console.log(countEvery3)
  })
  return (
   <Button
        title={`Increament ${count}`}
        onPress = {()=>{
          setCount(count + 1)
        }}
   />
  );
}



