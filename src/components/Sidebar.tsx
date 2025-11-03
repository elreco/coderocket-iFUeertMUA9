import { Home, ShoppingCart, Package, Users, Settings, BarChart3, LogOut } from 'lucide-react';
export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900">ShopAdmin</h2>
        <p className="text-sm text-gray-600">E-commerce Dashboard</p>
      </div>
      <nav className="px-4 space-y-2">
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-900 bg-gray-100 rounded-lg">
          <Home size={20} />
          <span className="font-medium">Dashboard</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
          <ShoppingCart size={20} />
          <span>Orders</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
          <Package size={20} />
          <span>Products</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
          <Users size={20} />
          <span>Customers</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
          <BarChart3 size={20} />
          <span>Analytics</span>
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
          <Settings size={20} />
          <span>Settings</span>
        </a>
      </nav>
      <div className="absolute bottom-0 w-64 p-4">
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
          <LogOut size={20} />
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
}