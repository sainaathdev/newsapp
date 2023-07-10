import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'




export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'General'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1

        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5280f336645c4480bcfd044db997a678&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5280f336645c4480bcfd044db997a678&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async () => {
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5280f336645c4480bcfd044db997a678&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    
}

    render() {
        return (
            <div className='container my-3'>
            <h2 className='text-center'>NewsPlanet Top-headlines</h2>
            {this.state.loading && <Spinner/>}
                <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem  title={element.title} description = {element.description} imageUrl={element.urlToImage} newsUrl = {element.url} author={element.author} date={element.publishedAt}/>
                    </div>
                })}
                    
                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} className='btn btn-info mt-3' onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-info mt-3' onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
    )
  }
}

export default News
