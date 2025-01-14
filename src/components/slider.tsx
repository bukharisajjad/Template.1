import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className="px-3">
        <h1 className="font-bold mb-3">Price</h1>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className={cn("w-[100%]", className)}
          {...props}
        />
        <div className="flex justify-around items-center mt-1">
            <h1 className="font-bold">$50</h1>
            <h1 className="font-bold">$100</h1>
        </div>
    </div>
  )
}
