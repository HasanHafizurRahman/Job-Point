import React, { useEffect } from "react";
import JobCard from "../../component/JobCard";
import Loading from "../../component/Loading";
import { useGetJobsQuery } from "../../features/job/jobApi";

const Jobs = () => {
  const { isError, isFetching, isSuccess, error, data } = useGetJobsQuery();

  useEffect(() => {
    if (isSuccess) {
    }
    if (isError) {
    }
  }, [isFetching, isSuccess, isError, error, data]);

  if (isFetching) {
    <Loading />;
  }
  return (
    <div className="pt-14">
      <div className="bg-primary/10 p-5 rounded-2xl">
        <h1 className="font-semibold text-xl">Find Jobs</h1>
      </div>
      <div className="grid grid-cols-1 mx-auto mt-5 lg:w-3/4">
        {data?.data?.map((jobData) => (
          <JobCard key={jobData._id} jobData={jobData} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
