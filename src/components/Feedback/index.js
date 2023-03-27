// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSubmit: false}

  onchangeDisplayCard = () => {
    this.setState(prevState => ({
      isFeedbackSubmit: !prevState.isFeedbackSubmit,
    }))
  }

  ondisplayfeedbackCard = emojis => (
    <div className="feedback-card">
      <h1 className="description">
        How satisfied are you with our customer support performance?
      </h1>
      <ul className="emojis-container">
        {emojis.map(eachemoji => (
          <li className="emoji-item-container" key={eachemoji.name}>
            <img
              src={eachemoji.imageUrl}
              alt={eachemoji.name}
              className="emoji-image"
              onClick={this.onchangeDisplayCard}
            />
            <p className="emoji-name">{eachemoji.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )

  ondisplayThankyouCard = loveEmojiUrl => (
    <div className="thank-you-card">
      <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
      <h1 className="thank-text">Thank You!</h1>
      <p className="thank-you-description">
        We will use your feedback to improve our customer support performance.
      </p>
    </div>
  )

  render() {
    const {resources} = this.props
    const {loveEmojiUrl, emojis} = resources
    const {isFeedbackSubmit} = this.state

    return (
      <div className="feedback-bg-container">
        {isFeedbackSubmit === false
          ? this.ondisplayfeedbackCard(emojis)
          : this.ondisplayThankyouCard(loveEmojiUrl)}
      </div>
    )
  }
}
export default Feedback
