 const BOOK_TICKET= {
  'BOOK':'Book ticket'}

  export const book=(data)=> {
    return {
      type: BOOK_TICKET.BOOK,
      data: data
    }
  }


export default BOOK_TICKET;