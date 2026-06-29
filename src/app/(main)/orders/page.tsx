'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { orderService, type Order } from '@/services/order.service';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Package, Search, Calendar, Eye, Loader2, ShoppingBag } from 'lucide-react';

export default function OrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    filterOrders();
  }, [orders, searchQuery, statusFilter]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const data = await orderService.getOrders({ limit: 100 });
      setOrders(data.data);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterOrders = () => {
    let filtered = [...orders];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter((order) =>
        order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter) {
      filtered = filtered.filter((order) => order.status === statusFilter);
    }

    setFilteredOrders(filtered);
  };

  const statusFilters = [
    { value: null, label: 'All Orders', count: orders.length },
    { value: 'PENDING', label: 'Pending', count: orders.filter(o => o.status === 'PENDING').length },
    { value: 'PROCESSING', label: 'Processing', count: orders.filter(o => o.status === 'PROCESSING').length },
    { value: 'SHIPPED', label: 'Shipped', count: orders.filter(o => o.status === 'SHIPPED').length },
    { value: 'DELIVERED', label: 'Delivered', count: orders.filter(o => o.status === 'DELIVERED').length },
    { value: 'CANCELLED', label: 'Cancelled', count: orders.filter(o => o.status === 'CANCELLED').length },
  ];

  const statusColors = {
    PENDING: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    PROCESSING: 'bg-blue-100 text-blue-800 border-blue-200',
    SHIPPED: 'bg-purple-100 text-purple-800 border-purple-200',
    DELIVERED: 'bg-green-100 text-green-800 border-green-200',
    CANCELLED: 'bg-red-100 text-red-800 border-red-200',
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-green-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
            Order History
          </h1>
          <p className="text-gray-600">Track and manage all your orders</p>
        </div>

        {/* Search and Filters */}
        <Card className="border-0 shadow-lg mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by order number..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Status Filters */}
              <div className="flex gap-2 flex-wrap">
                {statusFilters.map((filter) => (
                  <button
                    key={filter.label}
                    onClick={() => setStatusFilter(filter.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${statusFilter === filter.value
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md'
                        : 'bg-white hover:bg-gray-50 text-gray-700 border'
                      }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <Card className="border-0 shadow-lg">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {searchQuery || statusFilter ? 'No orders found' : 'No orders yet'}
              </h3>
              <p className="text-gray-600 text-center max-w-md mb-6">
                {searchQuery || statusFilter
                  ? 'Try adjusting your search or filters'
                  : 'Start shopping to see your orders here'}
              </p>
              {!searchQuery && !statusFilter && (
                <Button
                  onClick={() => router.push('/products')}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                >
                  Browse Products
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      {/* Order Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                            <Package className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-gray-900">
                              Order #{order.orderNumber}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {new Date(order.createdAt).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                })}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Order Items Preview */}
                        <div className="flex items-center gap-2 mb-3">
                          <p className="text-sm text-gray-600">
                            {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                          </p>
                          <span className="text-gray-300">•</span>
                          <p className="text-sm text-gray-600">
                            Payment: {order.paymentMethod}
                          </p>
                        </div>

                        {/* Status Badge */}
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusColors[order.status as keyof typeof statusColors]
                            }`}
                        >
                          {order.status}
                        </span>
                      </div>

                      {/* Price and Action */}
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                          <p className="text-2xl font-bold text-green-600">
                            ₦{order.totalAmount.toLocaleString()}
                          </p>
                        </div>
                        <Button
                          onClick={() => router.push(`/orders/${order.id}`)}
                          className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 group-hover:shadow-lg transition-all"
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex gap-2 overflow-x-auto">
                        {order.items.slice(0, 4).map((item) => (
                          <div
                            key={item.id}
                            className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded overflow-hidden"
                          >
                            {item.product.images && item.product.images[0] ? (
                              <img
                                src={item.product.images[0]}
                                alt={item.product.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <Package className="h-6 w-6 text-green-600" />
                              </div>
                            )}
                          </div>
                        ))}
                        {order.items.length > 4 && (
                          <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-600">
                              +{order.items.length - 4}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
