# Sprint 5 - Callback functions and API use repetition

This assignment is a chance to practice implementing callback functions and interacting with APIs. There is already some code written for you which you will need to use as a base to complete the tasks.

The code is based around the [News API](https://newsapi.org/) which offers a simple and nice set of endpoints which give you access to thousands of news articles from many, many news sources. In order to use the API, you need to sign up for an API key. Click the big "register" button, fill in your details, and copy the API key they give you.

Before you get to coding, spend some time to get the project running and get familiar with the existing codebase:

1. Edit src/lib/news-api.js and add your API key.
1. Run the project and get a feel for how it looks. Use the inspector to look at the react components and what props and state they have.
1. Read the code and get a hang of how it works and which components do what.

Now, to coding!

## TASK 1: Implement the category select

There's already a category dropdown built with a list of categories which are supported by the API. However, when the user selects a new option from the dropdown, nothing happens to the news articles list.

*Your task is to implement a callback function which passes the new category up from the select, to the app component, and then down to the news list component so that it can run a new api call*

To consider this task complete, if I change the dropdown to "health", then I should see "Loading..." and then a list of health-related news articles when the api request is complete. If I then change it to "technology", I should see "Loading..." again, and then technology related news articles when the api request is complete.

## TASK: 2 Add a search component

Read the [API documentation](https://newsapi.org/docs/endpoints/top-headlines) to discover how you can send search queries to the api.

To complete this task you need to do the following:

1. *Write a new function in the news-api.js file which, when passed a search string, runs an api request with the search (just like the existing code takes a category and runs an api request for the category). Don't forget to export the function, too!*
2. *Implement an input field which will be used to enter search terms, and, using the same techniques as the category select, use it to run a new api request with the search term.*

To consider this task complete, as a user, I should see a search field, and when I type "Syria" in it, I should see news articles related to Syria.

### :books: Reading List

* [News Api documentation](https://newsapi.org/docs)
* [encodeURIComponent()](https://www.w3schools.com/jsref/jsref_encodeURIComponent.asp) (this will be useful for encoding your search terms so you don't break the API url)
* [Callback functions in JS](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
* [Callback functions in React](https://reactjs.org/docs/faq-functions.html)

---

### :sos: How to get help
Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language you're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your Company.
3. Ask your fellow students in Slack.
4. Ask the teacher. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment you should be a little more comfortable with using callback functions to pass information between components. You should also be getting more familiar with reading documentation about APIs and discovering how to get the data you need when you don't know how the API behaves yet.

---

### :runner: Stretch Goals

Done with the main task? Here's some ideas for things to continue with:

1. Make it possible to search within a category so that the results don't just either show a category or a search.
1. Look at the response from the API at what data you have and make the news list nicer - perhaps adding an image, or author information.
1. Add a country select to only show news articles from certain countries.
1. Find more interesting features you could add by reading the API documentation!
