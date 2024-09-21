import { useRoutes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

import { MatxTheme } from "./components";
// ALL CONTEXTS
// import { AuthProvider } from "./contexts/Auth0Context";
import { AuthProvider } from "./contexts/JWTAuthContext";
import SettingsProvider from "./contexts/SettingsContext";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import 'moment/locale/en-gb';
// ROUTES
import routes from "./routes";
// FAKE SERVER
import "../fake-db";
import { ThemeProvider } from "@mui/material";
import getMuiTheme from "./theme/theme";

export default function App() {
  const content = useRoutes(routes);
  moment.locale('en-gb')
  return (
    <ThemeProvider theme={getMuiTheme()}>
      <SettingsProvider>
        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale='en-gb'>
          <AuthProvider>
            <MatxTheme>
              <CssBaseline />
              {content}
            </MatxTheme>
          </AuthProvider>
        </LocalizationProvider>
      </SettingsProvider>
    </ThemeProvider>
  );
}
