import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem.jsx'
import Spinner from './Spinner.jsx'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&sortBy=popularity&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
        let data = await fetch(url);
        props.setProgress(50)
        let parsedData = await data.json();
        console.log(parsedData)
        props.setProgress(75)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        
        props.setProgress(100)
    }

    useEffect(() => {
          updateNews()
    }, [])
    

    const fetchMoreData = async () => {
        // this.setState({page: page + 1})
        const nextPage = page + 1
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&sortBy=popularity&apiKey=${props.apiKey}&page=${nextPage}&pagesize=${props.pageSize}`
        setLoading(true )
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData)
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setPage(nextPage)
        setLoading(false)
    }

        return (
            <>
                <h2 className="fw-bold text-light text-center mb-4">{`Top Headlines - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`}</h2>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}>
                    <div className='container'>
                        <div className="row row-gap-3">
                            {articles.map((e) => {
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

News.defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 24
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
};

export default News