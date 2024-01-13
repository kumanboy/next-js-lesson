export default function Page(){
	console.log(process.env.MONGO_URI)
	console.log(process.env.DB_password)
	console.log(process.env.JWT_token)
	return (
		<div>Random</div>
	)
}