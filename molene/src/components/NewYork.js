import React from "react";
import Introduction from "./Introduction";
import ScrollIndicator from "./ScrollIndicator";

const NewYork =({content}) => {
    console.log("content",content)
    const {title,images,coverImage} = content[1];
   
    return (
        <div className='country-page'>
          <Introduction titleSize={"large"} url={coverImage} title={title} />
          <ScrollIndicator />
        </div>
    );
  
}

export default NewYork;
