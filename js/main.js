var task = document.getElementById('task');
var saveBtn = document.getElementById('saveBtn');
var updateBtn = document.getElementById('updateBtn')
var res = document.getElementById('res');

var todo = []
saveBtn.onclick = function () {
  var obj = { name: task.value, status: 0 }
  todo.push(obj)
  task.value = ""
  show()
};

function show() {
  var data = ""
  for (var i = 0; i < todo.length; i++) {
    if (todo[i].status == 1) {
      data += `<li style='text-decoration: line-through' ondblclick=destroy(${i})> ${todo[i].name} <button onclick=edit(${i}) class="ed">Edit</button>  <button onclick=done(${i}) class="ed">Done</button> </li> `
    } else {
      data += `<li ondblclick=destroy(${i})> ${todo[i].name} <button onclick=edit(${i}) class="ed">Edit</button>  <button onclick=done(${i}) class="ed">Done</button> </li> `
    }
  }
  res.innerHTML = data
}

function destroy(index) {
  todo.splice(index, 1)
  show()
}

var i;
function edit(index) {
  i = index
  task.value = todo[index].name
  saveBtn.style.display = "none"
  updateBtn.style.display = "block"
}

updateBtn.onclick = function () {
  todo[i].name = task.value
  task.value = ""
  saveBtn.style.display = "block"
  updateBtn.style.display = "none"
  show()
}

function done(index) {
  if (todo[index].status == 0) {
    todo[index].status = 1
  } else {
    todo[index].status = 0
  }
  show()
}