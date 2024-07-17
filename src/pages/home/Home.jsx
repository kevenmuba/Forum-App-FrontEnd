import React, { useContext } from 'react'
import { AppState } from '../../App'
import { useNavigate, Link } from "react-router-dom";
import { PiUserCircleDuotone } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";

 
function Home() {
  const { user, question } = useContext(AppState);
  // console.log(question);
  console.log(user.username);

  const navigate = useNavigate();

  const handleAskQuestionClick = () => {
    navigate("/questions"); // Navigates to the "/questions" route
  };

  
  return (
      <section className=" bg-body-tertiary">
        <div className="d-flex justify-content-around pt-5  ">
          <a
            href="#"
            onClick={handleAskQuestionClick}
            className="btn btn-primary action_btn px-5"
          >

            Ask Question
          </a>
          {/* <button className="btn btn-primary action_btn px-5">
            Ask Question
          </button> */}

          <p className="fw-semibold">
            <span className="text-warning">Welcome, </span>
            {user.username}
          </p>
        </div>

        <div className="container mt-5">
          <h2>Question</h2>

         
                <hr />
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="d-md-flex align-items-center gap-4">
                    <div className="d-flex flex-column align-items-center gap-3 ">
                      {/* user */}
                      <div>
                        <PiUserCircleDuotone size={100} />
                      </div>
                      <div>{user.username}</div>
                    </div>
                    <div>
                      {/* question */}
                      <p>{user.title}</p>
                    </div>
                  </div>

                  <div>
                    {/* arrow */}
                    <FaAngleRight size={30} />
                  </div>
                </div>
              
            
        </div>
      </section>
    
  )
}

export default Home
