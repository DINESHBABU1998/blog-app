import React,{ useContext } from 'react'
import { res } from '../api/Apib'

const Bollywood = () => {
  const [bollywood,setBollywood] = useContext(res)
  console.log(bollywood);
  return (
    <>
    <div className="page">
      
      {bollywood.map((item) => {
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

export default Bollywood