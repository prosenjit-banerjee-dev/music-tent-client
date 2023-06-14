import React from "react";

const EnrolledClasses = () => {
  const enrolledClasses = [];
  return (
    <div>
      <h2 className="text-2xl font-semibold mt-5 mb-5">My Enrolled Classes</h2>
      {enrolledClasses?.length === 0 ? (
        <p>No classes enrolled.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {enrolledClasses?.map((classItem) => (
            <div
              key={classItem._id}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold mb-2">{classItem.className}</h3>
              <div className="flex items-center mt-2">
                <span className="mr-2 text-gray-500">Instructor:</span>
                <span>{classItem.instructorName}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnrolledClasses;
