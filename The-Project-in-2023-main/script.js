const addItemBtn = document.getElementById("addItemBtn");
const itemInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");

addItemBtn.addEventListener("click", addItem);

function addItem() {
    const itemName = itemInput.value;
    if (itemName.trim() !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            ${itemName}
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        `;
        itemList.appendChild(li);
        itemInput.value = "";
        addEditDeleteListeners(li);
    }
}

function addEditDeleteListeners(li) {
    const editBtn = li.querySelector(".editBtn");
    const deleteBtn = li.querySelector(".deleteBtn");

    editBtn.addEventListener("click", () => {
        const newText = prompt("Edit item:", li.firstChild.textContent);
        if (newText !== null) {
            li.firstChild.textContent = newText;
        }
    });

    deleteBtn.addEventListener("click", () => {
        itemList.removeChild(li);
    });
}
