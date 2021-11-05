import { getDownloadURL } from "firebase/storage";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../Hooks/useFirebase";
import "./AddItem.css";
const AddItem = () => {
	const [uploadProgress, setUploadProgress] = useState(0);
	const { uploadImage } = useFirebase();
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		let headersList = {
			"Content-Type": "application/json",
		};

		fetch("http://localhost:8080/menu", {
			method: "POST",
			body: JSON.stringify(data),
			headers: headersList,
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
			});
	};
	const [img, setImg] = useState();
	const handleChange = (e) => {
		setImg(e.target.files[0]);
		setUploadProgress(0);
	};
	console.log(img);
	const upLoadImg = (e) => {
		e.preventDefault();
		const uploadTask = uploadImage(img);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setUploadProgress(progress);
				console.log("Upload is " + progress + "% done");
				// eslint-disable-next-line default-case
				switch (snapshot.state) {
					case "paused":
						console.log("Upload is paused");
						break;
					case "running":
						console.log("Upload is running");
						break;
				}
			},
			(error) => {
				console.log(error);
			},
			() => {
				// Upload completed successfully, now we can get the download URL
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setValue("imgURL", downloadURL);
					console.log("File available at", downloadURL);
				});
			}
		);
	};
	return (
		<div className="addItem">
			<h2 className="text-center pt-5">Please Add Your Custom Package </h2>
			<div className="addItem-form">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="group">
						<div className="input-group">
							<label htmlFor="title">Title</label>
							<br />
							<input
								type="text"
								id="title"
								placeholder="Title of the item"
								{...register("title", { required: true })}
							/>
							{errors.exampleRequired && <span>This field is required</span>}
						</div>
						<div className="input-group">
							<label htmlFor="title">Price</label>
							<br />
							<input
								type="number"
								id="price"
								placeholder="Price of the product"
								{...register("price", { required: true })}
							/>
							{errors.exampleRequired && <span>This field is required</span>}
						</div>
						<div className="input-group">
							<label htmlFor="discription">Discription</label>
							<br />
							<textarea
								type="text"
								id="description"
								placeholder="Description of the product"
								{...register("description", { required: true })}
							/>
							{errors.exampleRequired && <span>This field is required</span>}
						</div>
						<div className="input-group">
							<label htmlFor="stock">Stock</label>
							<br />
							<input
								type="number"
								id="stock"
								placeholder="Stock of the product"
								{...register("stock", { required: true })}
							/>
							{errors.exampleRequired && <span>This field is required</span>}
						</div>
					</div>
					<div className="group">
						<div className="image text-center" style={{ maxHeight: "200px" }}>
							{uploadProgress !== 100 ? (
								<ion-icon
									name="image-outline"
									style={{
										fontSize: "15em",
										fontWeight: "300",
										textAlign: "center",
									}}
								></ion-icon>
							) : (
								<img
									src={watch().imgURL}
									alt="preview"
									style={{ maxHeight: "200px" }}
								/>
							)}
						</div>
						<div className="input-group">
							<label htmlFor="imgURL">Image URL</label>
							<br />

							<input
								type="file"
								onChange={handleChange}
								style={{ marginTop: "10px" }}
							/>
							<button
								className="btn"
								style={{ marginTop: "10px" }}
								onClick={upLoadImg}
							>
								Upload Image
							</button>
							<input
								type="text"
								id="imgURL"
								placeholder="Image URL of the product"
								{...register("imgURL", { required: true })}
								title="click to copy the url"
								style={{ marginTop: "32px" }}
							/>
							{errors.exampleRequired && <span>This field is required</span>}
						</div>

						<div className="input-group">
							<input
								className="btn btn-sumbit"
								type="submit"
								value="Submit Product"
								id="submit"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddItem;
