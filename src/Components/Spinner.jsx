import React, { Component } from 'react'
import Loading from '../assets/Loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-center gap-3 my-3">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    )
  }
}

export default Spinner