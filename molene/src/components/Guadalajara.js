import React, { Component } from "react";
import { DeliveryClient } from "@kentico/kontent-delivery";
import Introduction from "./Introduction";
// import ImageWithText from "./ImageWithText";
// import FullbleedImageWithText from "./FullbleedImageWithText";
// import EightImagesGallery from "./EightImagesGallery";
// import ThreeImagesInRowGallery from "./ThreeImagesInRowGallery";
// import BlockQuote from "./BlockQuote";
// import Spacer from "./Spacer";
import ScrollIndicator from "./ScrollIndicator";

const client = new DeliveryClient({
  projectId: "993c2420-cd40-00b7-bcf7-21854072c41d",
});

class Guadalajara extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  fetchArticles() {
    client
      .items()
      .type("city_page")
      .elementsParameter(["title", "description", "coverimage"])
      .toObservable()
      .subscribe((response) => {
        console.log("response", response);
        const {
          title,
          images,
          coverimage,
          description,
          imageWithStory,
          landscapeImages,
          fourPortraitImages,
        } = response.items[0];

        this.setState({
          loaded: true,
          coverImage: coverimage.value[0].url,
          //   imageWithStory,
          //   description:description.rawData.value,
          //   landscapeImages,
          //   fourPortraitImages,
          //   images:images.rawData.value.map(image => image.url),
          title: title.value + "",
        });
      });
  }

  componentDidMount() {
    this.fetchArticles();
  }

  render() {
    const { loaded, coverImage, title } = this.state;
    return (
      loaded && (
        <div className='country-page'>
          <Introduction titleSize={"large"} url={coverImage} title={title} />
          <ScrollIndicator />
        </div>
      )
    );
  }
}

export default Guadalajara;
