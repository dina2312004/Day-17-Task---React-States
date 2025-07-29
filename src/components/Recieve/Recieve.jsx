export default function Recieve({ product, delProd }) {
	if (!product) {
		return <p style={{ color: "gray" }}>No product available</p>;
	}

	const { id, pName, price } = product;

	return (
		<div
			style={{
				border: "1px solid #ccc",
				padding: "10px",
				marginTop: "10px",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center"
			}}
		>
			<div>
				<h3>{pName}</h3>
				<p>ID: {id}</p>
				<p>Price: {price} EGP</p>
			</div>

			<button
				style={{
					padding: "5px 10px",
					backgroundColor: "red",
					color: "white",
					border: "none",
					borderRadius: "4px",
					cursor: "pointer"
				}}
				onClick={() => delProd(id)}
			>
				Delete
			</button>
		</div>
	);
}