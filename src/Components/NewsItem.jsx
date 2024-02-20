import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
      let {title, description, imgUrl, newsUrl} = this.props;
    return (
        <div className="card" style={{background: '#e2e2e250'}}>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.length >= 40 ? title.slice(0,30)+'...' : title}</h5>
          <p className="card-text">{description.length >= 100 ? description.slice(0,100)+'...' : description}</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more...</a>
        </div>
      </div>
    )
  }
}

export default NewsItem