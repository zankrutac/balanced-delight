import classes from "./OurTeam.module.css";
import PersonCard from "./PersonCard";
import founderImage from "../../assets/founder.png";
import chefImage from "../../assets/chef.jpg";
import opsManagerImage from "../../assets/operations-manager.jpg";
import marketingCoordImage from "../../assets/marketing-coordinator.jpg";
import assistantChefImage from "../../assets/assistant-chef.png";
import qaManagerImage from "../../assets/qa-manager.jpg";
import cxSpecialistImage from "../../assets/customer-experience-specialist.jpg";
import engagementManagerImage from "../../assets/engagement-manager.jpg";
import deliveryCoordImage from "../../assets/delivery-coordinator.jpg";
import nutritionistImage from "../../assets/nutritionist.png";

const TEAM = [
  {
    image: founderImage,
    name: "ADITI JOSHI",
    designation: "Founder",
  },
  {
    image: chefImage,
    name: "ROHAN PATEL",
    designation: "Head Chef",
  },
  {
    image: nutritionistImage,
    name: "AISHA KHAN",
    designation: "Nutritionist & Menu Planner",
  },
  {
    image: opsManagerImage,
    name: "LIAM WASHINGTON",
    designation: "Operations Manager",
  },
  {
    image: cxSpecialistImage,
    name: "NINA RODRIGUEZ",
    designation: "Customer Experience Specialist",
  },
  {
    image: marketingCoordImage,
    name: "MIA NGUYEN",
    designation: "Marketing Coordinator",
  },
  {
    image: assistantChefImage,
    name: "RAVI KUMAR",
    designation: "Culinary Assistant",
  },
  {
    image: qaManagerImage,
    name: "HARU YAMANAKA",
    designation: "Quality Assurance Manager",
  },
  {
    image: deliveryCoordImage,
    name: "ZARA AHMED",
    designation: "Delivery Coordinator",
  },
  {
    image: engagementManagerImage,
    name: "JASMINE PATEL",
    designation: "Engagement Manager",
  },
];

function OurTeam() {
  return (
    <div className={classes["team-sec"]}>
      <div className={classes["team-intro"]}>
        <h2 className={classes.heading}>Meet Our Team</h2>
        <p className={classes.text}>
          Behind every delicious meal is a dedicated team passionate about
          creating a delightful dining experience. Get to know the faces and
          stories of the chefs, nutritionists, and individuals who contribute to
          making Balanced Delights what it is today.
        </p>
      </div>
      <div className={classes.team}>
        {TEAM.map((teammate, i) => (
          <PersonCard key={i} person={teammate} />
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
