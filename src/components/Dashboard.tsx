import { Sidebar } from './Sidebar';
import { OrdersTable } from './OrdersTable';
export function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your store today.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-600 mb-2">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900">$45,231</p>
            <p className="text-sm text-green-600 mt-2">+20% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-600 mb-2">Orders</p>
            <p className="text-2xl font-bold text-gray-900">+2,350</p>
            <p className="text-sm text-green-600 mt-2">+15% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-600 mb-2">Customers</p>
            <p className="text-2xl font-bold text-gray-900">1,234</p>
            <p className="text-sm text-green-600 mt-2">+8% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-600 mb-2">Active Products</p>
            <p className="text-2xl font-bold text-gray-900">573</p>
            <p className="text-sm text-gray-600 mt-2">No change</p>
          </div>
        </div>
        <OrdersTable />
      </main>
    </div>
  );
}