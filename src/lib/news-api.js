const apiKey = "84711ba43af24ab2834dae81fb649fd2"

const fetchNewsForCategory = (category) => (
  fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`)
    .then(response => response.json())
)

export default {
  fetchNewsForCategory
}
