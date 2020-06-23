<<<<<<< HEAD
import React, { useState, useEffect,useRef } from "react";
import { useIntersection } from "react-use";

=======
import React, { useState, useEffect } from "react";
>>>>>>> 260334fd13495b05299b3445ad21500ffdb6268c
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { client } from "./components/KontentClient";
import Guadalajara from "./components/Guadalajara";
import NewYork from "./components/NewYork";
import Dubai from "./components/Dubai";
import OnTheRoad from "./components/OnTheRoad";
import Barcelona from "./components/Barcelona";
import SantaFe from "./components/SantaFe";
import Header from "./components/Header";

const parseRawData = (items) => {
  let result = {};
  const contents = items.map((city) => {
    const {
      title,
      coverimage,
      map,
      horizontalimages,
      eightimages,
      threeimages,
      sectioncoverimages,
    } = city;

    return {
      title: title.value + "" || " ",
      coverImage: coverimage.value[0].url,
      map: map.value && map.value.length ? map.value[0].url : "",
      horizontalImages: horizontalimages.rawData.value.map((image) => image.url) || [],
      eightImages: eightimages.rawData.value.map((image) => image.url) || [],
      threeImages: threeimages.rawData.value.map((image) => image.url) || [],
      sectionCoverImages:sectioncoverimages.rawData.value.map((image) => image.url) || [],
    };
  });

  for (let i = 0; i < contents.length; i++) {
    const city = contents[i];
    result[`${city.title.split(' ').join('').toLowerCase()}`] = city;
  }
  return result;
};

const App = () => {
  const [state, setState] = useState({
    loaded: false,
    content: null,
  });
  useEffect(() => {
    fetchContent();
  }, []);
  const fetchContent = () => {
    client
      .items()
      .type("city_page")
      .elementsParameter([
        "title",
        "coverimage",
        "map",
        "horizontalimages",
        "eightimages",
        "threeimages",
        "sectioncoverimages",
      ])
      .toObservable()
      .subscribe((response) => {
        setState({
          loaded: true,
          content: parseRawData(response.items),
        });
      });
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='App'>
        {state.loaded && <Header  content={state.content} />}
        <div className='container'>
          <div className='wrapper'>
            <div className='home'>
              {state.loaded && (
                <Switch>
                  <Route
                    exact
                    path='/'
                    render={(props) => (
                      <OnTheRoad content={state.content.ontheroad} {...props} />
                    )}
                  />
                  <Route
                    exact
                    path='/dubai'
                    render={(props) => (
                      <Dubai content={state.content.dubai} {...props} />
                    )}
                  />
                  <Route
                    exact
                    path='/newyork'
                    render={(props) => (
                      <NewYork content={state.content.newyork} {...props} />
                    )}
                  />
                  <Route
                    exact
                    path='/santafe'
                    render={(props) => (
                      <SantaFe content={state.content.santafe} {...props} />
                    )}
                  />
                  <Route
                    exact
                    path='/guadalajara'
                    render={(props) => (
                      <Guadalajara
                        content={state.content.guadalajara}
                        {...props}
                      />
                    )}
                  />
                  <Route
                    exact
                    path='/barcelona'
                    render={(props) => (
                      <Barcelona content={state.content.barcelona} {...props} />
                    )}
                  />
                  {/* 
                  <Route
                    exact
<<<<<<< HEAD
                    path='/ontheroad'
                    render={(props) => (
                      <OnTheRoad content={state.content.ontheroad} {...props} />
                    )}
                  />
=======
                    path='/southisland'
                    render={(props) => (
                      <SouthIsland
                        content={state.content.southisland}
                        {...props}
                      />
                    )}
                  />

                  <Route exact path='/sanfrancisco' component={Guadalajara} />

                  
                   */}
>>>>>>> 260334fd13495b05299b3445ad21500ffdb6268c
                </Switch>
              )}
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
