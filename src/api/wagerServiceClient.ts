import { generateClient, GraphQLResult } from "@aws-amplify/api";
import { Queries } from "./graphql/queries";
import { GetBetResponse, ListBetsResponse } from "./API";
import getUsersById from "./usersClient";
import { WagerData } from "../global/types";

class WagerServiceClient {
  private readonly client;

  constructor() {
    this.client = generateClient();
  }

  // eslint-disable-next-line
  private async callGraphQL(query: string, variables?: any) {
    return this.client.graphql({ query, variables, authMode: "apiKey" });
  }

  async listAllBets() {
    const result = (await this.callGraphQL(Queries.listBets)) as GraphQLResult<ListBetsResponse>;
    return result.data.listBets
      ? result.data.listBets.map(
          (bet) =>
            ({
              completed: bet?.completed,
              createDate: bet?.createDate,
              description: bet?.description,
              id: bet?.id,
              maker: getUsersById(`${bet?.maker}`),
              odds: bet?.odds,
              taker: getUsersById(`${bet?.taker}`),
              title: bet?.title,
              value: bet?.value
            }) as WagerData
        )
      : [];
  }

  async getBetById(id: string) {
    const result = (await this.callGraphQL(Queries.getBetById, {
      betId: id
    })) as GraphQLResult<GetBetResponse>;
    return result.data.getBet;
  }
}

export default WagerServiceClient;
