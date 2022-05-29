import React, { createContext, useState } from 'react'

export const res2 = createContext()
const Apit = (props) => {
    const [technology, setTechnology] = useState([
    {
        "Title": " Pixel 6a: Specs, features, design, expected India price and all that we know so far",
        "CategoryName": "Technology",
        "PublishedDate": "March 8 2022",
        "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUMI8S.img?h=274&w=486&m=6&q=60&o=f&l=f",
        "BlogContent": "Google is reportedly working on its affordable offering, the Pixel 6a. Previous leaks suggested that the phone could launch in May during Google IO 2022. However, a popular tipster now reveals that the launch of Pixel 6a may be delayed to July. The tipster states that the delay is due to chip shortage and supply chain issues.",
        "Likes": "800"
    },
    {
        "Title": " Chandrayaan-2 makes exciting new discovery below Moon's surface",
        "CategoryName": "Technology",
        "PublishedDate": "March 8 2022",
        "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAULAy3.img?h=274&w=486&m=6&q=60&o=f&l=f",
        "BlogContent": "As it awaits the arrival of its successor in August this year, Chandrayaan-2 has once again found new developments happening under the surface of the Moon. Chandra's Atmospheric Composition Explorer-2 (CHACE-2) instrument onboard Chandrayaan-2 has found Argon-40 in the tenuous lunar exosphere.",
        "Likes": "650"
    },
    {
        "Title": " The all new Apple MacBook Pro: Gets the work done, without slowing down",
        "CategoryName": "Technology",
        "PublishedDate": "March 9 2022",
        "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUMus7.img?h=758&w=1348&m=6&q=60&o=f&l=f",
        "BlogContent": "The ports making a comeback include full-size HDMI, card slot reader and the Mag Safe 3 charging port with magnetic connector, other than thunderbolt ports and audio port. While the comeback ports aren’t the most advanced ones but still support high-speed data transfer. I love the MagSafe connector as it prevents the laptop from falling if walked on the cord accidentally.",
        "Likes": "700"
    },
    {
        "Title": " Apple Event on March 8: Check out deals and offers on iPhone 13, iPhone 12 and others",
        "CategoryName": "Technology",
        "PublishedDate": "March 8 2022",
        "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUJa1e.img?h=808&w=1438&m=6&q=60&o=f&l=f",
        "BlogContent": "The iPhone SE 2 is currently available on the Apple India website for Rs 39,900 for the base 64GB storage variant and Rs 44,900 for the 128GB storage model. Customers can pick from three different colours: black, red, or white.",
        "Likes": "900"
    },
    {
        "Title": " Samsung Galaxy F23 launches in India tomorrow: Expected price, availability, specifications",
        "CategoryName": "Technology",
        "PublishedDate": "March 9 2022",
        "ImageAsset": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAUJegh.img?h=801&w=1438&m=6&q=60&o=f&l=f",
        "BlogContent": "The Galaxy F23 will be available for purchase starting tomorrow at 12 pm (IST), on Flipkart and the official Samsung website. It will come in two colour variants - Aqua Blue and Forest Green, and feature a 6GB RAM + 128GB storage configuration. The storage can further be expanded via a 1TB micro-SD Card.",
        "Likes": "422"
    }
    ]);

    return (
        <div>
            <res2.Provider value={[technology, setTechnology]}>
                {props.children}
            </res2.Provider>
        </div>
    )
}
export default Apit;