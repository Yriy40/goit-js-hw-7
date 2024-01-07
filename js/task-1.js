const categoriesList = document.getElementById("categories");
console.log(categoriesList);
const items = categoriesList.querySelectorAll(".item");

console.log(`Total categories: ${items.length}`);

items.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const itemsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemsCount}`);
});
