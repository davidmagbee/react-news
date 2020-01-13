# Project Overview
General Assembly Unit 2 Project. Built with ReactJS and Gatsby. Ongoing development. 

## Project Description

News Application: a simple news search app. Search by news outlet, topic, etc, or just choose headlines to be displayed. Greater functionality down the road that allows for more specific search parameters and display options: Date range, specified outlet selectors, and more.

## Project Links

- [github repo](https://github.com/macuser413/react-news)
- [project powered by the NewsAPI.org api](https://newsapi.org/)
- [deployment](https://rise-and-headline.netlify.com/)

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

- [wireframes](https://i.ibb.co/DknZJkZ/React-Project-Components.jpg)
- [react architecture](https://i.ibb.co/DknZJkZ/React-Project-Components.jpg)


Define the the React components and the architectural design of your app.

### MVP/PostMVP - 5min

#### MVP:
##### Bronze:
Home Page - populated with pre-determined results
Article Page - user selected article from Home Page
- contains article image, contributor, description, link to full article

Breakdown:
Home Page - Live top and breaking news headlines
Article Page (Separate component)
Article contains image.
Description blurb of article
Button to click to read full article at source.
No search for MVP!!!

#### Post MVP:
##### Silver:
Implement search
Filter stories

##### Gold:
Related stories
saved articles 
Utilize GraphQL

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the footer | 
| Home | This will render the Home page with pre-determined article results | 
| ArticlePage | This will render the Article Page of the selected article |
| ArticleImage | This will render the image from the chosen article | 
| Title/Author | This will render the Author and Article title | 
| Description | This will render the article description of the chosen article | 

## Time Frames

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Planning | H | 4hrs| 4.5 hrs | 4.5 hrs |
| Pseudocode | H | 1hrs| .5 hrs | .5 hrs |
| Header | H | 1hrs| .75 hrs | .75 hrs |
| Footer | H | 1hrs| 1 hrs | 1 hrs |
| Home | H | 3hrs| 1 hrs | 1 hrs |
| About | H | 1hrs| 2 hrs | 2 hrs |
| ArticlePage | H | 10hrs| 9.25 hrs | 9.25 hrs |
| Working with API | H | 6hrs| 5.75 hrs | 5.75 hrs |
| CSS | H | 10hrs| 6 hrs | 6 hrs |
| Deployment | H | 1hrs| 1.25 hrs | 1.25 hrs |
| Walk-through | H | 1hrs| .75 hrs | .75 hrs |
| Total | H | 39hrs| 5 hrs | 32.75 hrs |

## Additional Libraries
[Gatsby](https://www.gatsbyjs.org/)
My primary use of this library was to utilize the layout, links, and routing features. As the project progressed, I realized that there is a great deal more I can utilize this library for, and I am eager to refactor and expand features with this powerful tool. 

## Code Snippet

This is a simple snippet of code, but it is something I'm proud of because it shows a cementing of my growing knowledge of React and props. This snippet only renders the data fetched from the API after it confirms it is in state, and then it prevents any of that data (news articles) to render if they do not contain an image in conjunction with the articles retrieved. 

```
render() {
    let articles = []
    if (this.props.news.articles) {
      articles = this.props.news.articles.map(article => {
        if (article.urlToImage != null) {
          return <ArticleBox article={article} />
        }
      })
    }
```

## Issues and Resolutions
 When I attempted to build the Gatsby app in order to deploy, I kept encountering an issue resulting from a piece of code suggest by the API to fetch the data. Throughout development, there was never an issue retrieving the data once the API call was in place - so this was not anticipated by any means.
 
 The issue was the result of the use of a deprecated Request function to request the data in the API fetch. This methodology works - as it did in development - but is not supported for deployment. This was simply fixed be removing the Request and simply using the const url that was assigned to the API, endpoint, and API key. 

#### SAMPLE.....tk - I need to re-create the image in order to capture the error code. 
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
