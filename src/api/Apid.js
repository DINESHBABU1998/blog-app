import React, { createContext, useState } from 'react'

export const res4 = createContext()

const Apid = (props) => {
    const [food, setFood] = useState([
    {
        "Title": " Weight Loss: 5 Refreshing Apple Salads That May Help You Lose Those Extra Kilos",
        "CategoryName": "Food",
        "PublishedDate": "March 11 2022",
        "ImageAsset": "https://i.ndtvimg.com/i/2016-09/apple-walnut-salad_500x300_41473330913.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350",
        "BlogContent": "A doctor isn't the only thing that an apple keeps away; it also helps keep excessive fat at bay! With hordes of fad diets and meal plans flooding our social media timelines, it is easy to lose all hope amongst the confusion. However, if you find yourself drowning in the sea of '10-day-weight-loss' programs, let us help you out! One of the simplest and most accessible solutions for weight loss is apple. Yes, you read that right. ",
        "Likes": "500k+"
    },
    {
        "Title": " Weight Loss Snacks: These 5 Delicious Ragi Snacks Can Help You Keep Your Weight In Check",
        "CategoryName": "Food",
        "PublishedDate": "March 11 2022",
        "ImageAsset": "https://c.ndtvimg.com/2022-03/frp7581_ragi_625x300_10_March_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
        "BlogContent": "When it comes to weight loss, most of us believe that following a strict diet would help us lose weight. And in some cases, it can. But if you are someone new who is going on a diet for the first time, it can get a bit challenging. At times, you may feel like your hunger isn't fulfilled. ",
        "Likes": "1M+"
    },
    {
        "Title": " Samara wants full biryani, takes control of Paradise Food Court",
        "CategoryName": "Food",
        "PublishedDate": "March 11 2022",
        "ImageAsset": "https://images.news18.com/ibnlive/uploads/2021/12/biryani-16400956083x2.png?impolicy=website&width=510&height=356",
        "BlogContent": "Homegrown private equity fund Samara Capital has taken control of Paradise Food Court, acquiring most of the 51% stake held by the promoters in the restaurant chain known for its iconic Hyderabadi biryani. Samara, which already held a 49% stake,",
        "Likes": "400K"
    },
    {
        "Title": " World food prices reached an all-time high in February",
        "CategoryName": "Food",
        "PublishedDate": "March 11 2022",
        "ImageAsset": "https://media.newstrack.in/uploads/business-news/economy/Mar/07/big_thumb/fOOD_62257370169a3.JPG",
        "BlogContent": "The FAO Food Price Index averaged 140.7 points in February, up 3.9% from January, 20.7% higher than a year ago, and 3.1 points higher than in February 2011. The Index tracks monthly changes in international food commodity prices. The FAO Vegetable Oils Price Index led the increase, rising 8.5% from the previous month to a new high",
        "Likes": "1M+"
    },
    {
        "Title": " After pandemic, war in Ukraine new threat to food security",
        "CategoryName": "Food",
        "PublishedDate": "March 11 2022",
        "ImageAsset": "https://img.etimg.com/thumb/msid-90132853,width-300,imgsize-96230,,resizemode-4,quality-100/wheat.jpg",
        "BlogContent": "The crisis in Ukraine and Russia, one of the world's main sources of grain, fertilizers and energy, presents new challenges in securing food supplies on top of a prolonged pandemic, a U.N. official said Thursday.We weren't going well even before the pandemic, the hunger was rising slowly and then the pandemic hit",
        "Likes": "708K"
    }
    ])
    return (
        <div>
            <res4.Provider value={[food, setFood]}>
                {props.children}
            </res4.Provider>
        </div>
    )
}
export default Apid;
