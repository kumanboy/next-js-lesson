async function fetchData(){
	let data = await fetch('https://jsonplaceholder.typicode.com/posts')
	data = await data.json()
	return data
}
export default async function Data(){
	let products = await fetchData()
	console.log(products)
	return (
		<div>
			{products?.map((p)=>(
				<p key={p.id}>{p.title}</p>
			))}
		</div>
	)
}