import BOOK_TICKET from "../Actions/index";

const initialState = { 
      seats: 100,
      data: []
}

const mainReducer = (state = initialState, action) => { 
    let trans =Array.from(state.data)
    switch (action.type) {
      case BOOK_TICKET.BOOK:
          trans.push({
            ...action.data,
             name: action.data.name,
            gender: action.data.gender,
            contact: action.data.contact
        })
        return {
           ...state,
           data: Array.from(trans),
          seats: (state.seats - 1)
        }
      default:
        return state;
    }
  }
  export default mainReducer;





