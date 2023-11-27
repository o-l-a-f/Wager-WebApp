import React from "react";
import { Flex, Link, useAuthenticator, useTheme } from "@aws-amplify/ui-react";

export const SignInFooter = () => {
  const { tokens } = useTheme();
  const { toForgotPassword } = useAuthenticator();

  return (
    <Flex justifyContent="center" padding={`0 0 ${tokens.space.medium}`}>
      <Link onClick={toForgotPassword}>Reset your password</Link>
    </Flex>
  );
};
