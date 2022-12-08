import { motion } from "framer-motion";
import { Icon } from "../assets/icons";
import { Modal, Flex, Box, Text, Button, Input } from "../primitives/index";
import theme from "../styles/theme";

// Base Modal, start from here
// Modal.Base = ({ handleClose }) => {

//   return (
//     <Modal.BG onClick={handleClose}>
//       <motion.div
//           onClick={(e) => e.stopPropagation()}
//           >
//           <Modal width="400px" justifyContent="center">
//             <Flex.Column flexGrow="1">
//               <Text.Heading_MD justifyContent="center" mb={1}>
//                 {modalTitle}
//               </Text.Heading_MD>

//               <Text.P_SM
//                 color={theme.colors.white_500}
//                 justifyContent="center"
//                 mb={3}
//               >
//                 {modalDescription}
//               </Text.P_SM>
//             </Flex.Column>

//             <Button.ModalClose onClick={handleClose}/>

//           </Modal>
//       </motion.div>
//     </Modal.BG>
//   );
// };

Modal.Login = ({ handleClose }) => {
  const dropIn = {
    hidden: {
      y: "80px",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: {
      scale: 0.95,
      opacity: 0,
    },
  };

  return (
    <Modal.BG onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Modal width="400px" justifyContent="center">
          <Flex.Column flexGrow="1">
            <Text.Heading_MD justifyContent="center" mb={1}>
              Sign In
            </Text.Heading_MD>

            <Text.P_SM
              color={theme.colors.white_500}
              justifyContent="center"
              mb={3}
            >
              Enter your credentials to access your account
            </Text.P_SM>

            <Input
              bgColor="black400"
              Label="Email"
              Placeholder="Type your email..."
            />

            <Input
              bgColor="black400"
              Label="Password"
              Placeholder="Type your password.."
              Password
            />

            <Button.IconRight
              sort="primary"
              size="md"
              mb={4}
              iconName="arrow_right"
            >
              Sign In
            </Button.IconRight>

            <Flex.Row justifyContent="center">
              <Text.P_SM color={theme.colors.white} justifyContent="center">
                Don’t have an account?
              </Text.P_SM>
              <Text.P_SM
                color={theme.colors.primary_500}
                justifyContent="center"
              >
                Register here
              </Text.P_SM>
            </Flex.Row>
          </Flex.Column>

          <Button.ModalClose onClick={handleClose} />
        </Modal>
      </motion.div>
    </Modal.BG>
  );
};

// Previous version without any auth
// Modal.Login = ({ handleClose }) => {
//   const dropIn = {
//     hidden: {
//       y: "80px",
//       opacity: 0,
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       scale: 1,
//     },
//     exit: {
//       scale: 0.95,
//       opacity: 0,
//     },
//   }

//   return (
//     <Modal.BG onClick={handleClose}>
//       <motion.div
//           onClick={(e) => e.stopPropagation()}
//           variants={dropIn}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           >
//           <Modal width="400px" justifyContent="center">
//             <Flex.Column flexGrow="1">
//               <Text.Heading_MD justifyContent="center" mb={1}>
//                 Sign In
//               </Text.Heading_MD>

//               <Text.P_SM
//                 color={theme.colors.white_500}
//                 justifyContent="center"
//                 mb={3}
//               >
//                 Enter your credentials to access your account
//               </Text.P_SM>

//               <Input Label="Email" Placeholder="Type your email..." />

//               <Input
//                 Label="Password"
//                 Placeholder="Type your password.."
//                 Password
//               />

//               <Button.IconRight
//                 sort="primary"
//                 size="md"
//                 mb={4}
//                 iconName="arrow_right"
//               >
//                 Sign In
//               </Button.IconRight>

//               <Flex.Row justifyContent="center">
//                 <Text.P_SM color={theme.colors.white} justifyContent="center">
//                   Don’t have an account?
//                 </Text.P_SM>
//                 <Text.P_SM
//                   color={theme.colors.primary_500}
//                   justifyContent="center"
//                 >
//                   Register here
//                 </Text.P_SM>
//               </Flex.Row>
//             </Flex.Column>

//             <Button.ModalClose onClick={handleClose}/>

//           </Modal>
//       </motion.div>
//     </Modal.BG>
//   );
// };

Modal.BG = ({ onClick, children }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

// https://www.youtube.com/watch?v=SuqU904ZHA4&ab_channel=Fireship 7:00 (also modal is something wrong)

export default { Modal };
