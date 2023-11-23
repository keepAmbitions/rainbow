import mongoose from 'mongoose'
import { baseSchema, option } from './help.js'
const RawSubOrderSchema = mongoose.Schema({
  requestBusinessNo: {
    type: String,
    require: true
  },
  step: String,
  itemName: String,
  itemNo: String,
  itemPrice: String,
  discountPrice: String,
  commissionDiscountPrice: String,
  commission: String,
  itemType: String,
  remark: String,
})
const RawOrderSchema = mongoose.Schema({
  ...baseSchema,
  requestBusinessNo: { // 请求流水号
    type: String,
    require: true
  },
  name: String, // 订单描述
  totalAmount: String, // 项目总价
  commission: String, // 平台服务费
  discountAmount: String, // 订单优惠金额
  totalActualAmount: String, // 订单实付金额（最终要付的钱）

  sourceUserId: String, // 买家收货人/雇主用户编号
  sourceConsignee: String, // 买家收货人/雇主
  sourcePhone: String, // 买方联系方式
  sourceType: String, // 买家身份（0：企业，1、个人
  targetSellerId: String, // 卖家/服务使用户编号
  targetSellerName: String, // 卖家收货人/服务商名称
  sellerType: String, // 卖家身份（0：企业，1、个人
  targetPhone: String, // 卖联系方式

  targetShopId: String, // 卖家店铺ID/服务商场所ID
  contractId: String, // 合同编号
  contractUrl: String, // 合同url
  country: String, // 订单来源国家
  remark: String, // 订单备注
  paymentMethod: String, // 支付方式（0：app，1：pc）
  detailOrderCount: String, // 订单明细数量
  subOrder: [RawSubOrderSchema],
  // author: {
  //   type: mongoose.Types.ObjectId,
  //   ref: 'User',
  // },
}, option)

export default mongoose.model('RawOrder', RawOrderSchema)