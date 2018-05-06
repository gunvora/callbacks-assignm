import React from "react"
import "./style.css"

export default class NewsItem extends React.Component {

  render() {
    return (
      <div className="news-item">
        <h3>
          <a href={this.props.item.url}>
            {this.props.item.title}
          </a>
        </h3>
        <p>{this.props.item.description}</p>
      </div>
    )
  }

}
