function productFilter(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    };
  }
  
  // Example usage:
  const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Smartphone", category: "Electronics" },
    { name: "Pants", category: "Clothing" },
    { name: "Blender", category: "Home Appliances" }
  ];
  
  // Create a filter function for the products
  const filterByCategory = productFilter(products);
  
  // Get all products in the "Electronics" category
  const electronics = filterByCategory("shirt");
  console.log(electronics);
  
  // Get all products in the "Clothing" category
  const clothing = filterByCategory("Clothing");
  console.log(clothing);
  