import {NextResponse} from "next/server";
import {users} from "@/app/utils/db";


export async function  GET(_: any, res: { params: PromiseLike<{ id: any; }> | { id: any; }; }) {
	const {id} = await res.params;
	const user = users.filter((u) => u.id == id);
	return NextResponse.json({ user }, { status: 200 });
}