import React from 'react'

export default function ScrollingText() {
  return (
    <div>
      <marquee 
        behavior="scroll" 
        direction="left" 
        scrollamount="6" 
        style={{
          fontSize: '20px', 
          color: 'blue', 
          backgroundColor: 'white', 
          padding: '10px', 
          width: '100%', 
          zIndex: '1000', 
          bootom: '10',
          border : '2px solid green'
        }}
      >
        এই ওয়েবসাইটে বিক্রয়যোগ্য জমি এবং বাড়ির লিস্ট পাওয়া যায়।
      </marquee>
    </div>
  )
}
