'use client';

import { motion } from 'framer-motion';
import { Star, Zap, Plus, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { type Product } from '@/services/product.service';
import { cartService } from '@/services/cart.service';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const [addingToCart, setAddingToCart] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      setAddingToCart(true);
      await cartService.addToCart({ productId: product.id, quantity: 1 });
      toast.success('Added to cart');
    } catch (error) {
      toast.error('Failed to add to cart');
    } finally {
      setAddingToCart(false);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onClick={() => router.push(`/products/${product.id}`)}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-[#1B4D54]/10 transition-all duration-500 group cursor-pointer"
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-[#F8F9FA] p-8 flex items-center justify-center overflow-hidden">
        {product.images && product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        ) : (
          <Zap className="h-16 w-16 text-[#1B4D54]/10" />
        )}

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <div className="bg-[#FF6B00] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase  shadow-lg shadow-orange-500/20">
            -15% OFF
          </div>
        </div>

        <button className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-xl text-gray-400 hover:text-red-500 transition-colors">
          <Heart className="h-5 w-5" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-8 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < Math.floor(product.rating || 0) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`}
              />
            ))}
            <span className="text-[10px] text-gray-400 font-bold ml-1">({product.reviewCount || 0})</span>
          </div>
          <h3 className="text-lg font-bold text-[#1B4D54] line-clamp-2 leading-tight uppercase ">
            {product.name}
          </h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-[#1B4D54]">₦{product.price.toLocaleString()}</span>
            <span className="text-sm font-medium text-gray-300 line-through">₦{(product.price * 1.15).toLocaleString()}</span>
          </div>

          {/* Stock Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-bold uppercase ">
              <span className="text-gray-400">Stock Available</span>
              <span className="text-[#1B4D54]">{product.stock} Units</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '70%' }}
                className="h-full bg-linear-to-r from-[#1B4D54] to-[#00BFA5]"
              />
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            disabled={addingToCart}
            className="w-full bg-[#1B4D54] hover:bg-[#153a3f] text-white rounded-xl py-6 h-auto font-bold uppercase  text-xs gap-3 group/btn shadow-lg shadow-[#1B4D54]/10"
          >
            {addingToCart ? (
              'Adding...'
            ) : (
              <>
                Add to Cart <Plus className="h-4 w-4 group-hover/btn:rotate-90 transition-transform" />
              </>
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
