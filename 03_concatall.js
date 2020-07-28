var user = {
  id: 888,
  name: 'JerryHong',
  courseLists: [{
    "name": "My Courses",
    "courses": [{
      "id": 511019,
      "title": "React for Beginners",
      "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
      "tags": [{ id: 1, name: "JavaScript" }],
      "rating": 5
    }, {
      "id": 511020,
      "title": "Front-End automat workflow",
      "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
      "tags": [{ "id": 2, "name": "gulp" }, { "id": 3, "name": "webpack" }],
      "rating": 4
    }]
  }, {
    "name": "New Release",
    "courses": [{
      "id": 511022,
      "title": "Vue2 for Beginners",
      "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
      "tags": [{ id: 1, name: "JavaScript" }],
      "rating": 5
    }, {
      "id": 511023,
      "title": "Angular2 for Beginners",
      "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
      "tags": [{ id: 1, name: "JavaScript" }],
      "rating": 4
    }]
  }]
};

var allCourseIds = [];

user.courseLists.forEach(list => {
  list.courses
    .filter(item => item.rating === 5)
    .forEach(item => {
      allCourseIds.push(item)
    })
})

console.log(allCourseIds)
//https://blog.jerry-hong.com/series/rxjs/thirty-days-RxJS-04/