import { circle, triangle, square, SevenStar } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";
function ShapeRow({ shape, size }: { size: number; shape: string }) {
  return (
    <section className="flex flex-col items-center justify-between">
      <motion.section
        animate={{ scale: [0, 1.5, 0], rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <Image
          alt="shapes"
          src={shape}
          width={size}
          height={size}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </motion.section>
      <motion.section
        animate={{ scale: [0, 1.5, 0], rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <Image
          alt="shapes"
          src={shape}
          width={size}
          height={size}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </motion.section>
      <motion.section
        animate={{ scale: [0, 1.5, 0], rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <Image
          alt="shapes"
          src={shape}
          width={size}
          height={size}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </motion.section>
      <motion.section
        animate={{ scale: [0, 1.5, 0], rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      >
        <Image
          alt="shapes"
          src={shape}
          width={size}
          height={size}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </motion.section>
    </section>
  );
}

export default function BreatheVatsavComponent() {
  return (
    <section className="flex justify-between min-w-12 min-h-12 lg:min-h-14 lg:min-w-16 p4 ">
      <ShapeRow shape={circle} size={4} />
      <ShapeRow shape={triangle} size={5} />
      <ShapeRow shape={square} size={3} />
      <ShapeRow shape={SevenStar} size={5} />
    </section>
  );
}
