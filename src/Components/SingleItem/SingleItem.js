import React, { useEffect } from "react";
import { useParams } from "react-router";

const SingleItem = () => {
	const { id } = useParams();
	const [item, setItem] = React.useState(null);
	useEffect(() => {
		fetch(`https://hello-food-app.herokuapp.com/menu/${id}`)
			.then((res) => res.json())
			.then((data) => setItem(data))
			.catch((err) => console.log(err));
	}, [id]);
	return (
		<div className="container-fluid pt-3">
			<div className="row">
				<div className="col-lg-6 p-lg-5 p-md-4">
					<div>
						<img src={item?.imgURL} alt="" className="img-fluid rounded-3" />
					</div>
				</div>
				<div className="col-lg-6"></div>
			</div>
		</div>
	);
};

export default SingleItem;
