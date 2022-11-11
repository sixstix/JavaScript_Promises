/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}


// TODO: Handle the resolved or rejected states of the promise
let errorId = document.querySelector("#error");
let listId = document.querySelector("#list");

let promise = getList();

function workWithList(list) {
  list.forEach((hobbit) => {
    let li = document.createElement("li");
    li.textContent = hobbit;
    listId.appendChild(li);
  });

}

function workWithError(reject) {
  console.log(reject);
  errorId.textContent = reject.message;
}


promise.then(workWithList).catch(workWithError);

