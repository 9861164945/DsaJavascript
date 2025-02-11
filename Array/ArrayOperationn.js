const array = [];
let choice;

do {
  console.log("\nMenu:");
  console.log("1. Insert an element");
  console.log("2. Delete an element");
  console.log("3. View array");
  console.log("4. Delete all elements");
  console.log("5. Insert multiple elements");
  console.log("0. Exit");
  choice = parseInt(prompt("Enter your choice: "));

  switch (choice) {
    case 1: // Insert an element
      const element = parseInt(prompt("Enter the element to insert: "));
      array.push(element);
      console.log("Element inserted.");
      break;

    case 2: // Delete an element
      if (array.length === 0) {
        console.log("Array is empty.");
      } else {
        const index = parseInt(prompt("Enter the index to delete (0-based): "));
        if (index >= 0 && index < array.length) {
          array.splice(index, 1);
          console.log("Element deleted.");
        } else {
          console.log("Invalid index.");
        }
      }
      break;

    case 3: // View array
      console.log("Array: ", array);
      break;

    case 4: // Delete all elements
      array.length = 0;
      console.log("All elements deleted.");
      break;

    case 5: // Insert multiple elements
      const n = parseInt(prompt("Enter the number of elements to insert: "));
      console.log(`Enter ${n} elements:`);
      for (let i = 0; i < n; i++) {
        const elem = parseInt(prompt(`Element ${i + 1}: `));
        array.push(elem);
      }
      console.log("Elements inserted.");
      break;

    case 0: // Exit
      console.log("Exiting program.");
      break;

    default:
      console.log("Invalid choice. Please try again.");
  }
} while (choice !== 0);
