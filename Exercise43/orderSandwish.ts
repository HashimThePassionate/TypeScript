function orderSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    console.log("Bread");
    for (const item of items) {
      console.log(item);
    }
    console.log("Bread");
    console.log("-----------------------");
  }
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Swiss");
orderSandwich("Chicken", "Bacon", "Avocado", "Mayonnaise");
