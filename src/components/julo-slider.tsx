'use client';

// import { Slider } from "@/components/ui/slider";
import { Info } from 'lucide-react';

interface JuloSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit?: string;
  onChange: (value: number[]) => void;
  info?: string;
  formatValue?: (val: number) => string;
}

export function JuloSlider({ label, value, min, max, step, unit = '', onChange, info, formatValue }: JuloSliderProps) {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <label className="text-[10px] font-bold text-gray-400 uppercase  flex items-center gap-2">
          {label} {info && <Info className="h-3 w-3 cursor-help text-gray-300" />}
        </label>
        <span className="text-xl font-bold text-[#1B4D54]">
          {formatValue ? formatValue(value) : `${value}${unit}`}
        </span>
      </div>
    </div>
  );
}
