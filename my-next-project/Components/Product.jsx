import { motion } from "framer-motion";
import Button from "./Button";
import Title from "./Title";
import Subtitle from "./Subtitle";

export default function Product() {
  // Animation settings
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Product 1: Tadpole */}
      <motion.div className="flex flex-col rounded-lg m-4 border" {...fadeInUp}>
        <div className="mt-6 mb-6">
          <Title label={"Tadpole"} />
          <Subtitle label={"The tiny webcam with a clip"} />
        </div>
        <div className="mt-2 mb-8 flex justify-center">
          <Button label={"Now $149"} />
        </div>
        <div className="flex justify-center mb-4">
          <img
            src="https://opalcamera.com/_next/static/media/tadpole.fc95bc41.png"
            alt="camera"
            className="h-48 w-auto object-contain mb-10"
          />
        </div>
      </motion.div>

      {/* Product 2: Opal C1 */}
      <motion.div className="flex rounded-lg flex-col m-4 border" {...fadeInUp}>
        <div className="mt-6 mb-6">
          <Title label={"Opal C1"} />
          <Subtitle label={"The first professional webcam"} />
        </div>
        <div className="mt-2 mb-8 flex justify-center">
          <Button label={"$549"} />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://opalcamera.com/_next/static/media/camera.b43b8dac.png"
            alt="camera"
            className="h-48 w-auto object-contain mb-10"
          />
        </div>
      </motion.div>

      {/* Product 3: Composer */}
      <motion.div className="flex rounded-lg flex-col m-4 border" {...fadeInUp}>
        <div className="mt-6 mb-6">
          <Title label={"Composer"} />
          <Subtitle label={"The magic behind the camera"} />
        </div>
        <div className="mt-2 mb-8 flex justify-center">
          <Button label={"$849"} />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://opalcamera.com/_next/static/media/composer.ccd114c3.png"
            alt="camera"
            className="h-48 w-auto object-contain mb-10"
          />
        </div>
      </motion.div>
    </div>
  );
}
