import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
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
      p1,
      p2,
      p3,
      p4,
      quote1,
      quote2
    } = city;

    return {
      title: title.value + "" || " ",
      coverImage: coverimage.value[0].url,
      map: map.value && map.value.length ? map.value[0].url : "",
      horizontalImages: horizontalimages.rawData.value.map((image) => image.url) || [],
      eightImages: eightimages.rawData.value.map((image) => image.url) || [],
      threeImages: threeimages.rawData.value.map((image) => image.url) || [],
      sectionCoverImages:sectioncoverimages.rawData.value.map((image) => image.url) || [],
      p1:p1.value,
      p2:p2.value,
      p3:p3.value,
      p4:p4.value,
      quote1:quote1.value,
      quote2:quote2.value
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
    isHomePageOpen:true,
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
        "p1",
        "p2",
        "p3",
        "p4",
        "quote1",
        "quote2"
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
        {state.loaded && <Header lightMode={state.isHomePageOpen} content={state.content} />}
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
                  <Route
                    exact
                    path='/ontheroad'
                    render={(props) => (
                      <OnTheRoad content={state.content.ontheroad} {...props} />
                    )}
                  />
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
