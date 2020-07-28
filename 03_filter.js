Array.prototype.filter = function(callback) {

	var result = [];
	this.forEach((item, index) => {
		if(callback(item, index))
			result.push(item);
	});
	return result;
}


var newCourseList = [
	{
		"id": 511021,
		"title": "React for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 5
	},
	{
		"id": 511022,
		"title": "Vue2 for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 5
	},
	{
		"id": 511023,
		"title": "Angular2 for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 5
	},
	{
		"id": 511024,
		"title": "Webpack for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 4
	}
], idAndTitle = [];
/*
newCourseList.forEach((course) => {
	idAndTitle.push({ id: course.id, title: course.title });
});
*/
var ratingIsFive = [];
/*
newCourseList.forEach((course) => {
	if(course.rating === 5) {
		ratingIsFive.push(course);
	}
});
*/
/*
var ratingIsFive = newCourseList
                   .filter((course) => course.rating === 5);

*/

var ratingIsFive = newCourseList
                   .filter((course) => course.rating === 5)
                   .map(course => course.title);
console.log(ratingIsFive)