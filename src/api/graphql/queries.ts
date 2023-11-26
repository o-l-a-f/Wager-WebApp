const getBetById = `
    query getBetById(betId: String!) {
      getBetById(betId: $betId) {
        completed
        createDate
        description
        id
        maker
        odds
        taker
        title
        value
      }
    }
  `;

const listBets = `
    query listBets {
      listBets {
        completed
        createDate
        description
        id
        maker
        odds
        taker
        title
        value
      }
    }
  `;

export const Queries = {
  listBets,
  getBetById
};
