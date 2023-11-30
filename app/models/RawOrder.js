import mongoose from 'mongoose'
import { baseSchema, option } from './help.js'
const RawSubOrderSchema = mongoose.Schema({
  step: Number, // 阶段（只有履约订单才有值，微包必传）
  itemPrice: String, // 商品/款项金额
  commissionDiscountPrice: String, // 服务费优惠后金额
  commission: String, // 服务费
})
const RawOrderSchema = mongoose.Schema({
  ...baseSchema,
  requestBusinessNo: { // 请求流水号
    type: String,
    require: true
  },
  name: String, // 订单描述
  totalAmount: String, // 项目总价
  totalCommission: String, // 平台总服务费
  totalDiscountAmount: String, // 订单总优惠金额
  totalActualAmount: String, // 订单实付金额（最终要付的钱）

  sourceUserId: String, // 买家收货人/雇主用户编号
  sourceConsignee: String, // 买家收货人/雇主
  vvIdBuyer: String, // 买方微微号
  vvIdSeller: String, // 卖联微微号
  sourceType: Number, // 买家身份（0：企业，1、个人
  targetSellerId: String, // 卖家/服务使用户编号
  targetSellerName: String, // 卖家收货人/服务商名称
  sellerType: Number, // 卖家身份（0：企业，1、个人

  detailOrderCount: Number, // 订单明细数量
  subOrder: [RawSubOrderSchema],
}, option)

export default mongoose.model('RawOrder', RawOrderSchema)