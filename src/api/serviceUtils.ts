import { GraphQLResult } from "aws-amplify/api";
import { ListBetsResponse } from "./API";
import { WagerData } from "../global/types";
import getUsersById from "./usersClient";

export function mapListBetsToWagerData(
  listBetsResponse: GraphQLResult<ListBetsResponse>
): WagerData[] {
  return (
    listBetsResponse.data?.listBets?.map(
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
    ) || []
  );
}
