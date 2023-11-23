// http://localhost:3000/api/raw-order
import connectDB from "@/DB/mongoose"
export async function GET(request) {
  await connectDB();
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('abc')

  return Response.json({query})
}

export async function POST(request) {
  await connectDB();
  const res = await request.json()
  console.log('debug--33', res);
  return Response.json({ res })
}