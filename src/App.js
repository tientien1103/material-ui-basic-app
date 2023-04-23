import SearchAppBar from "./components/SearchAppBar.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/HomePage.js";
import { Route, Routes, useLocation } from "react-router-dom";
import JobDetailModal from "./components/JobDetailModal.js";
import AuthProvider from "./auth/AuthProvider.js";
import LoginModal from "./components/LoginForm.js";
import { useContext } from "react";
import AuthContext from "./auth/AuthContext";

// mà lúc đầu chạy dc chưa hay làm cái gi rồi mới bị
// cái basiz app thì nhận login nó bị lỗi, lỗi auto.signin is not a function ở file login form á, mấy cái khác mình thấy chạy dc rồi,
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const location = useLocation();
  const Auth = useContext(AuthContext);
  const state = location.state;
  console.log(Auth.user);
  return (
    // <AuthProvider>
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <SearchAppBar />
        <Routes
          location={
            location.state?.backgroundLocation
              ? location.state.backgroundLocation
              : location
          }
        >
          <Route path="/" element={<HomePage />}>
            {/* <Route path="/job/:id" element={<JobDetailModal />} /> */}
            <Route path="login" element={<LoginModal />} />
          </Route>
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>

        {state && Auth.user ? (
          <Routes>
            <Route path="/job/:id" element={<JobDetailModal />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/job/:id" element={<LoginModal />}></Route>
          </Routes>
        )}
      </ThemeProvider>
    </div>
    // </AuthProvider>
  );
}

export default App;
