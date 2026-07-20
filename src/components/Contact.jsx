import React from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { AiTwotoneMail } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 pb-10"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section */}
          <div className="flex justify-center">
            <div
              className="
                overflow-hidden
                rounded-3xl
                border
                border-orange-500/20
                shadow-xl
                shadow-orange-500/10
              "
            >
              <img
                src="/klausphoto.png"
                alt="James Nicholas"
                className="
                  w-full
                  max-w-md
                  h-125
                  object-cover
                  hover:scale-105
                  transition-all
                  duration-500
                "
              />
            </div>
          </div>

          {/* Contact Section */}
          <div
            className="
              bg-white/5
              backdrop-blur-md
              border
              border-orange-500/20
              rounded-3xl
              p-8
              w-full
            "
          >
            <h2 className="text-4xl font-bold text-orange-500 mb-6">
              Get In Touch
            </h2>

            <p className="text-gray-300 leading-8 mb-8">
              I'm always open to new opportunities, collaborations,
              freelance projects, and innovative ideas. Whether you
              need a website, a web application, or want to discuss a
              project, feel free to reach out.
            </p>

            {/* Contact Information */}
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <IoCallOutline className="text-orange-500 text-2xl" />
                <span>+234 903 633 4282</span>
              </div>

              <div className="flex items-center gap-4">
                <TbWorldWww className="text-orange-500 text-2xl" />
                <span>www.elklausconnet.vercel.app</span>
              </div>

              <div className="flex items-center gap-4">
                <AiTwotoneMail className="text-orange-500 text-2xl" />
                <span>nicholasokafor1@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <IoLocationOutline className="text-orange-500 text-2xl" />
                <span>Abuja, Nigeria</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-10">
              <a
                href="https://wa.me/2349036334282"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3
                  rounded-full
                  border
                  border-orange-500/20
                  hover:border-green-500
                  hover:text-green-500
                  transition-all
                  duration-300
                "
              >
                <RiWhatsappFill size={24} />
              </a>

              <a
                href="https://github.com/el-klaus"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3
                  rounded-full
                  border
                  border-orange-500/20
                  hover:border-orange-500
                  hover:text-orange-500
                  transition-all
                  duration-300
                "
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://www.instagram.com/klaus_el"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3
                  rounded-full
                  border
                  border-orange-500/20
                  hover:border-pink-500
                  hover:text-pink-500
                  transition-all
                  duration-300
                "
              >
                <BsInstagram size={24} />
              </a>

              <a
                href="https://www.tiktok.com/@klaus_el"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3
                  rounded-full
                  border
                  border-orange-500/20
                  hover:border-orange-500
                  hover:text-orange-500
                  transition-all
                  duration-300
                "
              >
                <SiTiktok size={24} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;