import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Img from '../assets/img1.jpg';

const Services = () => {
  const services = [
    {
      title: 'SOFTWARE & WEB DEVELOPMENT',
      description: 'Scalable and user-centric superior web solutions.',
      image: Img,
      link: '/services/serviceDetails',
    },
    {
      title: 'SOFTWARE & WEB DEVELOPMENT',
      description: 'Scalable and user-centric superior web solutions.',
      image: Img,
      link: '/services/serviceDetails',
    },
    {
      title: 'SOFTWARE & WEB DEVELOPMENT',
      description: 'Scalable and user-centric superior web solutions.',
      image: Img,
      link: '/services/serviceDetails',
    },
    // Add more services as needed
  ];

  return (
    <div className="w-4/5 mx-auto  h-full py-8">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid gap-8">
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
                  <h3 className="text-6xl text-gray-300 font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <Link
                    to={service.link}
                    className=" border-2 border-white  cursor-pointer text-white font-bold py-2 px-4 rounded inline-block transition-colors duration-300"
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
  );
};

export default Services;
