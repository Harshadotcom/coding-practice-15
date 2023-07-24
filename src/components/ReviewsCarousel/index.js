// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    forwardArrow: 0,
  }

  updateStateForward = () => {
    const {forwardArrow} = this.state
    const {reviewsList} = this.props
    if (forwardArrow < reviewsList.length - 1) {
      this.setState(prevState => ({
        forwardArrow: prevState.forwardArrow + 1,
      }))
    }
  }

  updateStateBackward = () => {
    const {forwardArrow} = this.state
    if (forwardArrow > 0) {
      this.setState(prevState => ({
        forwardArrow: prevState.forwardArrow - 1,
      }))
    }
  }

  render() {
    const {forwardArrow} = this.state
    const {reviewsList} = this.props
    return (
      <div className="web-page">
        <div className="bg-container">
          <h1>Reviews</h1>
          <img
            alt={reviewsList[forwardArrow].username}
            src={reviewsList[forwardArrow].imgUrl}
          />
          <div className="arrow-container">
            <button type="button" data-testid="leftArrow">
              <img
                className="arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                onClick={this.updateStateBackward}
              />
            </button>
            <p>{reviewsList[forwardArrow].username}</p>
            <button type="button" data-testid="rightArrow">
              <img
                className="arrow"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                onClick={this.updateStateForward}
              />
            </button>
          </div>
          <p>{reviewsList[forwardArrow].companyName}</p>
          <p className="description">{reviewsList[forwardArrow].description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
