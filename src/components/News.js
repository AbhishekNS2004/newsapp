import React, { Component } from 'react'
import Newsitem from './Newsitem'


export default class News extends Component {
  constructor(){
    super();
    console.log("hello i am a constructor from news component")
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }
  async componentDidMount(){
    console.log("cdm")
    this.fetchNews(1);
  }
  
  fetchNews = async (pageNumber) => {
    try {
      let url="https://newsapi.org/v2/top-headlines?country=us&page="+pageNumber+"&pageSize=20&apiKey=e1bc8f6a2f7a4605a51b8b02efbcbd71"
      let data=await fetch(url);
      if (!data.ok) {
        console.error("API Error:", data.status, data.statusText);
        return;
      }
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles || [], page: pageNumber});
    } catch(error) {
      console.error("Fetch Error:", error);
    }
  }
  previouspage=async ()=>{
    console.log("previous")
    if(this.state.page > 1) {
      this.fetchNews(this.state.page - 1);
    }
  }
  nextpage=async ()=>{
    console.log("next")
    this.fetchNews(this.state.page + 1);
  }


  render() {
    return (
      <div className='container my-3'>
        
        <h1 className='text-center'>News top headlines </h1>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return <div className='col-md-4' key={element.url}>
            <Newsitem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,100):""} imageUrl={element.urlToImage} newUrl={element.url}/>
          </div>
        })}
        </div>
        <div className='container d-flex justify-content-center'>
          <button disabled={this.state.page === 1} type="button" onClick={this.previouspage} className='btn btn-dark mx-2'>Previous</button>
          <button type='button' onClick={this.nextpage} className='btn btn-dark mx-2'>Next</button>
        </div>
      </div>
    )
  }
}
