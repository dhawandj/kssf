

     import React from 'react'
     
     export default function CardBox( {children}) {
       return (
        <div className="cardbox">
        <div className="cardContainer">
        {children}
        </div>
      </div>
       )
     }
     