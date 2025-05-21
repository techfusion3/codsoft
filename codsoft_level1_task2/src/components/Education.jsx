import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaSchool } from "react-icons/fa";

const Education = [
  {
    degree: "High School",
    institution: "U.S. CENTRAL ACADEMY",
    completionYear: 2019,
  },
  {
    degree: "Intermediate",
    institution: "Govt. Jubilee Inter College, Buxipur, Gorakhpur",
    completionYear: 2021,
  },
  {
    degree: "Bachelor of Technology",
    institution: "University of Lucknow",
    completionYear: 2026,
  },
];

export function MyEducation() {
  return (
    <Card className="w-full bg-gradient-to-br from-neutral-900 to-neutral-800/80 border border-neutral-700 backdrop-blur-sm rounded-2xl p-5 shadow-lg transition-transform hover:scale-105 hover:shadow-cyan-500/30 lg:w-[500px] xl:w-[580px]">
      <CardBody>
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" className="text-cyan-400 font-semibold">
            My Education
          </Typography>

          <Typography
            as="span"
            variant="small"
            className="text-gray-400 uppercase tracking-wide text-xs"
          >
            Completion Year
          </Typography>
        </div>

        <div className="divide-y divide-neutral-700/70">
          {Education.map(({ degree, institution, completionYear }, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-4 hover:bg-neutral-800/50 rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center gap-x-4">
                <FaSchool className="text-cyan-500 text-xl" />
                <div>
                  <Typography variant="h6" className="text-gray-100">
                    {degree}
                  </Typography>
                  <Typography
                    variant="small"
                    className="text-gray-400 text-sm hover:text-cyan-400 cursor-pointer"
                  >
                    {institution}
                  </Typography>
                </div>
              </div>
              <Typography variant="h6" className="text-gray-300">
                {completionYear}
              </Typography>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
