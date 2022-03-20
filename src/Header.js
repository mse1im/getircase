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
              <ul>
                <li>
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-thumb-up"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
                    </svg>
                    <span>Completed Tasks</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-thumb-down"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
                    </svg>
                    <span>Incompleted Tasks</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-logout"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                      <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
                    </svg>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
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
