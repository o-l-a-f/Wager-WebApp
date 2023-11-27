import { Heading, useTheme } from "@aws-amplify/ui-react";

export const SignInHeader = () => {
  const { tokens } = useTheme();

  return (
    <Heading level={3} padding={`${tokens.space.xl} ${tokens.space.xl} 0`}>
      Sign-in to your Account
    </Heading>
  );
};
