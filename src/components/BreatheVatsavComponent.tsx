import { circle, triangle, square, SevenStar } from "@/assets";
import Image from "next/image";

function ShapeRow({ shape, size }: { size: number; shape: string }) {
  return (
    <section className="flex flex-col items-center justify-between">
      <Image  alt="shapes" src={shape} width={size} height={size} style={{maxWidth:'100%', height:'auto'}}  />
      <Image  alt="shapes" src={shape} width={size} height={size} style={{maxWidth:'100%', height:'auto'}}  />
      <Image  alt="shapes" src={shape} width={size} height={size} style={{maxWidth:'100%', height:'auto'}}  />
      <Image  alt="shapes" src={shape} width={size} height={size} style={{maxWidth:'100%', height:'auto'}}  />
    </section>
  );
}

export default function BreatheVatsavComponent() {
  return (
    <section className="flex justify-between min-w-12 min-h-12 lg:min-h-14 lg:min-w-16 p4 ">
      <ShapeRow shape={circle} size={4} />
      <ShapeRow shape={triangle} size={8} />
      <ShapeRow shape={square} size={3} />
      <ShapeRow shape={SevenStar} size={5} />
    </section>
  );
}
