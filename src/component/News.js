import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1

    }
  }

   async componentDidMount(){
     let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=232088a8b7ed42c5ad4e213180c0814d";
     let data =  await fetch(url);
     let parsedat =  await data.json()
     console.log(parsedat);
     this.setState({articles: parsedat.articles})
  }

  previouspage = async ()=>{
   
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=232088a8b7ed42c5ad4e213180c0814d&page=${this.state.page - 1}`;
    let data =  await fetch(url);
    let parsedat =  await data.json()
    console.log(parsedat);
    this.setState({
      
      page : this.state.page - 1,
      articles: parsedat.articles
    })
  
    
  }
  nextpage =  async ()=>{
 
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=232088a8b7ed42c5ad4e213180c0814d&page=${this.state.page + 1}`;
    let data =  await fetch(url);
    let parsedat =  await data.json()
    console.log(parsedat);
    this.setState({
      
      page : this.state.page + 1,
      articles: parsedat.articles
    })
 
  }
  render() {
    return (

      <div className=" container my-4">
        <h2 className='my-2 mx-3'>R.news - top newshadelines</h2>
        <div className="row ">
          {this.state.articles.map((element) => {

            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title?element.title.slice(0 , 45):""} description={element.description?element.description.slice(0 , 88):""} imageurl={element.urlToImage} newsurl={element.url} />
            </div>
          })}

        </div>
        <div className="container d-flex justify-content-between">
        <button   disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.previouspage}>previous</button>
        <button type="button" class="btn btn-dark" onClick={this.nextpage}>Next</button>
        </div>

      </div>
    )
  }
}

export default News
