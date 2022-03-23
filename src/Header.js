import React from "react";
export default function Header() {
  return (
    <header>
      <nav>
        <div className="gr nav">
          <h1>Task Manager</h1>
          <div className="profile">
            <figure>
              <img src="/img/mst.jpg" alt="Mehmet Selim Turan" />
              <figcaption>Mehmet Selim Turan</figcaption>
            </figure>
          </div>
        </div>
      </nav>
      <div className="navbar">
        <div className="gr header">
          <a href="/">
            <figure>
              <img src="/img/logo.svg" alt="Getir" />
              <figcaption>Getir</figcaption>
            </figure>
          </a>
          <h1>Task Manager</h1>
        </div>
      </div>
    </header>
  );
}
