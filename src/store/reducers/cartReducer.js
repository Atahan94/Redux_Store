const intitialState = {
  totalCost: 0,
  totalProducts: 0,
  items: [],
};

export default (state = intitialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return state.items.find((item) => item.code === action.product.code)
        ? {
            totalProducts: state.totalProducts + 1,
            totalCost: state.totalCost + action.product.cost,
            items: state.items.map((item) => {
              if (item.code === action.product.code) {
                return {
                  ...item,
                  quantity: (item.quantity != null)? item.quantity + 1 : 2,
                }
              }
              else{return item}
            }),
          }
        : {
            totalProducts: state.totalProducts + 1,
            totalCost: state.totalCost + action.product.cost,
            items:[...state.items, action.product],
          };
    }
    case "SET_QUANTITY": {
      console.log("setQuantity");
      let reviseQuantity = state.items.map((item) => {
        if (item.code === action.code) {
          return {
            ...item,
            quantity: action.quantity,
          };
        }
        return item;
      });
      
      let reviseTotalQuantity = reviseQuantity.reduce(
        (prev, curr) => prev + curr.quantity,
        0
      );

      let reviseTotalCost = reviseQuantity.reduce(
        (prev, curr) => prev + curr.quantity * curr.cost,
        0
      );
      console.log("TotalQuantity",reviseTotalQuantity,"TotalCost",reviseTotalCost)
      return {
        totalProducts: reviseTotalQuantity,
        totalCost: reviseTotalCost,
        items: reviseQuantity,
      };
    }

    case "REMOVE_ITEM": {
      let findItem = state.items.find(item => item.code === action.code);
      if(findItem){
        let totalCostOfItem = (findItem.quantity? findItem.quantity : 1) * findItem.cost;
        return{
          totalProducts: state.totalProducts - (findItem.quantity? findItem.quantity : 1),
          totalCost: state.totalCost - totalCostOfItem,
          items: state.items.filter(item => item.code !== action.code)
        }
      } else {
        return state;
      }
    }
    default: {
      return state;
    }
  }
};
