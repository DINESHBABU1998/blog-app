import React,{ useContext } from 'react'
import { res3 } from '../api/Apif'

const Fitness = () => {
  const [fitness] = useContext(res3)
  console.log(fitness);
  return (
    <>
      <div className="page">
      
      {fitness.map((item) => {
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

export default Fitness;