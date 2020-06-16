import React, { useState, useEffect } from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { client } from "./components/KontentClient";
import CountryPage from "./components/CountryPage";
import Guadalajara from "./components/Guadalajara";
import NewYork from "./components/NewYork";

import Header from "./components/Header";
import "./styles/App.scss";

const parseRawData = (items) => {
  return items.map((city) => {
    const {
      title,
      images,
      coverimage,
      description,
      imageWithStory,
      landscapeImages,
      fourPortraitImages,
    } = city;
    return {
      title: title.value + "" || "",
      description: description.value || "",
      coverImage: coverimage.value[0].url,
      images: images.rawData.value.map((image) => image.url),
    };
  });
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
      .elementsParameter(["title", "description", "coverimage", "images"])
      .toObservable()
      .subscribe((response) => {
        setState({
          loaded: true,
          content: parseRawData(response.items),
        });
      });
  };
  return (
    <Router>
      <div className='App'>
        {state.loaded && <Header content={state.content} />}
        <div className='container'>
          <div className='wrapper'>
            <div className='home'>
              {state.loaded && (
                <Switch>
                  <Route exact path='/' component={CountryPage} />
                  <Route
                    exact
                    path='/guadalajara'
                    render={(props) => (
                      <Guadalajara content={state.content} {...props} />
                    )}
                  />
                  <Route
                    exact
                    path='/newyork'
                    render={(props) => (
                      <NewYork content={state.content} {...props} />
                    )}
                  />
                  <Route exact path='/santafe' component={Guadalajara} />
                  <Route exact path='/sanfrancisco' component={Guadalajara} />
                  <Route exact path='/dubai' component={Guadalajara} />
                  <Route exact path='/barcelona' component={Guadalajara} />
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
