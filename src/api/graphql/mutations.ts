const createBet = `
    mutation createBet(bet: BetInput!) {
      createBet(bet: $bet) {
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

const updateBet = `
    mutation updateBet(bet: UpdateBetInput!) {
      updateBet(bet: $bet) {
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

const deleteBet = `
    mutation deleteBet(betId: String!) {
      deleteBet(betId: $betId) {
        id
      }
    }
  `;

export const Mutations = {
  createBet,
  updateBet,
  deleteBet
};
