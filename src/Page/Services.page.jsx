import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Img from '../assets/img1.jpg';

const Services = () => {
  const services = [
    {
      title: 'Web Application Development',
      description: 'We have decade-long experience building best-in-class B2B and B2C web apps that power modern businesses and workflows.',
      image: Img,
      link: '/services/serviceDetails',
    },
    {
      title: 'DevOps',
      description: 'Get in touch with our ace DevOps engineers to plan, build, and test your products and ship them faster to any cloud or on-premise - within optimized costs.',
      image: Img,
      link: '/services/serviceDetails',
    },
    {
      title: 'Blockchain',
      description: 'Hire expert Blockchain developers from us to tap into expertise that can get you started with your blockchain journey and even allow you to establish a firm footing in the market.',
      image: Img,
      link: '/services/serviceDetails',
    },
    {
      title: 'Web Application Development',
      description: 'We have decade-long experience building best-in-class B2B and B2C web apps that power modern businesses and workflows.',
      image: Img,
      link: '/services/serviceDetails',
    },
    {
      title: 'DevOps',
      description: 'Get in touch with our ace DevOps engineers to plan, build, and test your products and ship them faster to any cloud or on-premise - within optimized costs.',
      image: Img,
      link: '/services/serviceDetails',
    },
    {
      title: 'Blockchain',
      description: 'Hire expert Blockchain developers from us to tap into expertise that can get you started with your blockchain journey and even allow you to establish a firm footing in the market.',
      image: Img,
      link: '/services/serviceDetails',
    },
    {
      title: 'Web Application Development',
      description: 'We have decade-long experience building best-in-class B2B and B2C web apps that power modern businesses and workflows.',
      image: Img,
      link: '/services/serviceDetails',
    },
    {
      title: 'DevOps',
      description: 'Get in touch with our ace DevOps engineers to plan, build, and test your products and ship them faster to any cloud or on-premise - within optimized costs.',
      image: Img,
      link: '/services/serviceDetails',
    },
    {
      title: 'Blockchain',
      description: 'Hire expert Blockchain developers from us to tap into expertise that can get you started with your blockchain journey and even allow you to establish a firm footing in the market.',
      image: Img,
      link: '/services/serviceDetails',
    },
    // Add more services as needed
  ];

  return (
    <>
      <div className='w-full h-96 mt-10 bg-[#0083FF] bg-opacity-10 p-20'>
      <h1 className='text-6xl font-black mx-auto text-center p-5 mb-5'>Software Development Services</h1>
      <div className='flex flex-col justify-center items-center mb-5 gap-2'>
      <span className='text-lg text-center font-normal px-5'>As a top software development company, Capital Numbers leverages advanced tech stacks to design, develop, deploy, and </span>
      <span className='text-lg text-center font-normal px-5'>launch custom apps and UI/UX designs that are profitable and serve global clients. Talk to us to learn more! </span>
      </div>
      <div className='flex w-full justify-center items-center mt-10'>
      <button className='px-5 py-2 text-lg text-white bg-[#0083FF] rounded-full mx-auto'>Get in Touch Now</button>
      </div>
      </div>
      <div className="w-4/5 mx-auto  h-full py-8">
      <div className='w-full mt-20 tracking-wide mb-24'>
        <h1 className='text-5xl w-[65rem] font-semibold mx-auto text-center p-5 mb-5' >Our Software Application Development Services</h1>
        <div className='flex flex-col justify-center items-center mt-10 mb-5 gap-2'>
        <span className='text-2xl text-center font-normal px-5'>Bespoke mobile apps or web apps. eCommerce or chatbots. Product development or software design services. Dedicated hiring or a fixed quote. One-time or ongoing. We offer everything to cater to the unique needs of our clients. </span>
        </div>
      </div>
      {/* <h2 className="text-3xl font-bold mb-6">Our Services</h2> */}
      <div className="grid grid-cols-3 gap-8">
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
      style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="h-96 w-full bg-opacity-50 relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-6 text-center">
            <h3 className="text-4xl h-24 flex justify-center items-center text-gray-300 font-bold mb-2">{service.title}</h3>
            <p className="text-white mt-2 h-28 flex text-justify justify-center my-4">{service.description}</p>
            <Link
              to={service.link}
              className="border-2 border-white cursor-pointer text-white font-bold py-2 px-4 rounded inline-block transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</div>

    </div>
    </>
  );
};

export default Services;
