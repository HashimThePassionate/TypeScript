function storeCarInfo(manufacturer: string, model: string, ...options: Record<string, any>[]): Record<string, any> {
    const car: Record<string, any> = {
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
  