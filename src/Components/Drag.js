import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ThemeProvider, Flex, Box, Code } from "@chakra-ui/core";
import theme from '../theme';

const Drag = () => {

  const constraintsRef = useRef()

  return(
    <div>

      <Flex height="100vh" width="100vw" bg="#6B46C1" align="center" justify="center">
        <Box bg="#44337A" width="15em" height="15em" rounded="1em" ref={constraintsRef}>
          <Flex height="100%" width="100%" align="center" justify="center">
            <motion.div drag dragConstraints={constraintsRef}>
              <Box bg="#fff" width="5em" height="5em" rounded="1em"></Box>
            </motion.div>
          </Flex>
        </Box>
      </Flex>
    </div>
  )
}
export default Drag;
