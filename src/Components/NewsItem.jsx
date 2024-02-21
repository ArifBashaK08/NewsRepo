import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="card h-100" style={{ background: '#e2e2e250',cursor: 'pointer'}}>
        <img src={imgUrl} className="card-img-top img-fluid" alt="..." style={{ height: '300px', objectFit: 'cover' }} />
        <div className="card-body position-relative mb-2">
          <h5 className="card-title">{title.length >= 40 ? title.slice(0, 30) + '...' : title} </h5>
          <span className="badge rounded-pill bg-danger fst-italic">{source}</span>
          <p className="card-text">{description.length >= 100 ? description.slice(0, 100) + '...' : description}</p>
          <p className="card-text"><small className="text-body-secondary fw-bolder">By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark position-absolute bottom-0 mt-2">Read more...</a>
        </div>
      </div>
    )
  }
}

export default NewsItem