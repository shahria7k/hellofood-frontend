import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddItem from "./Components/AddItem/AddItem";
import AllOrders from "./Components/AllOrders/AllOrders";
import Authentication from "./Components/Authentication/Authentication";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Items from "./Components/Items/Items";
import MyOrders from "./Components/MyOrders/MyOrders";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import PrivetRoute from "./Components/PrivetRoute/PrivetRoute";
import SingleItem from "./Components/SingleItem/SingleItem";
import UpdateOrder from "./Components/UpdateOrder/UpdateOrder";
import AuthProvider from "./Context/AuthProvider";
function App() {
	return (
		<AuthProvider>
			<Router>
				<Header></Header>

				<div className="main" style={{ marginTop: "60px" }}>
					{/* <Spinner></Spinner> */}
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route exact path="/home">
							<Home></Home>
						</Route>
						<PrivetRoute exact path="/additem">
							<AddItem></AddItem>
						</PrivetRoute>
						<PrivetRoute exact path="/items">
							<Items></Items>
						</PrivetRoute>
						<PrivetRoute exact path="/menu/:id">
							<SingleItem></SingleItem>
						</PrivetRoute>
						<PrivetRoute exact path="/placeorder/:id">
							<PlaceOrder></PlaceOrder>
						</PrivetRoute>
						<PrivetRoute exact path="/allorders">
							<AllOrders></AllOrders>
						</PrivetRoute>
						<PrivetRoute exact path="/myorders">
							<MyOrders></MyOrders>
						</PrivetRoute>
						<PrivetRoute exact path="/order/:id">
							<UpdateOrder></UpdateOrder>
						</PrivetRoute>
						<PrivetRoute exact path="/dashboard">
							<Dashboard></Dashboard>
						</PrivetRoute>
						<Route exact path="/auth">
							<Authentication></Authentication>
						</Route>
					</Switch>
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
