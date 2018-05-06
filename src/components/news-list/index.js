import React from "react"
import newsApi from "lib/news-api"
import NewsItem from "components/news-item"

import "./style.css"

export default class NewsList extends React.Component {

  state = {
    newsItems: [],
    totalItems: 0,
    loading: true
  }

  componentDidMount() {
    this.loadNews("general")
  }

  loadNews = (category) => {
    this.setState({ loading: true })

    newsApi.fetchNewsForCategory(category).then((response) => {
      this.setState({
        newsItems: response.articles,
        totalItems: response.totalResults,
        loading: false
      })
    })
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="news-list">
          {this.state.newsItems.map(item => (
            <NewsItem key={item.url} item={item} />
          ))}

          <p>Total number of articles found: {this.state.totalItems}</p>
        </div>
      )
    }
  }

}
