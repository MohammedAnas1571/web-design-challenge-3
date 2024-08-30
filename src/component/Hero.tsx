import { useState } from "react";
import { UpdateFollower } from "react-mouse-follower";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  price: string;
  modal: string;
  bgColor: string;
};

const SlideRight = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const headphoneData = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/dilshad-ahmed/creative-fanta/main/src/assets/fanta1.png",
    title: "Orange Fanta",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$40",
    modal: "Orange",
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    image:
      "https://raw.githubusercontent.com/dilshad-ahmed/creative-fanta/main/src/assets/fanta2.png",
    title: "Cola Zero",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Zero",
    bgColor: "#727272",
  },
  {
    id: 3,
    image:
      "https://raw.githubusercontent.com/dilshad-ahmed/creative-fanta/main/src/assets/fanta3.png",
    title: "Coca Cola",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Cola",
    bgColor: "#ac1a00",
  },
];

export const Hero = () => {
  const [activeData, setActiveData] = useState<Props>(headphoneData[0]);

  const handleData = (data: Props) => {
    setActiveData(data);
  };
  return (
    <motion.div
      initial={{ backgroundColor: activeData.bgColor }}
      animate={{ backgroundColor: activeData.bgColor }}
      transition={{ duration: 0.8 }}
    >
      {/* navbar section */}
      <NavBar />

      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
        {/* Data info */}
        <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-11 md:order-1 text-white relative z-40">
          <div className="space-y-5 text-center md:text-left">
            <AnimatePresence  mode="wait">
            <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
            <motion.h1
              key={activeData.id}
              variants={SlideRight(0.2)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
            >
              {activeData.title}{" "}
            </motion.h1>
            </UpdateFollower>
            </AnimatePresence>
            <AnimatePresence  mode="wait">
                
            <motion.p
              key={activeData.id}
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-sm leading-loose text-white/80"
            >
              {activeData.subtitle}
            </motion.p>
            </AnimatePresence>
            <AnimatePresence  mode="wait">
            <UpdateFollower
                  mouseOptions={{
                  
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
            <motion.button
              key={activeData.id}
              variants={SlideRight(0.2)}
              initial="hidden"
              animate="show"
              exit="exit"
              style={{color:activeData.bgColor}}
              className="bg-white px-4 py-2 inline-block font-normal rounded-sm"
            >
              Order Now
            </motion.button>
            </UpdateFollower>
            </AnimatePresence>

            {/* lineseparator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="flex  items-center justify-center gap-4 md:justify-start !md:mt-24 !mb-10"
            >
              <div className="w-20 h-[1px] bg-white"></div>
              <p>TOP RECOMMENDATION</p>
              <div className="w-20 h-[1px] bg-white"></div>
            </motion.div>
            {/* imageswitcher */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-3 "
            >
              {headphoneData.map((data) => (
                <div onClick={()=>handleData(data)} className="cursor-pointer space-y-3 hover:scale-105 transition-all duration-200 mt-8 md:mt-0">
                  <div className="flex justify-center">
                    <img
                      src={data.image}
                      alt=""
                      className={`w-[80px] image-shadow${
                        activeData.image === data.image
                          ? "opacity-100 scale-105"
                          : "opacity-50"
                      }`}
                    />
                  </div>
                  <div className="text-center !mt-6 space-y-1 ">
                    <p className="text-base line-through opacity-50">
                      {data.price}
                    </p>
                    <p className="text-xl font-bold">{data.price}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* Hero image */}
        <div className="flex flex-col justify-end items-center order-1 md:order-2">
        <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                //   scale: 0.9,
                  x: -100,

                  transition: {
                    duration: 0.4,
                  },
                }}
                src={activeData.image}
                alt=""
                className="w-[150px] md:w-[200px] xl:w-[350px] img-shadow relative z-10"
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  // scale: 0.9,

                  transition: {
                    duration: 0.4,
                  },
                }}
                className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-48 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              >
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
        </div>

        {/* what app icon */}
        <div className="text-3xl text-white fixed bottom-10 right-10 hover:rotate-[360deg] duration-500 z-[99999] mix-blend-difference">
          <Link to="">
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
