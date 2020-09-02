import React from 'react';

import Navbar from './components/navbar/Navbar'
import CardMeetup from "./components/cardMeetup/CardMeetup"
import CardDefault from './components/cardDefault/CardDefault'
import CardPast from './components/cardPast/CardPast'
import Footer from './components/footer/Footer'
//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="container-full">
      <Navbar
        list={["QTemu", "Create MeetUp", "Explore", "Login"]}
      />

      <div className="container">
        <CardMeetup
          heading = "MZero MeetUp"
          src="https://images.unsplash.com/photo-1598833993682-fb5cf0d9c9d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
          radius="none"
          width="250px"
          height="270px"
          htmIn = {
                  <table>
                    <tbody>
                      <tr>
                          <td>Location</td>
                          <td>Medan, Indonesia</td>
                      </tr>
                      <tr>
                          <td>Members</td>
                          <td>12.310</td>
                      </tr>
                      <tr>
                          <td>Organizers</td>
                          <td>Didi Alfansyah</td>
                      </tr>
                    </tbody>
                  </table>
          }
        />
      </div>

      <div className="container">
        <h2>Next MeetUp</h2>
        <div className="conCard">
          <CardDefault
              heading="Lorem ipsum dolor sit amet"
              link="https://flatuicolors.com/"
              content="Consectetur adipiscing elit. Morbi congue bibendum ex, sit amet iaculis libero pharetra sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus metus eros, vulputate ut vulputate non, convallis a lectus. Praesent ultricies semper dui in feugiat. Sed at hendrerit magna. Nulla dui nisl, efficitur a porttitor at, tincidunt quis dui. Pellentesque lobortis, nisl at semper consectetur, dolor lorem auctor magna, at hendrerit metus orci quis nibh. In dapibus maximus eros aliquet iaculis. Nullam ut faucibus diam, non sollicitudin mauris. Integer accumsan ullamcorper quam quis gravida. In ultrices convallis lacus nec facilisis. Proin facilisis lectus quam, nec dignissim turpis elementum et. Nam blandit dui eros, id tincidunt tellus tempus ac. Nulla id nulla tellus. Phasellus sodales felis at lorem mollis, non auctor felis porta."
          />
        </div>
      </div>
      
      <div className="container">
        <h2>About MeetUp</h2>
        <div className="conCard">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur tristique erat. Duis vitae tempor sem, eget scelerisque turpis. Curabitur tincidunt in dolor eu cursus. Curabitur sed euismod velit, in luctus dui. Ut blandit massa eu nisi auctor lacinia.
        </div>
      </div>
      
      <div className="container">
        <h2>Members</h2>
        <div className="conCard">
          <CardMeetup
            heading = "Organizers"
            src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
            radius="50%"
            width="120px"
            height="120px"
            hide="none"
            htmIn = {
              <table>
                <tbody>
                  <tr>
                      <td>Didi Alfansyah</td>
                      <td>4 Others</td>
                  </tr>
                </tbody>
              </table>
            }
          />
        </div>
      </div>

      <div className="container">
        <h2>Past MeetUp</h2>
        <div className="conCardPast">
        <CardPast
          dated="31 Agustus 2020"
          content="Etiam lobortis a tortor non commodo. Praesent lobortis tempus orci sit amet congue."
          view="139"
        />
        <CardPast
          dated="20 Agustus 2020"
          content="Etiam lobortis a tortor non commodo. Praesent lobortis tempus orci sit amet congue."
          view="120"
        />
        <CardPast
          dated="7 Agustus 2020"
          content="Etiam lobortis a tortor non commodo. Praesent lobortis tempus orci sit amet congue."
          view="230"
        />
      </div>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
