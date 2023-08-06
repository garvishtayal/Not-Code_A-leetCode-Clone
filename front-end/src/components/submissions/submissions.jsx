import React, { useEffect, useState } from "react";
import Header from '../all-problems-page/headers';

function Submissions() {
  const [submissions, setSubmissions] = useState([]);

  const init = async () => {
    const response = await fetch("http://localhost:3001/submissions", {
      method: "GET",
    });

    const json = await response.json();
    setSubmissions(json);
    console.log(submissions.isAccepted)
  }

  useEffect(() => {
    init()
  }, []);


  return (
    <div>
      <Header />
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>
              Solution
            </th>
            <th>Acceptance</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <pre style={{ whiteSpace: 'pre-line' }}>
                  {submission.problemSolution}
                </pre>
              </td>
              <td>{submission.isAccepted.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )

}
export default Submissions;