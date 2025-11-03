import { Badge } from './ui/badge';
interface Order {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  date: string;
}
const orders: Order[] = [
  { id: '#ORD-001', customer: 'John Doe', product: 'Wireless Headphones', amount: '$89.99', status: 'completed', date: '2024-01-15' },
  { id: '#ORD-002', customer: 'Jane Smith', product: 'Smart Watch', amount: '$299.99', status: 'processing', date: '2024-01-15' },
  { id: '#ORD-003', customer: 'Bob Johnson', product: 'Laptop Stand', amount: '$49.99', status: 'pending', date: '2024-01-14' },
  { id: '#ORD-004', customer: 'Alice Brown', product: 'USB-C Cable', amount: '$19.99', status: 'completed', date: '2024-01-14' },
  { id: '#ORD-005', customer: 'Charlie Wilson', product: 'Keyboard', amount: '$129.99', status: 'completed', date: '2024-01-13' },
  { id: '#ORD-006', customer: 'Diana Davis', product: 'Mouse Pad', amount: '$24.99', status: 'cancelled', date: '2024-01-13' },
  { id: '#ORD-007', customer: 'Eva Martinez', product: 'Monitor', amount: '$399.99', status: 'processing', date: '2024-01-12' },
  { id: '#ORD-008', customer: 'Frank Garcia', product: 'Webcam', amount: '$79.99', status: 'completed', date: '2024-01-12' },
];
export function OrdersTable() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
        <p className="text-sm text-gray-600 mt-1">Manage and track your latest customer orders</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.product}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge variant={
                    order.status === 'completed' ? 'default' :
                    order.status === 'processing' ? 'secondary' :
                    order.status === 'pending' ? 'outline' :
                    'destructive'
                  }>
                    {order.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}