


const data = [
  { name: "Laptop", category: "Electronics", type: "Device" },
  { name: "Banana", category: "Fruits", type: "Food" },
  { name: "Chair", category: "Furniture", type: "Home" },
  { name: "Mobile", category: "Electronics", type: "Device" },
  { name: "Apple", category: "Fruits", type: "Food" },
  { name: "Table", category: "Furniture", type: "Home" },
  { name: "Tablet", category: "Electronics", type: "Device" },
  { name: "Watermelon", category: "Fruits", type: "Food" },
  { name: "Cupboard", category: "Furniture", type: "Home" },
  { name: "I-pad", category: "Electronics", type: "Device" },
  { name: "Grapes", category: "Fruits", type: "Food" },
  { name: "Chester", category: "Furniture", type: "Home" },
  { name: "Apple watch", category: "Electronics", type: "Device" },
];

const tableBody = document.getElementById("table-body");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category");

function showData(items) {
  tableBody.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    let row = `<tr>
                <td>${items[i].name}</td>
                <td>${items[i].category}</td>
                <td>${items[i].type}</td>
              </tr>`;
    tableBody.innerHTML += row;
  }
}


function filterData() {
  let searchValue = searchInput.value.toLowerCase();
  let categoryValue = categoryFilter.value;
  let filtered = [];

  for (let i = 0; i < data.length; i++) {
    let nameMatch = data[i].name.toLowerCase().includes(searchValue);
    let typeMatch = data[i].type.toLowerCase().includes(searchValue);
    let categoryMatch = categoryValue === "" || data[i].category === categoryValue;

    if ((nameMatch || typeMatch) && categoryMatch) {
      filtered.push(data[i]);
    }
  }

  showData(filtered);
}
showData(data);

searchInput.addEventListener("input", filterData);
categoryFilter.addEventListener("change", filterData);
