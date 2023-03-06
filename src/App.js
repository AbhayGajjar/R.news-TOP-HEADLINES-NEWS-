
import './App.css';

import React, { Component } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import NewsItem from './component/NewsItem';





export default class App extends Component {
 
  render() {
    return (
      <div>
       
        <NavBar/>
        <News/>
        <NewsItem/>

        
      </div>
    )
  }
}
