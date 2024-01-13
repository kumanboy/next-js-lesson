const User = ({ params }) => {

	return (
		<div>
			<h1>Info about {params.userlist}</h1>
			<h2>{params.userlist}</h2>
		</div>
	)
}
export default User