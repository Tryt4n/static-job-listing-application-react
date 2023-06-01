import { useContext, useEffect, useState } from "react";
import DataContext from "../../context/DataContext";

import JobRequirementsButton from "../JobRequirementsButton/JobRequirementsButton";

export default function ListItem({ data }) {
  const { searchingParams } = useContext(DataContext);
  const [matchesSearchParams, setMatchesSearchParams] = useState(true);

  useEffect(() => {
    const hasMatchingParams = searchingParams.every((param) =>
      [data.role, data.level, ...data.languages, ...data.tools].includes(param)
    );

    setMatchesSearchParams(hasMatchingParams);
  }, [data, searchingParams, matchesSearchParams]);

  if (!matchesSearchParams) return null;

  return (
    <li className={`job-item${data.featured ? " job-item--accent" : ""}`}>
      <img
        className="job-item__image"
        src={data.logo}
        alt={`${data.company} logo`}
      />

      <div className="job-item__main-wrapper">
        <div>
          <div className="job-item__company-wrapper">
            <span className="job-item__company-name">{data.company}</span>
            {data.new && <span className="job-item__badge job-item__badge--new">new!</span>}
            {data.featured && (
              <span className="job-item__badge job-item__badge--featured">featured</span>
            )}
          </div>

          <h2 className="job-item__position">
            <a href="#">{data.position}</a>
          </h2>

          <div className="job-item__details">
            <time>{data.postedAt}</time>
            <hr />
            <span>{data.contract}</span>
            <hr />
            <span>{data.location}</span>
          </div>
        </div>

        <div
          className="job-item__btns-wrapper"
          aria-label="Job Requirements"
        >
          <JobRequirementsButton jobText={data.role} />
          <JobRequirementsButton jobText={data.level} />
          {data.languages.map((language, index) => (
            <JobRequirementsButton
              key={index}
              jobText={language}
            />
          ))}
          {data.tools &&
            data.tools.length > 0 &&
            data.tools.map((tool, index) => (
              <JobRequirementsButton
                key={index}
                jobText={tool}
              />
            ))}
        </div>
      </div>
    </li>
  );
}
