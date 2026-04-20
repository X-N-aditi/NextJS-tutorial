import { comments } from "./data";

// get method for retrieving data
export async function GET() {
    return Response.json(comments);
}

// post method for creating new entry
export async function POST(request: Request) {
    const comment = await request.json();
    const newComment = {
        id: comments.length + 1,
        text: comment.text,
    };
    comments.push(newComment);
    return new Response(JSON.stringify(newComment), {
        headers: { "Content-Type": "application/json"},
        status: 201,
    })
}

//