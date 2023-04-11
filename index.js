let url = "https://jsonplaceholder.typicode.com/posts";
const ul = document.getElementById("ul");
let searchData = null;

document.getElementById("text").addEventListener("keyup", (e) => {
  searchData = e.target.value;
  loadList();
});

let data;

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    data = res;
  });

setTimeout(() => {
  loadList();
}, 1000);

const searchItem = (val) => {
  searchData = val;
  loadList();
};

function loadList() {
  let tmpData;
  if (searchData == null) {
    tmpData = [...data];
  } else {
    tmpData = data.filter((ele) => {
      return ele.title.includes(searchData) || ele.body.includes(searchData);
    });
  }

  ul.innerHTML = "";
  tmpData = tmpData.map((ele) => {
    return `<li><p>${ele.title}</p><span> ### ${ele.body}</span></li>`;
  });
  ul.innerHTML = tmpData;
}
