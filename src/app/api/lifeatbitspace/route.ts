import { PARSE } from "@/libs/utils";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 1;
export async function GET(_: NextRequest) {
	const res = await fetch("https://github.com/bitspaceorg/data-vault/blob/main/lifeatbitspace/gallery/info.json", {
		headers: {
			Accept: "application/json",
		},
	});
	const json = await res.json();
	return NextResponse.json(PARSE(json.payload.blob.rawLines)); 
}
