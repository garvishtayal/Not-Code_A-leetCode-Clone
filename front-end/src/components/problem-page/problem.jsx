import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from '../all-problems-page/headers';
import './problem.css';

function Problem() {
  const navigate = useNavigate();
  const [problem, setProblem] = useState({});
  const [code, setCode] = useState('');
  const { id } = useParams();

  const init = async () => {
    const response = await fetch(`http://localhost:3001/problems/${id}`, {
      method: "GET",
    });

    const json = await response.json();
    setProblem(json.problem);
  }

  useEffect(() => {
    init()
  }, []);

  return (

    <div className="main-problem-page-container">
      <Header />
      <div className="main-problem-container">
        <div className="problem-page-left">
          <div className="problem-page-title">{problem.title}</div>
          <div className="problem-page-description" style={{ whiteSpace: 'pre-line' }}>
            {problem.description}
          </div>
          <div className="example-container">
            {problem.testCases && problem.testCases.map((x, index) => (
              <div key={index} className="example">
                <p>{`Example ${index + 1}`}</p>
                <pre style={{ whiteSpace: 'pre-line' }}>{`Input: ${x.input}`}</pre>
                <pre style={{ whiteSpace: 'pre-line' }}>{`Output: ${x.output}`}</pre>
              </div>
            )

            )}
          </div>
        </div>
        <div className="problem-page-right">
          <textarea className="code-box" rows="4" cols="50" 
            onChange={e => setCode(e.target.value)}
          ></textarea>
          <div className="code-box-options">
            <button className="problem-page-button">Run</button>
            <button className="problem-page-button"
              onClick={async () => {
                try {
                  const response = await fetch("http://localhost:3001/submissions", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      problemSolution: code
                    })
                  });

                  const json = await response.json();

                  console.log(json)
                  if (response.ok) {
                    alert(json.message);
                    navigate("/problems");
                  } else {
                    alert(json.message);
                  }
                } catch (error) {
                  alert('An error occurred while signing up');
                }

              }}

            >Submit</button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Problem