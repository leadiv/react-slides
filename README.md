React Slides
=====================

A simple presentation slide system build in ReactJS. This is not intended to be used as a production slide system just an education tool in learning ReactJS.

### Usage

With Docker
```
docker build -t react-slides .
docker run -d -p 3000:3000 -v $(pwd)/react-slides/src:/app/src react-slides
open http://localhost:3000
```

or just locally

```
npm install
npm start
open http://localhost:3000
```

### Dependencies

* React
* Webpack
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [babel-loader](https://github.com/babel/babel-loader)
* [react-hot-loader](https://github.com/gaearon/react-hot-loader)

### Resources

**ADD READ MORE SOURCES HERE**
