const contact = [
  {
    name: "Ram",
    mobile: 9876554232,
    address: "Raipur"
  },
  {
    name: "Rohit",
    mobile: 9877654232,
    address: "Delhi"
  },
  {
    name: "Sita",
    mobile: 9845554232,
    address: "Mumbai"
  },
  {
    name: "Sonu",
    mobile: 9876784232,
    address: "Chennai"
  },
  {
    name: "Shyam",
    mobile: 9876894232,
    address: "Kolkatta"
  }
];

function counterReducer(state = contact, action) {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];
    case "EDIT_CONTACT":
      return { value: state.value - 1 };
    case "DELETE_CONTACT":
      console.log(action.payload);
      return [...action.payload];
    default:
      return state;
  }
}

export default counterReducer;
