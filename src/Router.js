import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App, Shop } from "./routes"


export default function Router(){

	return <BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/shop" element={<Shop/>} />
		</Routes>
	</BrowserRouter>
}
