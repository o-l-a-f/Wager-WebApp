import Amplify from "aws-amplify";

export class AmplifyConfiguration {
    static configureAmplify() {
        Amplify.configure({
            aws_appsync_region: "us-east-1",
            aws_appsync_graphqlEndpoint: "https://xrqpwgbe2nbxjcpaayn7rafefu.appsync-api.us-east-1.amazonaws.com/graphql",
            aws_appsync_authenticationType: "API_KEY",
            aws_appsync_apiKey: "da2-2lpk5z4lprbx5dt3x56mqszxxi"
        })
    }
}
