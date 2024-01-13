import {NextResponse} from "next/server";
import {users} from "@/app/utils/db";


export function GET() {
	const data = users;
	return NextResponse.json({ data }, { status: 200 });
}