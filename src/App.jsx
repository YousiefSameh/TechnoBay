import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
// import Laptops from "./components/pages/categories/Laptops";
// import Mobiles from "./components/pages/categories/Mobiles";
// import Television from "./components/pages/categories/Television";
// import SmartWatch from "./components/pages/categories/SmartWatch";
// import Tablet from "./components/pages/categories/Tablet";
// import Earphone from "./components/pages/categories/Earphone";
// import Camera from "./components/pages/categories/Camera";
// import Accessory from "./components/pages/categories/Accessory";
import ProductDetails from "./components/pages/ProductDetails";
import Wishlist from "./components/pages/Wishlist";
import Cart from "./components/pages/Cart";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ForgetPassword from "./components/pages/ForgetPassword";
import VerifyCode from "./components/pages/VerifyCode";
import NewPassword from "./components/pages/NewPassword";
import { ProductProvider } from "./components/providers/Products.provider";
import CategoryDetails from "./components/pages/CategoryDetails";

const App = () => {
	return (
		<ProductProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:category" element={<CategoryDetails />} />
					{/* <Route path="/mobile" element={<Mobiles />} />
					<Route path="/television" element={<Television />} />
					<Route path="/smart-watch" element={<SmartWatch />} />
					<Route path="/tablet" element={<Tablet />} />
					<Route path="/earphone" element={<Earphone />} />
					<Route path="/camera" element={<Camera />} />
					<Route path="/accessory" element={<Accessory />} /> */}
					<Route path="/product/:id" element={<ProductDetails />} />
					<Route path="/wishlist" element={<Wishlist />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/forget-password" element={<ForgetPassword />} />
					<Route path="/verify-code" element={<VerifyCode />} />
					<Route path="/reset-password" element={<NewPassword />} />
				</Routes>
			</Router>
		</ProductProvider>
	);
};

export default App;
