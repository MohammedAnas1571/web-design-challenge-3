import { motion } from "framer-motion";

export const fadeUp = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    },
  };
};

const ProductsData = [
  {
    id: 1,
    title: "Orange Fanta",
    image:
      " https://raw.githubusercontent.com/dilshad-ahmed/creative-fanta/main/src/assets/fanta1.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Lemon Fanta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    image:
      "https://raw.githubusercontent.com/dilshad-ahmed/creative-fanta/main/src/assets/fanta2.png",
    delay: 0.8,
  },
  {
    id: 3,
    title: "Cola Zero",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima",
    image:
      "https://raw.githubusercontent.com/dilshad-ahmed/creative-fanta/main/src/assets/fanta3.png",
    delay: 1.1,
  },
];

const Products = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container py-10">
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="text-3xl font-bold font-poppins pb-10 text-center"
        >
          Products
        </motion.h1>
        {/* cardsection */}
        <div className="grid grid-col-span-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ProductsData.map((product) => (
            <motion.div
              variants={fadeUp(product.delay)}
              key={product.id}
              initial="hidden"
              whileInView="show"
              className="flex flex-col justify-center p-5 items-center shadow-lg bg-white rounded-xl max-w-[300px] mx-auto"
            >
              <img
                src={product.image}
                alt=""
                className="w-[100px] mb-4 hover:rotate-12 hover:scale-110 duration-300"
              />
              <div className="text-center space-y-5">
                <h1 className="text-2xl font-handwriting font-bold text-center">
                  {product.title}
                </h1>
                <p className="text-sm text-center text-gray-600">
                  {product.desc}
                </p>
                <button className="border-2 !mt-5 px-6 py-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white duration-200">
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
