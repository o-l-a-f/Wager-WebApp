import { Amplify } from "aws-amplify";

export class AmplifyConfiguration {
  static configureAmplify() {
    Amplify.configure({
      API: {
        GraphQL: {
          endpoint: "https://xrqpwgbe2nbxjcpaayn7rafefu.appsync-api.us-east-1.amazonaws.com/graphql",
          region: "us-east-1",
          defaultAuthMode: "userPool",
          apiKey: "da2-xr2ms4rts5d5hjzqa67q4bqdia"
        }
      },
      Auth: {
        Cognito: {
          userPoolClientId: "6tahtmnuc8fk3p15sog1a9hbdd",
          userPoolId: "us-east-1_KBCnfHjFv",
          signUpVerificationMethod: "code",
          loginWith: {
            username: true,
            email: true,
            phone: true
          },
          userAttributes: {
            given_name: { required: true },
            family_name: { required: true },
            email: { required: true },
            phone_number: { required: true }
          },
          mfa: {
            status: "optional",
            smsEnabled: true
          },
          passwordFormat: {
            minLength: 12,
            requireLowercase: true,
            requireUppercase: true,
            requireNumbers: true,
            requireSpecialCharacters: true
          }
        }
      }
    });
  }
}
