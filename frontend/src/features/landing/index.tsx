import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  ButtonProps,
  Divider,
  Typography,
  TypographyProps,
} from "@mui/material";

const LandingPage: React.FC = () => {
  const theme = useTheme();
  const COLORS = theme.palette;
  const PROPS = theme.props;

  const landingPageFont = "Azeret Mono, monospace";

  // Left & Right Box Components
  const sharedBoxStyle = { display: "flex", flex: 1 };
  const LeftBox = styled(Box)({
    justifyContent: "flex-end",
    ...sharedBoxStyle,
  });
  const RightBox = styled(Box)({
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: 16,
    ...sharedBoxStyle,
  });

  // Title Components
  function GradientTypography(props: TypographyProps) {
    return (
      <Typography
        variant="inherit"
        component="span"
        sx={{
          ...PROPS.textGradientProps,
        }}
        {...props}
      />
    );
  }

  // Landing Page Buttons
  function LandingButton(props: ButtonProps<"a", { to: string }>) {
    return (
      <Button
        variant="boxed"
        component={Link}
        sx={{
          fontFamily: landingPageFont,
          minWidth: "200px",
          maxWidth: "25%",
          textTransform: "lowercase",
          transition: "color 0.4s ease, border-color 0.4s ease",
          fontWeight: 500,
          "&:hover": {
            ...PROPS.textGradientProps,
            borderColor: "transparent",
            textDecoration: "underline",
          },
        }}
        {...props}
      />
    );
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      padding="16px"
      gap={4}
      flexDirection="row"
      sx={{
        textAlign: "center",
        backgroundColor: COLORS.background.default,
      }}
    >
      <LeftBox>
        <Typography
          align="right"
          variant="h1"
          color={COLORS.charcoal.main}
          fontFamily={landingPageFont}
        >
          <GradientTypography>
          explorations</GradientTypography>
          <br />
          in chatbot ux
        </Typography>
      </LeftBox>

      <Divider
        orientation="vertical"
        flexItem
        sx={{
          bgcolor: COLORS.charcoal.main,
          height: 175,
          alignSelf: "center", // Center the divider within the parent
        }}
      />

      <RightBox>
        <LandingButton to="/conversation-tagging">Convo Tagging</LandingButton>
        <LandingButton to="/">Demo 2</LandingButton>
        <LandingButton to="/">Demo 3</LandingButton>
      </RightBox>
    </Box>
  );
};

export default LandingPage;
