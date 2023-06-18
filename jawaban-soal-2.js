var storageId = {
    "data": [
      {
        "storageId": 10000008207,
        "productName": "FloBrand-DressBSPink",
        "quantity": 76,
      },
      {
        "storageId": 10000002181,
        "productName": "FloBrand-DressBSPink",
        "quantity": 71,
      },
      {
        "storageId": 10000008884,
        "productName": "FloBrand-DressBSPink",
        "quantity": 10,
      }
    ]
  };
  
  var totalQuantity = 0;
  
  for (var i = 0; i < storageId.data.length; i++) {
    totalQuantity += storageId.data[i].quantity;
  }
  
  console.log("Total Quantity FloBrand-DressBSPink:", totalQuantity);