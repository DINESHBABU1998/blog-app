import React,{ useContext } from 'react'
import { res2 } from '../api/Apit'

const Technology = () => {
  const [technology]  = useContext(res2)
  console.log(technology);
  return (
    <>
      <div className="page">
      
      {technology.map((item) => {
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

export default Technology;
