// http://localhost:3000/api/raw-order
import connectDB from "@/DB/mongoose"
import RawOrder from "@/models/RawOrder";

export async function GET(request) {
  try {
    await connectDB();
    const searchParams = request.nextUrl.searchParams
    const requestBusinessNo = searchParams.get('requestBusinessNo')
    const order = await RawOrder.findOne({requestBusinessNo})
    // console.log('debug--22', order);
    return Response.json({ code: '200', data: order, msg: '查询成功' })
  } catch (err) {
    return Response.json({ code: '202', data: {}, msg: '数据库响应超时' })
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const res = await request.json()
    const order = new RawOrder(res)
    await order.save()
    return Response.json({code: '200', data: {}, msg: '入库成功'})
  } catch (err) {
    return Response.json({code: '202', data: {}, msg: '数据库响应超时'})
  }
}