import AppRoutes from "components/AppRoutes/AppRoutes";
import Layout from "components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Layout>
				<AppRoutes />
			</Layout>
		</BrowserRouter>
	);
}

export default App;
