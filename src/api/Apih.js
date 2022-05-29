import React, { createContext, useState } from 'react'

export const res1 = createContext()
const Apih = (props) => {
    const [hollywood, setHollywood] = useState([
    {
        "Title": " Alia Bhatt Is Set For Big Hollywood Debut With Gal Gadot. This Is Not A Drill",
        "CategoryName": "Hollywood",
        "PublishedDate": "March 9 2022",
        "ImageAsset": "https://c.ndtvimg.com/2022-03/l770af3_alia-bhatt_625x300_08_March_22.jpg",
        "BlogContent": " Alia Bhatt is going places and the actress has more than one reasons to celebrate. Firstly, her recently-released film Gangubai Kathiawadi is performing well in theatres and has been praised by the critics. Now, the other big news - she is all set to make her big Hollywood debut in a film titled Heart Of Stone. Wait, it gets better. The film stars Gal Gadot and Jamie Dornan too. ",
        "Likes": "800"
    },
    {
        "Title": " Hollywood stars Will Smith and Michael B. Jordan are set to star and produce the sequel to 'I Am Legend'",
        "CategoryName": "Hollywood",
        "PublishedDate": "March 9 2022",
        "ImageAsset": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/3/2022_3$largeimg_913574831.jpg",
        "BlogContent": "Hollywood stars Will Smith and Michael B. Jordan are set to star and produce the sequel to I Am Legend. The film will be written by Akiva Goldsman for Warner Bros Studios. Will Smith took to Instagram to share a teaser photo spelling out the partnership following the news, and tagged Jordan in the post. ",
        "Likes": "800K"
    },
    {
        "Title": " Pinocchio First Look: Tom Hanks Leaves Fans Gasping For Breath As Geppetto, We Are Surely In For A Treat!",
        "CategoryName": "Hollywood",
        "PublishedDate": "March 11 2022",
        "ImageAsset": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/pinocchio-first-look-shows-scruffy-white-haired-tom-hanks-as-geppetto-001.jpg",
        "BlogContent": "The first look of Tom Hanks-starrer live-action film ‘Pinocchio’, a remake of the 1940 animated Disney film of the same name, was released recently, reports ‘Variety’.The 1940 animated film is itself adapted from Carlo Collodi’s children’s novel ‘The Adventures of Pinocchio’. The film features Hanks in the role of Geppetto, a childless woodworker desperate for a son.",
        "Likes": "2M"
    },
    {
        "Title": " When Justin Bieber’s Junk Was Termed ‘Average’ By An Alleged Prostitute He Visited In Brazil’s Brothel",
        "CategoryName": "Hollywood",
        "PublishedDate": "March 11 2022",
        "ImageAsset": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/02/justin-bieber-kickstarts-justice-world-tour-with-performing-atop-of-a-fake-airplane-descended-in-the-air-001.jpg",
        "BlogContent": "Justin Bieber is one of those pop artists who has always been in the news either for his hit musical numbers or for random controversies. Since he started off as a child artist, his every movement or statement was scrutinized to a great extent, making him the epitome of drama and internet discussions.",
        "Likes": "800K"
    },
    {
        "Title": " The Dark Knight’s Epic ‘Look At Me’ Scene Of Joker Was Improvised By Heath Ledger, Thanks To Maggie Gyllenhaal",
        "CategoryName": "Hollywood",
        "PublishedDate": "March 11 2022",
        "ImageAsset": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/03/did-you-know-maggie-gyllenhaal-couldnt-look-at-heath-ledgers-joker-during-their-intense-scene-in-the-dark-knight-because-she-was-too-scared-01.jpg",
        "BlogContent": "Matt Reeves recently released The Batman starring Robert Pattinson has gained some massive attention and love from the DC fans. However, Christopher Nolan’s 2008 release ‘The Dark Knight’ starring Heath Ledger, Maggie Gyllenhaal, and Christian Bale still stays in our minds and hearts rent-free.",
        "Likes": "1M"
    }
    ]);

return (
        <div>
        <res1.Provider value={[hollywood, setHollywood]}>
        {props.children}
        </res1.Provider>
        </div>
      )
    }
export default Apih;
