import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className=" bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold font-[24px]">{name}</h3>
          <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
        
        {tags.map((tag)=>(
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
          #{tag.name}
          </p>

        ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Portfolio</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I have worked on a variety of projects that demonstrate my skills and
          experience in different areas. One notable project was the redesign of
          XYZ company's website, where I served as the lead designer. I
          conducted user research, created wireframes and mockups, and
          collaborated with the development team to implement a modern,
          user-friendly design. The result was a 30% increase in conversions
          within three months. Additionally, I led the development of a mobile
          app using technologies like React Native and Firebase, which received
          a 4.5-star rating and over 100,000 downloads. I have also successfully
          managed social media campaigns for fashion brands, resulting in a
          significant increase in followers, website traffic, and sales. As a
          data analyst, I conducted in-depth analyses of customer data using
          Python, SQL, and Tableau, presenting actionable insights that led to
          strategic changes in marketing campaigns and a 25% increase in sales.
          These projects, along with others, demonstrate my diverse skill set
          and real-world experience in delivering successful outcomes for
          various clients and industries.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
