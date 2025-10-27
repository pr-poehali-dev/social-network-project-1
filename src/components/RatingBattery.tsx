import { cn } from '@/lib/utils';

interface RatingBatteryProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
}

const RatingBattery = ({ rating, size = 'md', showValue = true, className }: RatingBatteryProps) => {
  const percentage = Math.max(0, Math.min(100, (rating / 5000) * 100));
  const isPositive = rating >= 0;
  
  const sizeClasses = {
    sm: 'w-8 h-4',
    md: 'w-12 h-6',
    lg: 'w-16 h-8'
  };
  
  const textSizeClasses = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-sm'
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn("relative border-2 rounded-sm", sizeClasses[size], isPositive ? "border-green-500" : "border-red-500")}>
        <div 
          className={cn(
            "absolute inset-0.5 transition-all duration-300 rounded-sm",
            isPositive 
              ? "bg-gradient-to-r from-green-600 to-green-400" 
              : "bg-gradient-to-r from-red-600 to-red-400"
          )}
          style={{ width: `${percentage}%` }}
        />
        
        <div className={cn(
          "absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1/2 rounded-r",
          isPositive ? "bg-green-500" : "bg-red-500"
        )} />
        
        <div className={cn(
          "absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-sm"
        )} />
      </div>
      
      {showValue && (
        <span className={cn(
          "font-bold tracking-wider",
          textSizeClasses[size],
          isPositive ? "text-green-500" : "text-red-500"
        )}>
          {rating > 0 ? '+' : ''}{rating}
        </span>
      )}
    </div>
  );
};

export default RatingBattery;
