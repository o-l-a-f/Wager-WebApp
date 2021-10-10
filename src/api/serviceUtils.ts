import {GraphQLResult} from "@aws-amplify/api";
import {ListBetsResponse} from "./API";
import {WagerData} from "../global/types";
import getUsersById from "./usersClient";

export const WagerMutations = {
    createBet: `
        mutation createBet(bet: BetInput!) {
            createBet(bet: $bet) {
                completed createDate description id maker odds taker title value
            }
        }
    `,
    updateBet: `
        mutation updateBet(bet: UpdateBetInput!) {
            updateBet(bet: $bet) {
                completed createDate description id maker odds taker title value
            }
        }
    `,
    deleteBet: `
        mutation deleteBet(betId: String!) {
            deleteBet(betId: $betId) {
                id
            }
        }
    `
}

export const WagerQueries = {
    getBetById: `
        query getBetById(betId: String!) {
            getBetById(betId: $betId) {
                completed createDate description id maker odds taker title value
            }
        }
    `,
    listBets: `
        query listBets {
            listBets {
                completed createDate description id maker odds taker title value
            }
        }
    `
}

export function mapListBetsToWagerData(listBetsResponse: GraphQLResult<ListBetsResponse>): WagerData[] {
    return listBetsResponse.data?.listBets?.map(bet => ({
        completed: bet?.completed,
        createDate: bet?.createDate,
        description: bet?.description,
        id: bet?.id,
        maker: getUsersById(`${bet?.maker}`),
        odds: bet?.odds,
        taker: getUsersById(`${bet?.taker}`),
        title: bet?.title,
        value: bet?.value
    } as WagerData)) || []
}
