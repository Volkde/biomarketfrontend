import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";

const container = document.getElementById("root");

if (container) {
	const root = createRoot(container);

	root.render(
		<Provider store={store}>
			<App />
		</Provider>
	);
} else {
	throw new Error("Root element with ID 'root' was not found in the document.");
}
