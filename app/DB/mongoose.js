// mongodb+srv://my163vipemail:DGzGRdu354aKw42T@cluster-order.321odz3.mongodb.net/?retryWrites=true&w=majority
import mongoose from 'mongoose';

async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://my163vipemail:DGzGRdu354aKw42T@cluster-order.321odz3.mongodb.net/?retryWrites=true&w=majority');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export default connectDB;