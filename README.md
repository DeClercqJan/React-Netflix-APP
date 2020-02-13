# react-netflix-app

## basic idea

- get movies now-playing on first-load. Get trailer/details of movie. Or search other movie and get details one step later
- BeCode React JavaScript challenge

## implementation

- hooks instead of classes. Chained useEffect and useState with changes in state as the condition for the next useEffect
- react router
- history.push for query parameters
- condtionally displayed certain things and have some errors messages set
- error boundaries set
- tried to have clean/readable code

## to do's

- overhaul the whole thing to have a personalised film suggestion with the click of a few buttons based on how I feel (sad, romantic, party ...) and that I haven't seen before

# ORIGINAL ASSIGNMENT BELOW

# React Netflix APP

## Simple introduction to hooks

---

![react](netflix.png)

- Repository: - `react-video`
- Type of Challenge: - `Learning Challenge`
- Duration: - `3 days`
- Deadline: - `7/01/20 16:00`
- Team challenge : - `solo or 2 people`

## Introduction

For this project you will create a netflix app. kind of :)
This project is made for progressive enhancement.Wich means we are going to scale it from front-end app to a fullstack app.
First of all create an account on the following [platform](https://www.themoviedb.org/)

### 1 Setup you environment

With the `create-react-app` cli tool bootstrap a new project call `react-video`.

```
npx create-react-app video-app
```

or

```
yarn -g add create-react-app

```

if you don't have npx, install it with

```
sudo npm install -g npx

```

When you have created your account go to the api section of the website and request an API-KEY.
Here is an example on how your app should look like: [mockup](https://www.figma.com/file/E9AlG9kpQ4mplFdo8OnfAozP/MovieDB?node-id=0%3A1)
Feel free to create your own designs/mockups.

### 2 Use React hooks

Hooks are one of the latest features in React. It allows you to write a more readable and maintainable code.
For this part you will only have to use to hooks:

- [useState()](https://reactjs.org/docs/hooks-reference.html#usestate)
- [useEffect()](https://reactjs.org/docs/hooks-reference.html#useeffect)

In the `src` folder on your app you can create a view folder and a components folder.

### 3 Use react router dom

For each app, we need routes, and for that we have [react-router-dom](https://codeburst.io/getting-started-with-react-router-5c978f70df91).

## Sprints

## Homepage:

Create Home.js inside of the view folder.
Create Card.js inside of the components folder.

Fetch the [Now playing](https://www.themoviedb.org/movie/now-playing) movies from the TMDB database.
inside of the Card.js display

- the title of the movie
- the image/poster of the movie
- the overview of the movie
- the Vote average of the movie.

Use the props to display everyting inside of Home.js
(ps: The point of the Card.js component is to reuse it everywhere 😉 )

## Search Bar:

On each page of our app, we should have the searchBar so we can search for movies everywhere.
Create Search.js inside of the components folder.
Fetch the user's [search](https://developers.themoviedb.org/3/search/search-movies) movies from the TMDB database.
Use the Card.js to display the results in an other view called Result.js

### Tools

-[create-react-app](https://create-react-app.dev/docs/getting-started/) is a tool the will create a react environment for you.

- [JSdocs](https://devdocs.io/jsdoc/about-getting-started), a lot of developers work with . This little tool will generate a documentation for your code.
  i Strongly recommend it.

- [Figma](https://www.figma.com) is UI UX software. really useful to create your mockups and designs. You can create an account it is free.

- Identify all the different components you will have to create. [(think in react!)](https://reactjs.org/docs/thinking-in-react.html)
