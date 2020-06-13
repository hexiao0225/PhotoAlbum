import React from "react";


// 8 images per gallery block
const Gallery = () => {
  return (
    <div className='gallery'>
        {/* <ul className="gallery-landscape">
          <li className="gallery__item parallax-item" >
              <img alt="" className="gallery-picture" src="http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125447/Alger-2-min-1-603x256.png" >
              </img>
              </li>
              <li  className="gallery__item parallax-item" >
                  <img alt="" className="gallery-picture" src="http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125812/Se%CC%81quence-206-min-603x256.png" > 
                  </img>
            </li>
            <li className="gallery__item parallax-item" >
                <img alt="" className="gallery-picture" src="http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125752/Se%CC%81quence-89-min-603x256.png"> 
            </img></li>
            <li className="gallery__item parallax-item" >
                <img alt="" className="gallery-picture" src="http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125716/Se%CC%81quence-56-min-603x256.png"> 
            </img></li>
      </ul> */}
      <ul className="gallery-portrait">
          <li className="gallery-item" >
              <img alt="" className="gallery-picture" src="http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24124922/Se%CC%81quence-6-min.png" >
              </img>
              <img alt="" className="gallery-picture" src="http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125447/Alger-2-min-1-603x256.png" >
              </img>
              </li>
              <li  className="gallery-item" >
                  <img alt="" className="gallery-picture" src="http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125048/Se%CC%81quence-7-min.png" > 
                  </img>
                  <img alt="" className="gallery-picture" src="http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125812/Se%CC%81quence-206-min-603x256.png" > 
                  </img>
            </li>
            <li className="gallery-item" >
                <img alt="" className="gallery-picture" src="http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125139/Se%CC%81quence-15-copie-min-510x811.png"> 
            </img>
            <img alt="" className="gallery-picture" src="http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125752/Se%CC%81quence-89-min-603x256.png"> 
            </img></li>
            <li className="gallery-item" >
                <img alt="" className="gallery-picture" src="http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125205/Se%CC%81quence-32-min.png"> 
            </img>
            <img alt="" className="gallery-picture" src="http://d1v0ujotwdj8lp.cloudfront.net/wp-content/uploads/2019/05/24125716/Se%CC%81quence-56-min-603x256.png"> 
            </img>
            </li>
      </ul>

      
    </div>
  );
};

export default Gallery;

