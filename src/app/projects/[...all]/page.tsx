const Project = ({params}) => {
	return(
		<>
			<h1>Project {params.all}</h1>
			<br/>
			All Routes
			{params.all.map((p)=>(
				<li key={p}>{p}</li>
			))}
		</>
	)
}

export default Project