import React from "react"
import NewsList from "components/news-list"
import CategorySelect from "components/category-select"

export default class App extends React.Component {

  state = {
    currentCategory: "general"
  }

  render() {
    return (
      <div>
        <CategorySelect currentCategory={this.state.currentCategory} />
        <NewsList categoryToShow={this.state.currentCategory} />
      </div>
    )
  }

}
