import React from "react";
import Introduction from "./Introduction";
import ImageWithText from "./ImageWithText";
import FullbleedImageWithText from "./FullbleedImageWithText";
import EightImagesGallery from "./EightImagesGallery";
import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
import BlockQuote from "./BlockQuote";
import Spacer from "./Spacer";
import {parseText} from "../util/helper"

const quote = "Life is short, life is dull, life is full of pain and this is the chance for something special."

const p1 = "My first encounter with the city comes from Woody Allen’s film Vicky, Cristina, Barcelona. Having watched it once in middle school, I decided to watch it again before I travel. I was not a fan of the film’s chaotic, erotic, complicated men-women relationship plot. What I did remember from this crazy, funny, chaotic film was the beauty of Penelope Cruz, the sound of Spanish guitar and Gaudi’s Park Guell. This was August 2019."

const todos ="I gave myself a to-do list. \n Buy a telephone card with data \n International charger adaptor \n Take a bus to Park Guell \n Go to Palace del Sol and find a coffee shop \n Passeig de Garcia \n Visit a town by the seaside \n Take a cooking class and learn to cook Paella \n Architecture \n Museum \n Walk around the city \n Drink good Sangaria \n Eat good paella \n Have Tapas \n Spanish Tango \n The architecture of Gaudi \n Go to a Spanish guitar performance \n Visit a beautiful coast town \n Stay in a nice music bar \n Drink cortina coffee \n Draw and paint \n Buy spices and saffron"
const gaudi ="Park Guell里五彩的马赛克让普通的石墙在阳光下变得灿烂起来。房子像是姜饼小屋一般，仿佛一口咬下去是脆脆的。我最喜欢的是门边上圆形的纯色马赛克，像是晶莹的阳光一般。沿着蜿蜒的把手走上楼便是有名的大蜥蜴。啊自然，Originality must have origin. 借用audio guide的一句话。这是我在参观高迪建筑的时候最深的感受之一吧。Casa Mila像是在巨大的丛林中，楼梯的挡雨板像是巨大的昆虫翅膀。走在建筑里，像是走在一只巨兽的腹中。Casa Batllio像是在海洋里。光线透过屋顶, 打在水蓝色的马赛克砖块上，我很喜欢屋顶上的龙脊，蜿蜿蜒蜒的，好似是在沉睡，但是说不定下一秒就会飞起来。我还很喜欢门的设计，像是气泡或者是某种微生物的放大一般，让阳光可以透过。Park Guell 高迪给了工匠创作的空间。没有任何两根柱子是一模一样的，这般随性和自由。这样的建筑是亲切的。人和自然，光线，动物，等等。像是细细的骨头，像是植物的枯枝，像是蘑菇，像是昆虫，像是海洋的波纹。大概只有亲眼见到才能感知到建筑吧。比起圣家大教堂，我更喜欢高迪设计的家或者公寓。圣家大教堂太。宏伟了，让人敬畏，反而少了一些亲切感。走在里面，觉得自己渺小极了。也许也和自己无法和宗教联系起来有关吧，总觉得有隔阂。人无法胜天的感觉在教堂里尤为强烈。不过教堂里的马赛克颜色极其浓烈，阳光都被染色了，打在柱子上。这便是“彩虹一般的天堂”吧。"
const originality = "Originality must have an origin"
const paella = "我去上了一节Paella cooking class。大家在一家餐厅集合之后，先走去St Joseph海鲜市场买新鲜食材，然后走去cooking classroom。这个教室应该曾经是餐馆，里面厨房的设施和座位都一应俱全。厨师本人曾经是这家店的店主吗？想到这里我不禁觉得有点伤感。上课的人极有趣。有保养极好的日本主妇，有澳大利亚的亚裔母女，有澳大利亚的四个年轻人，有旧金山来的黑人大叔，有瑞士大哥。最有趣的应该是旧金山中年大叔了。他这次来巴塞罗那是来参加一个徒步活动。他讲了路上遇到的有意思的人和事。比如，也许会遇到住在10分钟之外的neighbor。他路过一个农村，里面的女人们在向他招手说着什么，结果她们正在做奶酪。或者他遇到了一位伦敦的女士，熟知各种果实，于是一路上她们吃了不少野生的果子当零食。他的妻子此时此刻正在雪原里和另外一个lady徒步22天，她们身上唯一有的就是一个信号仪。他的妻子今年年底还要去喜马拉雅，很让人佩服呢。"
const daytrip = "报了一个Tripadvisor上的一日团。导游是巴塞罗那本地人，很幽默开朗也很帅气。同行的大部分是美国人。有一对俄国老夫妇让人印象深刻。老爷爷有着一种老教授的气质，一种威严而亲切的感觉。老奶奶后来聊天知道，她也是English的phD。因为是一个人旅行或者参加活动的缘故，感觉额外受照顾。\n 我该怎样形容这个地中海小镇呢！我最喜欢莫奈的一幅画是从山顶俯瞰一片大海，水光粼粼，树木郁郁葱葱。这便是我今天所看到的景象吧。Costa Brava，勇敢者的海滩。这片海滩叫Callela de Palafrugell。19世纪前因为有海盗大家都住在远离海岸的地方，后来城镇向着海岸展延，渐渐成为了独立的城镇，但是名字却把这种曾经的联系保留了下来。我在地中海里游泳，海水清澈通透。尝到咸咸的海水一下子我还不习惯。大概是习惯了密歇根湖的湖水吧。从高处俯瞰，海水层次不一。这便是画家笔下的地中海啊！躺在海滩上，灼热的阳光把身上的海水慢慢晒干，只留下细细的盐粒。身下的粗砂粒硌着我生疼。我倒蛮喜欢这种粗砂粒的。像是Wholefoods里卖的喜马拉雅海盐那么大颗，轻轻一抖就抖掉了，不像细沙一直黏在身上。\n 两个中世纪小镇，Girona和Pals，印象倒不是很深刻。大概只剩下古建筑遗迹的壳了吧。里面的商店廉价而恶俗。唯一值得一提的是Pals那个楼梯几道转的塔，站上去有一览众山小的感觉。Girona那条城河水很浅，里面的鱼很大很悠闲，一动也不动地晒太阳。有一家很好吃的Gelato店，上面的Topping居然有糖渍苹果，而且没有过分甜。这点让人很是满意。一个不起眼的岔路口，一边通向罗马，一边是巴塞罗那。颇有古栈道的感觉。"

const Barcelona =({content}) => {
    const { title,images,coverImage,map} = content;

    return (
        <div className='country-page'>
          <Introduction titleSize={"large"} url={coverImage} title={title} />
          <Spacer size={"sm"}/>
          <ImageWithText text={p1} image={map} />
          {/* woody allen and checklist */}
          <BlockQuote author={"Vicky, Cristina, Barcelona"} quote={quote}/>
          <Spacer size={"sm"}/>
          <ImageWithText text={p1} image={images[0]} />
          <FullbleedImageWithText title={'Checklist'} text={parseText(todos)} image={images[3]}/>
          <ThreeImagesInRowGallery images={images.slice(1,4)}/>
          <Spacer size={"sm"}/>
          {/* gaudi */}
          <FullbleedImageWithText title={'Gaudi'} text={gaudi} image={images[4]}/>
          <BlockQuote author={"Audio Guide in Casa Mila"} quote={originality} />
          <EightImagesGallery landscapeUrls={images.slice(5,9)} portraitUrls={images.slice(9,13)}/>
          {/* daytrip */}
          <Introduction
            url={images[9]}
            titleSize={"small"}
            title={"Costa Brava"}
          />
          <BlockQuote quote={quote}/>
          <Spacer size={"sm"}/>
          <ImageWithText title={'Day Trip'} text={parseText(daytrip)} image={images[3]}/>
          <ThreeImagesInRowGallery images={images.slice(16,19)} />
          <Spacer />
        </div>
    );
  
}

export default Barcelona;
