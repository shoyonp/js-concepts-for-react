localStorage.setItem("userId", 16);
const addToLcalStorge = () => {
  const idInput = document.getElementById("storage-id");
  const id = idInput.value;
  const valueInput = document.getElementById("storage-value");
  const value = valueInput.value;

  //
  if (id && value) {
    localStorage.setItem(id, value);
  }
  idInput.value = "";
  valueInput.value = "";
};
