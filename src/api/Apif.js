import React,{createContext, useState} from 'react'

export const res3 = createContext()

const Apif =(props) =>{
const [fitness, setFitness] = useState([{
    "Title": " For An Athlete's Body: Callisthenics Or Weight Training? Which One Is Better",
    "CategoryName": "Fitness",
    "PublishedDate": "March 10 2022",
    "ImageAsset": "https://images.news18.com/ibnlive/uploads/2021/10/kevin-durant-16356547413x2.jpg?impolicy=website&width=510&height=356",
    "BlogContent": "For anyone who has not started his or her fitness journey yet, it can be very confusing as to how to approach it. Weight training, cardio, pilates, yoga, functional training are just one of the many avenues to fitness and may sound intimidating to a newbie. However, one of the biggest dilemmas faced by even experienced athletes is whether to go for weight training or callisthenics.",
    "Likes": "800K"
},
{
    "Title": " Six at-home fitness challenges to help you reach your goals",
    "CategoryName": "Fitness",
    "PublishedDate": "March 10 2022",
    "ImageAsset": "https://images.indianexpress.com/2021/10/workout_1200_getty.jpg",
    "BlogContent": "It cannot be denied that the pandemic has pushed everyone to think about their health more holistically. As such, whether practicing yoga or investing in quality exercise equipment, people are attempting to discover different ways to exercise effectively within the four walls of their home, said Rhea Singh Anand, co-founder, Flexnest.",
    "Likes": "1M+"
},
{
    "Title": " Treat Excessive Sweating With The Help Of Botox Injection",
    "CategoryName": "Fitness",
    "PublishedDate": "March 10 2022",
    "ImageAsset": "https://images.news18.com/ibnlive/uploads/2022/01/untitled-1-37-16425166563x2.jpg?impolicy=website&width=510&height=356",
    "BlogContent": "re you someone who sweats excessively even when it's not hot? If yes, then you might be suffering from Hyperhidrosis. The medical condition happens when people sweat abnormally even in the cold weather. The sweat wets their clothes and makes them smell bad sometimes. Regular medication like antidepressants does not prove helpful in this condition often.",
    "Likes": "800K"
},
{
    "Title": "Focus on fitness spurs Indians to smartwatches",
    "CategoryName": "Fitness",
    "PublishedDate": "March 10 2022",
    "ImageAsset": "https://www.thehindu.com/life-and-style/fitness/3cbade/article37845142.ece/alternates/FREE_660/5th-fit",
    "BlogContent": "The third quarter of 2021 was the biggest quarter for smartwatches,” said Anshika Jain, Senior Research Analyst at Counterpoint. “We have seen that because of COVID-19, there has been a change in customer preferences. People are shifting to smartwatches from traditional watches. ",
    "Likes": "1M"
},
{
    "Title": " Pitching fitness as a lifestyle",
    "CategoryName": "Fitness",
    "PublishedDate": "March 11 2022",
    "ImageAsset": "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/3/2/w900X450/Pitching.PNG?w=900&dpr=1.5",
    "BlogContent": "When we hit the gym, we stress our muscles as we lift weights. This boosts cell growth and tones our body. The entire science of muscle fitness is based on this very idea, which is called hypertrophy. Only wounds heal, and Dr. Minash Gabriel, a physical therapist and celebrity fitness trainer, knows how.",
    "Likes": "800K"
}
]);
return (
    <div>
    <res3.Provider value={[fitness, setFitness]}>
    {props.children}
    </res3.Provider>
    </div>
  )
}
export default Apif;