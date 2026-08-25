import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { PortfolioContext } from "../context/Portfolio";
import { CanvasTextDemo } from "@/context/CanvasTextDemo";

function Navigation() {
  return (
    <div className="main">
      <div className="left">
        <NavLink to="/" className="link" reloadDocument>
          {({ isActive }) =>
            isActive ? (
              <CanvasTextDemo
                text="मुखपृष्ठ"
              />
            ) : (
              <span>मुखपृष्ठ</span>
            )
          }
        </NavLink>
        <NavLink to="/Projects" className="link" reloadDocument>
          {({ isActive }) =>
            isActive ? (
              <CanvasTextDemo text="परियोजनाएँ" />
            ) : (
              <span>परियोजनाएँ</span>
            )
          }
        </NavLink>
        <NavLink to="/About" className="link" reloadDocument>
          {({ isActive }) =>
            isActive ? <CanvasTextDemo text="परिचय" /> : <span>परिचय</span>
          }
        </NavLink>
      </div>

      <div className="right">
        <NavLink
          className="nlink"
          to="https://github.com/080Aasim"
          target="_blank"
        >
          गिटहब
        </NavLink>
        <NavLink
          className="nlink"
          to="https://www.linkedin.com/in/aasim-akhtar-290b861a0/"
          target="_blank"
        >
          लिंक्डइन
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
