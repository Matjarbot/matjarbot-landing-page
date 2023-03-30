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


/*
صور منتجات الكيك 
https://i.ibb.co/4NFzYM3/3fab24ef28aa2ae31e87bc8f22cab2ca-w750-h500.jpg
https://i.ibb.co/Jy94nmb/7b7b9ffb4aeee76a1ce66a7ce2cdfd5a-w750-h750.jpg
https://i.ibb.co/NZBK09p/66ac9e5ee3e57405c88de30141a24a0d-w750-h500.jpg
https://i.ibb.co/rwSNy0F/4481c2aab55da65fabc1cdb9bf7eb87a-w750-h500.jpg
https://i.ibb.co/Y49jG2Y/1388739219-5-1-2.jpg
https://i.ibb.co/QNhPFW4/aa0afb02d42de91538a4b8e943510dc3-w750-h500.jpg
https://i.ibb.co/CM0vNPk/b04018cb12fa68711f2cc04c75720171-w750-h750.jpg
https://i.ibb.co/9Y0jgFd/e8ca5677ad850a77cbc5ff82026812ce-w750-h500.jpg
https://i.ibb.co/FqhFfgn/f9e28c0269a0be8bb43b88d54c158b14-w750-h500.jpg
https://i.ibb.co/JFMgzJr/nutella-cheese-cake.jpg
https://i.ibb.co/7G6Cx2p/image.jpg
https://i.ibb.co/HFKf3m7/image.jpg

*/