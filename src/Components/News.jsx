import React, { Component } from 'react'
import NewsItem from './NewsItem.jsx'
import Spinner from './Spinner.jsx'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 24
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
            loading: true,
            page: 1,
            totalResults: 0
        }
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=popularity&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    async componentDidMount() {
        this.updateNews()
    }

    fetchMoreData = async () => {
        // this.setState({page: this.state.page + 1})
        const nextPage = this.state.page + 1
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&sortBy=popularity&apiKey=${this.props.apiKey}&page=${nextPage}&pagesize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            page: nextPage,
            loading: false
        })
    }


    render() {
        return (
            <>
                <h2 className="fw-bold text-light text-center mb-4">{`Top Headlines - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`}</h2>
                {/* {this.state.loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}>
                    <div className='container'>
                        <div className="row row-gap-3">
                            {this.state.articles.map((e) => {
                                return <div className="col-lg-4 col-md-6" key={e.url}>
                                    <NewsItem title={e.title ? e.title : 'Not Available'} description={e.description ? e.description : 'Not Available'} imgUrl={e.urlToImage ? e.urlToImage : 'https://media.istockphoto.com/id/1192070239/photo/abstract-digital-news-concept.webp?b=1&s=170667a&w=0&k=20&c=gh89_KBMRqNn3nhTcZwjIQfsM45NnhWI_k8SDa9A6NM='} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}


export default News