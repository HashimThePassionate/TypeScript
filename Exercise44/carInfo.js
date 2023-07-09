"use strict";
function storeCarInfo(manufacturer, model, ...options) {
    const car = {
        manufacturer: manufacturer,
        model: model,
    };
    for (const option of options) {
        const key = Object.keys(option)[0];
        const value = option[key];
        car[key] = value;
    }
    return car;
}
const carInfo = storeCarInfo("Toyota", "Corolla", { color: "Silver" }, { feature: "Navigation" });
console.log(carInfo);
