import "./App.css";
import isa from "./assets/Файл IMG 6311.jpg";
import GIF1 from "./assets/Создание GIF анимации.gif";
import GIF2 from "./assets/Создание GIF анимации (1).gif";
import GIF3 from "./assets/Gif from Online Converting.gif";
import GIF4 from "./assets/Гифка.gif";
import GIF5 from "./assets/GIF Animation.gif";
import GIF6 from "./assets/Gif from Online Converting (1).gif";
import GIF7 from "./assets/Gif from Online Converting (2).gif";
import GIF8 from "./assets/Гифка из онлайн конвертера.gif";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="profile">
          <img src={isa} alt="Profile Photo" className="photo" />
          <h1 className="title">Isahan Gasanov</h1>
        </div>
      </header>
      <main className="main">
        <section className="content">
          <section className="section">
            <p className="text">
              As a passionate front-end developer, I am dedicated to crafting
              visually appealing and user-friendly interfaces. With experience
              in designing and implementing responsive, cross-browser web pages,
              I aim to provide exceptional user experiences. My focus is on
              creating seamless, engaging, and efficient interfaces through
              careful attention to detail and a deep understanding of design
              principles and user interaction. I work with modern technologies
              and frameworks to build dynamic, interactive web pages that
              combine functionality and aesthetics. I excel in collaborative
              environments, effectively communicating with designers,
              developers, and stakeholders to bring projects to life. Regardless
              of the projects scale, I strive to deliver high-quality,
              innovative solutions that enhance user engagement and
              satisfaction.
            </p>
          </section>
          <section>
            <h2 className="experience">Work Experience</h2>
            <article className="article">
              <h3 className="subTitle">
                Freelance Web Developer and Designer (2019-2024)
              </h3>
              <p>
                Over the past four years, I specialized in front-end web
                development, using HTML, CSS, and JavaScript to build responsive
                and visually appealing websites. I also utilized Figma for
                designing user interfaces and wireframes. Additionally, I have
                experience working with React and Python Django to create robust
                and scalable web applications. My key responsibilities included:
              </p>
              <ul className="list">
                <li className="mb-2">
                  Web Development: Writing clean and efficient HTML, CSS, and
                  JavaScript.
                </li>
                <li className="mb-2">
                  React Development: Building dynamic and interactive user
                  interfaces using React, including state management and
                  component-based architecture.
                </li>
                <li className="mb-2">
                  Python Django: Developing back-end services and RESTful APIs
                  using Django, enabling seamless integration between front-end
                  and back-end systems.
                </li>
                <li className="mb-2">
                  Design: Creating intuitive designs in Figma.
                </li>
                <li className="mb-2">
                  Client Collaboration: Understanding and translating client
                  needs into effective digital solutions.
                </li>
                <li className="mb-2">
                  Responsive Design: Ensuring cross-browser and device
                  compatibility.
                </li>
              </ul>
              <p>
                Check out one of my projects:
                <a
                  href="https://effervescent-clafoutis-219ffd.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectLink"
                >
                  MyParking.by
                </a>
              </p>
            </article>
            <article className="article">
              <h3 className="subTitle">BSU Student Developer (2023-Present)</h3>
              <p>
                Since 2023, I have been studying at BSU and working on various
                exciting projects that are widely utilized. These projects
                include:
              </p>
              <ul className="list">
                <li className="mb-2">
                  Multi-Page Applications: Developed complex multi-page
                  applications with dynamic routing.
                </li>
                <li className="mb-2">
                  Filtered Applications: Built applications with advanced
                  filtering, search, and validation features.
                </li>
                <li className="mb-2">
                  Database Integration: Implemented applications with JSON
                  server and Redux for state management.
                </li>
                <li className="mb-2">
                  TypeScript: Utilized TypeScript for enhanced type safety and
                  maintainability.
                </li>
                <li className="mb-2">
                  TailwindCSS: Employed TailwindCSS for rapid and responsive UI
                  design.
                </li>
              </ul>
            </article>
          </section>
          <section className="media-section">
            <h2 className="mediaTitle">Project Showcase</h2>
            <div className="mediaGrid">
            <div className="mediaBlock">
                <img src={GIF6} alt="Project 6" className="mediaImage" />
                <h3 className="mediaName">Notion(REDUX)</h3>
                <p className="mediaDescription">
                  Collaborative Notes Application is a multi-user note-taking
                  app built with React, TailwindCSS, Redux, and json-server. It
                  features user management, robust notes management, pagination,
                  search, sorting, and responsive design. Perfect for modern
                  development practices and exploring advanced tech stack
                  functionalities.
                </p>
                <div className="mediaLinkContainer">
                  <a
                    href="https://github.com/Isahannn/todos-server-redux-.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mediaLink"
                  >
                    View Project
                  </a>
                </div>
              </div>
                          
              <div className="mediaBlock">
                <img src={GIF7} alt="Project 7" className="mediaImage" />
                <h3 className="mediaName">MyParking</h3>
                <p className="mediaDescription">
                  MyParking Application is a web solution built with React,
                  TailwindCSS, and Yandex Maps API. It offers real-time updates
                  on available parking spaces, providing users with an
                  efficient, user-friendly interface for locating parking spots.
                </p>
                <div className="mediaLinkContainer">
                  <a
                    href="https://github.com/Isahannn/SmartParking-hackathon.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mediaLink"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="mediaBlock">
                <img src={GIF1} alt="Project 1" className="mediaImage" />
                <h3 className="mediaName">API(JS)</h3>
                <p className="mediaDescription">
                  User Albums SPA is a multi-page web application built as a
                  Single Page Application (SPA). It uses hash-based routing to
                  display user lists, user albums, and album photos with
                  infinite scroll. The project is structured for clarity and
                  maintainability.
                </p>
                <div className="mediaLinkContainer">
                  <a
                    href="https://github.com/Isahannn/API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mediaLink"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="mediaBlock">
                <img src={GIF2} alt="Project 2" className="mediaImage" />
                <h3 className="mediaName">TypeScript</h3>
                <p className="mediaDescription">
                  Filterable List - TypeScript Edition rewrites an asynchronous
                  Filterable List application from JavaScript to TypeScript for
                  improved type safety and maintainability. It features
                  asynchronous data fetching, user-based filtering, robust error
                  handling, and a modular architecture.
                </p>
                <div className="mediaLinkContainer">
                  <a
                    href="https://github.com/Isahannn/TypeScript.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mediaLink"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="mediaBlock">
                <img src={GIF3} alt="Project 3" className="mediaImage" />
                <h3 className="mediaName">CV-BSU-WEB-Designed</h3>
                <p className="mediaDescription">
                  My Unique Resume from BSU features projects such as CSS
                  Gallery, Interactive Map, Piggy Website, Musical Apps, Data
                  Tables, Business Card, Landing Page, and Block Layout and
                  Transitions. This showcases my web development journey and the
                  skills I've developed.
                </p>
                <div className="mediaLinkContainer">
                  <a
                    href="https://github.com/Isahannn/Isahannn-CV-BSU-WEB-Designed.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mediaLink"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="mediaBlock">
                <img src={GIF4} alt="Project 4" className="mediaImage" />
                <h3 className="mediaName">TODO list</h3>
                <p className="mediaDescription">
                  TODO List Application helps users add, manage, and filter
                  tasks. It features input fields for task title and
                  description, status checkboxes, delete options, and a filter
                  for incomplete tasks. The application is structured into
                  modular components with a clean interface.
                </p>
                <div className="mediaLinkContainer">
                  <a
                    href="https://github.com/Isahannn/Todo-List-Gasanov.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mediaLink"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="mediaBlock">
                <img src={GIF5} alt="Project 5" className="mediaImage" />
                <h3 className="mediaName">Notion</h3>
                <p className="mediaDescription">
                  Collaborative Notes Application is a multi-user note-taking
                  app built with React, TailwindCSS, and json-server. It
                  features user management, robust notes management, pagination,
                  search, sorting, and responsive design. Perfect for organizing
                  thoughts and exploring modern development practices.
                </p>
                <div className="mediaLinkContainer">
                  <a
                    href="https://github.com/Isahannn/todos-server.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mediaLink"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="mediaBlock">
                <img src={GIF8} alt="Project 8" className="mediaImage" />
                <h3 className="mediaName">Todo with filters</h3>
                <p className="mediaDescription">
                  Todoist Application with Advanced Task Filtering is a task
                  management app with complex filtering capabilities. Built with
                  React and styled using TailwindCSS, CSS modules, or SCSS
                  modules, it allows for creating, managing, and filtering tasks
                  with ease. The app supports advanced filters and is optimized
                  for performance.
                </p>
                <div className="mediaLinkContainer">
                  <a
                    href="https://github.com/Isahannn/Todoist.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mediaLink"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
        <aside className="aside">
          <section className="asideSection">
            <p className="asideText">Minsk, Belarus 🇧🇾</p>
            <a href="mailto:isahangasanov84@gmail.com" className="email">
            isahangasanov84@gmail.com ✉️
            </a>
          </section>
          <section>
            <h2 className="asideTitle">Education</h2>
            <p className="asideText">
              BSU - Mechanics-Mathematics Faculty <br />
              2023-now
            </p>
          </section>
          <section>
            <h2 className="asideTitle">Technical Skills</h2>
            <ul className="ul">
              <li className="mb-2">HTML, CSS, JavaScript</li>
              <li className="mb-2">React, Redux</li>
              <li className="mb-2">Redux--thunk</li>
              <li className="mb-2">Python, Django</li>
              <li className="mb-2">Figma, Adobe XD</li>
              <li className="mb-2">Git, GitHub</li>
              <li className="mb-2">zod</li>
              <li className="mb-2">TailwindCSS</li>
              <li className="mb-2">shortid</li>
              <li className="mb-2">Chance</li>
              <li className="mb-2">CSS Modules</li>
            </ul>
          </section>
          <section>
            <h2 className="asideTitle">Certifications</h2>
            <ul className="ul">
              <li className="mb-2">Certified JavaScript Developer</li>
              <li className="mb-2">React Developer Certification</li>
              <li className="mb-2">Python for Web Development</li>
            </ul>
          </section>
          <section>
            <h2 className="asideTitle">Languages</h2>
            <ul className="ul">
              <li className="mb-2">
                Russian - C1 <span className="flag">🇷🇺</span>
              </li>
              <li className="mb-2">
                Azerbaijani - C1 <span className="flag">🇦🇿</span>
              </li>
              <li className="mb-2">
                Turkish - B2 <span className="flag">🇹🇷</span>
              </li>
              <li className="mb-2">
                English - B2 <span className="flag">🇬🇧</span>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="asideTitle">Interests</h2>
            <ul className="ul">
              <li className="mb-2">Web Development</li>
              <li className="mb-2">Traveling</li>
              <li className="mb-2">Reading Technology Blogs</li>
              <li className="mb-2">Participating in Coding Hackathons</li>
            </ul>
          </section>
        </aside>
      </main>
      <footer className="footer">
        <a
          href="https://t.me/isahannn"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          Telegram
        </a>
        <a
          href="https://github.com/Isahannn"
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
        >
          GitHub
        </a>
        <a href="mailto:isahangasanov84@gmail.com" className="footerLink">
          Gmail
        </a>
      </footer>
    </div>
  );
}

export default App;
