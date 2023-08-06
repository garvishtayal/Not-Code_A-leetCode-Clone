import React, { useEffect, useState } from "react";
import './all-problems.css';
import { Link } from 'react-router-dom';
import Header from '../all-problems-page/headers'
import { useNavigate } from "react-router-dom";

function AllProblems() {
  const navigate = useNavigate();
  const [problems, setProblems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const init = async () => {
    const response = await fetch("http://localhost:3001/problems", {
      method: "GET",
    });

    const json = await response.json();
    setProblems(json)
  }


  useEffect(() => {
    init()
  }, []);
  // Calculate the start and end index for the current page
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (

    <>
      <Header />
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Acceptance</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {problems.slice(startIndex, endIndex).map((problem) => (
            <tr
              key={problem.id}
              onClick={() => navigate(`/problems/${problem.id}`)}
              className="table-content">
              <td>
                {problem.title}
              </td>
              <td>
                {problem.acceptance}
              </td>

              <td
                className="table-content"
                //color logic
                style={{
                  color:
                    problem.acceptance === "Hard"
                      ? "red"
                      : problem.acceptance === "Medium"
                        ? "blue"
                        : "green"
                }} >
                {problem.difficulty}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="problem-buttons">
        <button className="problem-button"
          onClick={() => setCurrentPage(1)}
        >1</button>
        <button className="problem-button"
          onClick={() => setCurrentPage(2)}
        >2</button>
      </div>
    </>
  );
}


export default AllProblems;