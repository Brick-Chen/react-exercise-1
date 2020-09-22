import React, { Component } from 'react';
import './App.scss';
import avatar from './assets/avatar.jpg';

class App extends Component {
  render() {
    return (
      <main className="app">
        <div className="cv-header">
          <img className="image-size" src={avatar} alt=""></img>
          <h1>HELLO,</h1>
          <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
        </div>

        <hr className="spilt-line" />

        <div className="cv-body">
          <div className="self-info">
            <h3>ABOUT ME</h3>
            <p>
              Lorem ipsum dolor sit amet,consectetur adipisicing elit.
              Respellendus, non, dolorem, cumque distinctio magni quam expedita
              velit laborum sunt amet facere tempora ut fuga aliqum ad
              asperiores voluptatem dolorum! Quasi.
            </p>
          </div>

          <div className="education">
            <h3>EDUCATION</h3>
            <ul>
              <li>
                <div className="year">1990</div>
                <div className="edu-info">
                  <p>I was born in Katowice</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente, exercitationem, totam, dolores iste dolore est aut
                    modi.
                  </p>
                </div>
              </li>

              <li>
                <div className="year">2005</div>
                <div className="edu-info">
                  <p>Secondary school specializing in artistic</p>
                  <p>
                    Eos, explicabo, nam, tenetur et ab eius deserunt apernatur
                    ipsum ducimus quibusdam quis voluptatibus.
                  </p>
                </div>
              </li>

              <li>
                <div className="year">2009</div>
                <div className="edu-info">
                  <p>First level graduation in Graphic Design</p>
                  <p>
                    Aspernatur, mollitia, quos maxime eius suscipit sed beatae
                    ducimnus quaerat quibusdam perferendis? lusto, quisbusdam
                    asperiores unde repellat.
                  </p>
                </div>
              </li>

              <li>
                <div className="year">2012</div>
                <div className="edu-info">
                  <p>Second level graduation in Graphic Design</p>
                  <p>Ducimus, aliquam tempore autem itaque et accusantium!</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
