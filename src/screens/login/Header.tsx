import React from "react";
import { useTheme, View } from "@aws-amplify/ui-react";

export const Header = () => {
  const { tokens } = useTheme();

  return (
    <View
      backgroundColor={tokens.colors.black}
      fontSize={tokens.fontSizes.xxxxl}
      textAlign="center"
      color={tokens.colors.white}
    >
      _wager
    </View>
  );
};
