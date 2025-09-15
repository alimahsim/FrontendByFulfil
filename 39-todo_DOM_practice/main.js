let input = document.querySelector("input");
let todo = document.querySelector(".todo");
let delAll = document.querySelector(".delAll");
let lists = document.querySelector(".lists");

// console.log(lists);

let id = 0;

const addToDo = function () {
  if (input.value.trim() !== "") {
    let div = document.createElement("div");
    div.setAttribute("class", "list_item");
    div.innerHTML = `
          <p>
            ${input.value}
          </p>
          <div class="btns">
            <button>EDIT</button>
            <button>DONE</button>
            <button onclick="delToDo(${id})">DEL</button>
          </div>`;
    lists.append(div);
    // document.querySelector(".insOfDelAll").style.display = "block";
    let yet = document.querySelector(".insOfDelAll");
    yet.style.display = "none";
    delAll.style.display = "block";
    input.value = "";
    id++;
  }
};

const delToDo = function (id) {
  // console.log(id);
  // console.log(lists.children);
  lists.children[id].remove();
  console.log(id);

  id--;
};

const delAllToDo = () => {
  lists.innerHTML = null;
};
