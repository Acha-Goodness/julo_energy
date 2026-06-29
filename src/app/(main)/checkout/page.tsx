'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { cartService, type CartItem } from '@/services/cart.service';
import { orderService, type ShippingAddress } from '@/services/order.service';
import { paymentService } from '@/services/payment.service';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CreditCard, Truck, MapPin, Phone, User, Lock, ArrowLeft, Loader2, CheckCircle2 } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  const [shippingInfo, setShippingInfo] = useState<ShippingAddress>({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: 'Nigeria',
    postalCode: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<'CARD' | 'BANK_TRANSFER' | 'WALLET'>('CARD');

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const data = await cartService.getCart();
      setCartItems(data.items || []);

      if (!data.items || data.items.length === 0) {
        router.push('/cart');
      }
    } catch (error) {
      console.error('Failed to fetch cart:', error);
      setError('Failed to load cart items');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof ShippingAddress, value: string) => {
    setShippingInfo((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = (): boolean => {
    if (!shippingInfo.fullName.trim()) {
      setError('Please enter your full name');
      return false;
    }
    if (!shippingInfo.phone.trim()) {
      setError('Please enter your phone number');
      return false;
    }
    if (!shippingInfo.address.trim()) {
      setError('Please enter your address');
      return false;
    }
    if (!shippingInfo.city.trim()) {
      setError('Please enter your city');
      return false;
    }
    if (!shippingInfo.state.trim()) {
      setError('Please enter your state');
      return false;
    }
    return true;
  };

  const handlePlaceOrder = async () => {
    setError('');

    if (!validateForm()) return;

    try {
      setProcessing(true);

      // Create order
      const order = await orderService.createOrder({
        shippingAddress: shippingInfo,
        paymentMethod,
      });

      // Initialize payment
      const paymentInit = await paymentService.initializePayment({
        orderId: order.id,
        paymentMethod: 'PAYSTACK', // Default to Paystack for now
      });

      // Redirect to payment page
      window.location.href = paymentInit.authorizationUrl;
    } catch (err: any) {
      console.error('Failed to place order:', err);
      setError(err.response?.data?.message || 'Failed to place order. Please try again.');
      setProcessing(false);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal > 100000 ? 0 : 5000;
  const tax = subtotal * 0.075;
  const total = subtotal + shipping + tax;

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
          <Button
            variant="ghost"
            onClick={() => router.push('/cart')}
            className="mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Cart
          </Button>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Checkout
          </h1>
          <p className="text-gray-600 mt-2">Complete your order</p>
        </div>

        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Truck className="h-6 w-6 text-green-600" />
                  Shipping Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <div className="relative mt-1">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="fullName"
                        value={shippingInfo.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="John Doe"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="relative mt-1">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        value={shippingInfo.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+234 800 000 0000"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <div className="relative mt-1">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="address"
                      value={shippingInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="123 Main Street"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={shippingInfo.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      placeholder="Lagos"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={shippingInfo.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      placeholder="Lagos"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      value={shippingInfo.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      placeholder="100001"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <CreditCard className="h-6 w-6 text-green-600" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { id: 'CARD', label: 'Card Payment', description: 'Pay securely with Paystack or Flutterwave' },
                    { id: 'BANK_TRANSFER', label: 'Bank Transfer', description: 'Transfer directly to our account' },
                    { id: 'WALLET', label: 'Wallet', description: 'Pay from your wallet balance' },
                  ].map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id as any)}
                      className={`w-full p-4 rounded-lg border-2 transition-all text-left ${paymentMethod === method.id
                        ? 'border-green-600 bg-green-50'
                        : 'border-gray-200 hover:border-gray-300'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">{method.label}</p>
                          <p className="text-sm text-gray-600 mt-1">{method.description}</p>
                        </div>
                        {paymentMethod === method.id && (
                          <CheckCircle2 className="h-6 w-6 text-green-600" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-2xl sticky top-8">
              <CardHeader>
                <CardTitle className="text-2xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {cartItems.map((item) => (
                    <div key={item.productId} className="flex gap-3 pb-3 border-b">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded flex-shrink-0">
                        {item.product.images?.[0] && (
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-full h-full object-cover rounded"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{item.product.name}</p>
                        <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                        <p className="text-sm font-semibold text-green-600">
                          ₦{(item.product.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">₦{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `₦${shipping.toLocaleString()}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (7.5%)</span>
                    <span className="font-semibold">₦{tax.toLocaleString()}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between mb-6">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-2xl font-bold text-green-600">
                      ₦{total.toLocaleString()}
                    </span>
                  </div>

                  <Button
                    onClick={handlePlaceOrder}
                    disabled={processing}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    {processing ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Lock className="mr-2 h-5 w-5" />
                        Place Order
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    🔒 Your payment information is secure
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
