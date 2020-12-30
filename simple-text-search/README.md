# Simple Text Search using ExpresJS and MongoDB


## 3 endpoints
> ### http://localhost:3000/search - POST method
> {"keyword": "trip"} // available words is: "one, two, three, four, Body"
> ### response: search_id (uuid)

> ### http://localhost:3000/search?search_id=317dd593-bea2-4d3b-92a0-12ab10b98604 - GET method
> ### response: json object with the document data


> ### http://localhost:3000/rx-search - POST method
> {"search": "trip"} // available words is: "one, two, three, four, Body"
> ### response: json object with the document data


Of course
```sh
$ npm install
```
```sh
$ npm run dev
```
