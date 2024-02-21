import React, { Component } from 'react'
import NewsItem from './NewsItem.jsx'
import Spinner from './Spinner.jsx'
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 25
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
      };

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=popularity&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        this.updateNews()
        }

    prevPageHandler = async () => {
        await this.setState({
            page: this.state.page > 1 ? this.state.page - 1 : this.state.page,
        })
        this.updateNews()
    }
    
    nextPageHandler = async () => {
        await this.setState({
            page: this.state.page + 1,
        })
        this.updateNews()
    }
    render() {
        return (
            <div className='container m-auto my-5'>
                <h2 className="fw-bold text-light mb-3">{`Top Headlines - ${this.props.category.charAt(0).toUpperCase()+this.props.category.slice(1)}`}</h2>
                {this.state.loading && <Spinner />}
                <div className="row row-gap-3">
                    {this.state.articles && this.state.articles.map((e) => {
                        return <div className="col-lg-4 col-md-6" key={e.url}>
                            <NewsItem title={e.title ? e.title : 'Not Available'} description={e.description ? e.description : 'Not Available'} imgUrl={e.urlToImage ? e.urlToImage : 'https://media.istockphoto.com/id/1192070239/photo/abstract-digital-news-concept.webp?b=1&s=170667a&w=0&k=20&c=gh89_KBMRqNn3nhTcZwjIQfsM45NnhWI_k8SDa9A6NM='} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                        </div>
                    })}
                    <div className="container d-flex justify-content-between">
                        <button className="btn btn-dark btn-sm" onClick={this.prevPageHandler} disabled={this.state.page <= 1}>&larr; Prev</button>
                        <button className="btn btn-dark btn-sm" onClick={this.nextPageHandler} disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) || (this.state.articles > 100)}>Next &rarr;</button>
                    </div>

                </div>
            </div>
        )
    }
}
 

export default News