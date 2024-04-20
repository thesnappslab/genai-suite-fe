import { Box, HStack, VStack } from "native-base";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AppContainer from "./components/AppContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LaunchScreen from "./screens/application/misc/LaunchScreen";
import Protected from "./components/Protected";

function App() {
  return (
    <Router>
      <Box>
        <HStack>
          <VStack>
            <Header />
            <AppContainer>
              <Routes>
                <Route path="/launch" element={<LaunchScreen />} />
                <Route path="/login" element={<LaunchScreen />} />
                <Route path="/signup" element={<LaunchScreen />} />
                <Route element={<Protected user={null} allowedRoles={[]} />}>
                  <Route path="/explore" element={<LaunchScreen />} />
                </Route>
                <Route path="/logout" element={<LaunchScreen />} />
              </Routes>
            </AppContainer>
            <Footer />
          </VStack>
        </HStack>
      </Box>
    </Router>
  );
}

export default App;
