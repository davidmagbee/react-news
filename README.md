# Project Overview


## Project Description

News Application: a simple news search app. Search by news outlet, topic, etc, or just choose headlines to be displayed. Greater functionality down the road that allows for more specific search parameters and display options: Date range, specified outlet selectors, and more.

## Project Links

- [github repo](https://github.com/macuser413/react-news)
- [project powered by the NewsAPI.org api](https://newsapi.org/)
- [deployment]()

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
click on news article - routes to that article page
Article Page (Separate component)
contains image
blurb of article
button to read full article
No search for MVP!!!

#### Post MVP:
##### Silver:
Implement search
Filter stories

##### Gold:
Related stories
saved articles 

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the footer include the nav | 
| Home | This will render the Home page with pre-determined article results | 
| ArticlePage | This will render the Article Page of the selected article |
| ArticleImage | This will render the image from the chosen article | 
| Title/Author | This will render the Author and Article title | 
| Description | This will render the article description of the chosen article | 

## Time Frames

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evaluate game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Planning | H | 4hrs| 4.5 hrs | 4.5 hrs |
| Pseudocode | H | 1hrs| .5 hrs | .5 hrs |
| Header | H | 1hrs| tk hrs | tk hrs |
| Footer | H | 1hrs| tk hrs | tk hrs |
| Home | H | 3hrs| tk hrs | tk hrs |
| ArticlePage | H | 7hrs| tk hrs | tk hrs |
| ArticleImage | H | 3hrs| tk hrs | tk hrs |
| Title/Author | H | 3hrs| tk hrs | tk hrs |
| Description | H | 3hrs| tk hrs | tk hrs |
| Working with API | H | 6hrs| .5 hrs | .5 hrs |
| CSS | H | 10hrs| tk hrs | tk hrs |
| Total | H | 42hrs| 5 hrs | 5 hrs |

## Additional Libraries
 Use this section to list all supporting libraries and their role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
