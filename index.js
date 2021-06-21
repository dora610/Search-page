const userList = [
  { name: "John", age: 10, city: "NY" },
  { name: "Jane", age: 15, city: "Zurich" },
  { name: "Veronica", age: 20, city: "Paris" },
  { name: "Himanshu", age: 30, city: "Delhi" },
  { name: "Tina", age: 10, city: "San Francisco" },
];
const search = document.querySelector('.wrapper input[name="search"]');
const result = document.querySelector(".search-result>ul");

function showResult(list) {
  result.innerHTML = "";
  list.forEach((ele) => {
    const html = `
        <li>
            <p>${ele?.name}</p>
            <p><span>${ele?.age}</span> || <span>${ele?.city}</span></p>
            <hr />
          </li>
        `;
    result.insertAdjacentHTML("beforeend", html);
  });
}

function handleInput(e) {
  const searchResult = userList.filter((ele) =>
    ele.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  showResult(searchResult);
}

search.addEventListener("input", handleInput);

showResult(userList);
