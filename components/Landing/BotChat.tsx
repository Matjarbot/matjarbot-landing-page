import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Catalog from "../../public/catalog.png";
import Order from "../../public/order.png";
// import Placeholder from "../../public/placeholder.jpeg";

const dataMessages = [
  {
    id: 1,
    text: "erferfe rouwo eudnwe",
  },
];
//placeholder.jpeg
function BotChat() {
  return (
    <motion.div
      transition={{ duration: 1, type: "spring" }}
      initial={{ y: 800, rotate: -80, opacity: 0 }}
      animate={{ y: 0, rotate: 0, opacity: 1 }}
      className="sb-botshat"
    >
       {/* <div><Image className= "img-chat" src={Placeholder} width={200} height={150}  alt="" /> </div> */}

      <ul style={{ overflow: "hidden" }} className="sb-botshat-list">
        <motion.li
          transition={{ duration: 1, type: "spring", delay: 0.6 }}
          initial={{ x: 800, rotate: -30, opacity: 0 }}
          animate={{ x: 0, rotate: 0, opacity: 1 }}
          className="to"
        >
          <div className="text">مرحبا</div>
        </motion.li>
        <motion.li
          transition={{ duration: 1, type: "spring", delay: 1.9 }}
          initial={{ x: -800, rotate: -30, opacity: 0 }}
          animate={{ x: 0, rotate: 0, opacity: 1 }}
          className="from"
        >
          <div className="text">
            مرحبا سيد محمد طاب مساؤك 💪, اليك قائمة منتجاتنا 👌📌
          </div>
        </motion.li>
        {/* <motion.li
          transition={{ duration: 1, type: "spring", delay: 2.7 }}
          initial={{ x: 800, rotate: -30, opacity: 0 }}
          animate={{ x: 0, rotate: 0, opacity: 1 }}
          className="to"
        >
          <div className="text">أريد أن أشتري من هذا المتجر</div>
        </motion.li> */}

         <motion.li
          transition={{ duration: 1, type: "spring", delay: 3.3 }}
          initial={{ x: -800, rotate: -30, opacity: 0 }}
          animate={{ x: 0, rotate: 0, opacity: 1 }}
          className="from"
        >       <div><Image src={Catalog} width={200} height={150} alt="" />
        </div> 
        </motion.li> 


        <motion.li
          transition={{ duration: 1, type: "spring", delay: 4.9 }}
          initial={{ x: 800, rotate: -30, opacity: 0 }}
          animate={{ x: 0, rotate: 0, opacity: 1 }}
          className="to"
        >
      <div><Image src={Order} width={300} height={150} alt="" />   
              </div> 
     </motion.li>



        <motion.li
          transition={{ duration: 1, type: "spring", delay: 5.9 }}
          initial={{ x: -800, rotate: -30, opacity: 0 }}
          animate={{ x: 0, rotate: 0, opacity: 1 }}
          className="from"
        >
          <div className="text"> كيف نساعدك ؟</div>
        </motion.li>
      </ul>
    </motion.div>
  );
}

export default BotChat;
