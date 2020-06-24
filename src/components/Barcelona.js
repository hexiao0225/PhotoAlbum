import React from "react";
import Introduction from "./Introduction";
import ImageWithText from "./ImageWithText";
import FullbleedImageWithText from "./FullbleedImageWithText";
import EightImagesGallery from "./EightImagesGallery";
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import BlockQuote from "./BlockQuote";
import Spacer from "./Spacer";
import { parseText } from "../util/helper";

const quote =
  "Life is short, life is dull, life is full of pain and this is the chance for something special.";

const p1 ="My first encounter with the city comes from Woody Allen’s film Vicky, Cristina, Barcelona. Not impressed by the film’s chaotic, occasionally erotic, complicated men-women relationships, I was indeed amazed by the stunning beauty of Penelope Cruz, the vibration of Spanish guitar and mosaic stairs of Park Guell. "

const paella = "Virgin olive oil, veggie chunks.\nbeans, pepper, onion \n squid, mussel, shrimp \n Spices, cooking wine, saffron. \n Rice, seafood broth, 15 minuets,\n Sangria."
const gaudi ="People call me mosaic of Antonio Gaudi. You see me everywhere: spine of lizard sculpture, dragon’s rumbling stomach, bubbles of blue sea. I disguise in the shape of ivory rib bone, fleshy mushroom, jungle insect, Mediterranean tides.\n I decorate your door handler, sculpture, window, stairs, rooftop. \n You decorate my rainbow dreamlane."
const originality = "Originality must have an origin";
const daytrip =
  "报了一个Tripadvisor上的一日团。导游是巴塞罗那本地人，很幽默开朗也很帅气。同行的大部分是美国人。有一对俄国老夫妇让人印象深刻。老爷爷有着一种老教授的气质，一种威严而亲切的感觉。老奶奶后来聊天知道，她也是English的phD。因为是一个人旅行或者参加活动的缘故，感觉额外受照顾。\n 我该怎样形容这个地中海小镇呢！我最喜欢莫奈的一幅画是从山顶俯瞰一片大海，水光粼粼，树木郁郁葱葱。这便是我今天所看到的景象吧。Costa Brava，勇敢者的海滩。这片海滩叫Callela de Palafrugell。19世纪前因为有海盗大家都住在远离海岸的地方，后来城镇向着海岸展延，渐渐成为了独立的城镇，但是名字却把这种曾经的联系保留了下来。我在地中海里游泳，海水清澈通透。尝到咸咸的海水一下子我还不习惯。大概是习惯了密歇根湖的湖水吧。从高处俯瞰，海水层次不一。这便是画家笔下的地中海啊！躺在海滩上，灼热的阳光把身上的海水慢慢晒干，只留下细细的盐粒。身下的粗砂粒硌着我生疼。我倒蛮喜欢这种粗砂粒的。像是Wholefoods里卖的喜马拉雅海盐那么大颗，轻轻一抖就抖掉了，不像细沙一直黏在身上。\n 两个中世纪小镇，Girona和Pals，印象倒不是很深刻。大概只剩下古建筑遗迹的壳了吧。里面的商店廉价而恶俗。唯一值得一提的是Pals那个楼梯几道转的塔，站上去有一览众山小的感觉。Girona那条城河水很浅，里面的鱼很大很悠闲，一动也不动地晒太阳。有一家很好吃的Gelato店，上面的Topping居然有糖渍苹果，而且没有过分甜。这点让人很是满意。一个不起眼的岔路口，一边通向罗马，一边是巴塞罗那。颇有古栈道的感觉。";

const Barcelona = ({ content }) => {
  const {
    title,
    coverImage,
    map,
    eightImages,
    threeImages,
    sectionCoverImages,
  } = content;

  return (
    <div className='country-page'>
      <Introduction titleSize={"large"} url={coverImage} title={title} />
      <Spacer size={"sm"} />
      <ImageWithText text={p1} image={map} />
      {/* woody allen and checklist */}
      <Spacer size={"sm"} />
      <FullbleedImageWithText
        title={"Paella"}
        text={parseText(paella)}
        image={sectionCoverImages[0]}
      />
      <ThreeImagesInRowGallery images={threeImages} />
      <Spacer size={"sm"} />
      {/* gaudi */}
      <FullbleedImageWithText title={"Gaudi"} text={gaudi} image={sectionCoverImages[1]} />
      <EightImagesGallery
        portraitUrls={eightImages.slice(0, 4)}
        landscapeUrls={eightImages.slice(4, 8)}
      />
      {/* daytrip */}
      <BlockQuote author={"Vicky, Cristina, Barcelona"} quote={quote} />
      <FullbleedImageWithText image={sectionCoverImages[2]} />
      <div className="footer"> </div>
    </div>
  );
};

export default Barcelona;
