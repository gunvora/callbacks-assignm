import React from "react"
import "./style.css"

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology"
]

export default class CategorySelect extends React.Component {

  handleChange = (event) => {
    console.log("Select changed", event.target.value)
  }

  render() {
    return (
      <div className="category-select">
        <label>
          Show
          <select onChange={this.handleChange}>
            {categories.map(category => (
              <option
                selected={category === this.props.currentCategory}
                key={category}
                value={category}>
                {category}
              </option>
            ))}
          </select>
          news
        </label>
      </div>
    )
  }

}
