const apiKey = ""

const fetchNewsForCategory = (category) => (
  fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`)
    .then(response => response.json())
)

export default {
  fetchNewsForCategory
}
