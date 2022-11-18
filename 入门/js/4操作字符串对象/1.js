const convertToSlug = (name) => {
  name = name.replaceAll(" ", "-").toLowerCase();
  if (name.length > 15) name = name.slice(0,15);
  return name
};

// 测试用例
console.log(convertToSlug("to do list")); // "to-do-list"
console.log(convertToSlug("My SeCond BlOg")); // "my-second-blog"
console.log(convertToSlug("Grade inquiry of CET-4&6")); // "grade-inquiry-o"