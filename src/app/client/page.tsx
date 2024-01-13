'use client'
export default function Client() {
	console.log('hello from the(client component)');
	return (
		<div>
			<button onClick={() => alert('hello')}>Client</button>
		</div>
	)
}