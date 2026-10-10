import { comments } from "./comment.js";
// Уровень 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(number => number >= 5);
console.log(filteredNumbers);

const furniture = ["стол", "стул", "кровать", "шкаф", "диван"];
const searchedFurniture = furniture.includes("кровать");
console.log(searchedFurniture);

function reverseArray(arr) {
  return arr.reverse();
}
console.log(reverseArray(numbers));
console.log(reverseArray(furniture));

// Уровень 2
const filteredComments = comments.filter(comment => comment.email.endsWith(".com"));
console.log(filteredComments);

const postIdCounts = comments.map(comment => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1
}));
console.log(postIdCounts);

const idAndName = comments.map(comment => ({
  id: comment.id,
  name: comment.name
}));
console.log(idAndName);

const updatedComments = comments.map(comment => {
  return {
      ...comment,
      isInvalid: comment.body.length > 180
  };
});
console.log(updatedComments);
// Уровень 3
const emailsReduce = comments.reduce((acc, comment) => {
    acc.push(comment.email);
    return acc;
}, []);
console.log(emailsReduce);

const emailsMap = comments.map(comment => comment.email);
console.log(emailsMap)

const emailsJoin = emailsMap.join(', ');
console.log(emailsJoin);

const emailsString = emailsMap.toString();
console.log(emailsString);