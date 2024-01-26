import SVG from "@/svg/go-basic-course-isometric-infographic.svg";
import Image from "next/image";

interface GoBasicCourseInfographicProperties {
  className?: string;
}

const GoBasicCourseInfographic = (props: GoBasicCourseInfographicProperties) => {
  return (
    <Image alt="" className={props.className} src={SVG} />
  );
};

export default GoBasicCourseInfographic;
