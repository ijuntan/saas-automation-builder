import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
    try{
        const body = await req.json();
        const { id, email_addresses, first_name, image_url } = body?.data
        const email = email_addresses[0].email_address
        
        await db.user.upsert({
            where: { clerkId: id },
            update: {
                email,
                name: first_name,
                profileImage: image_url
            },
            create: {
                clerkId: id,
                email,
                name: first_name || '',
                profileImage: image_url || ''
            }
        })

        return new NextResponse('User updated succesfully in db', { status: 200 })
    } catch (err) {
        console.error('error: ', err)
        return new NextResponse('Error updating user in db', { status: 500 })
    }
}