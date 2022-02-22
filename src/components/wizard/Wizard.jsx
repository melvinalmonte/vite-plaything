import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";
import StepWizard from "react-step-wizard";
import "./styles.css"

const Wizard = ({ children }) => {
  const [state, updateState] = React.useState({});
  // Do something on step change
  const onStepChange = (stats) => {
    console.log(stats);
    const { activeStep } = stats;
    updateState({ ...state, activeStep });
  };
  const setInstance = (SW) =>
    updateState({
      ...state,
      SW,
    });
  const { SW, activeStep } = state;

  let noTransitions = {
    enterRight: "",
    enterLeft: "",
    exitRight: "",
    exitLeft: "",
  };

  return (
    <Box p={5} className="wizard-box">
      <StepWizard
        onStepChange={onStepChange}
        transitions={noTransitions}
        isLazyMount
        instance={setInstance}
        className="wizard-component"
      >
        {children}
      </StepWizard>
      {SW && <InstanceDemo SW={SW} activeStep={activeStep} />}
    </Box>
  );
};

const InstanceDemo = ({ SW, activeStep }) => (
  <Stack className="instance-box" direction={{ base: "column", md: "row" }} spacing={5} pt={5}>
    {console.log("ACTIVE STEP: ", activeStep)}
    <Box>
      <Button borderRadius={"full"} size={"sm"} onClick={SW.firstStep}>
        First Step
      </Button>
    </Box>
    <Box>
      <Button borderRadius={"full"} size={"sm"} onClick={SW.previousStep}>
        {" "}
        Previous Step
      </Button>
    </Box>
    <Box>
      <Button borderRadius={"full"} size={"sm"} onClick={SW.nextStep}>
        Next Step
      </Button>
    </Box>
    <Box>
      <Button
        borderRadius={"full"}
        size={"sm"}
        onClick={() => SW.goToNamedStep("step3")}
      >
        Step 3
      </Button>
    </Box>
    <Box>
      <Button borderRadius={"full"} size={"sm"} onClick={SW.lastStep}>
        Last Step
      </Button>
    </Box>
  </Stack>
);

export default Wizard;
