import React,{ useContext } from 'react'
import { res1 } from '../api/Apih'

const Hollywood = () => {
  const [hollywood] = useContext(res1)
  console.log(hollywood);
  return (
    <>
      <div className="page">
      
      {hollywood.map((item) => {
        return (
            <div className="card">
              <img src={item.ImageAsset} alt="Nothing" />
              <p>{item.Title}</p>
              <p>{item.BlogContent}</p>
              <p>{item.PublishedDate}</p>
              <hr />
            </div>
        );
      })}
    </div>
      <div className="right"></div>
    </>
  )
}

export default Hollywood;