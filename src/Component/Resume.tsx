import "./Resume.css";

function Resume() {
  return (
    <div>
      <header>
        <h1 className="center">
          <b>Resume</b>
        </h1>
        <h3 className="center">
          This is Nattapan Tammawonsa Brandnew junior dev^^
        </h3>
        <p>Contact: 0918343194 / 0615285551</p>
        <p>
          Email: <a href="mailto:fongfah17@gmail.com">fongfah17@gmail.com</a>
        </p>
        <p>
          Github: <a href="https://github.com/Nattapan-T">Nattapan-T</a>
        </p>
      </header>

      <section className="section">
        <h2>Career Objective</h2>
        <p>
          Looking for an opportunity to work as a Junior Software Developer with
          the aim of developing cutting-edge applications that meet customer
          needs.
        </p>
      </section>

      <section className="section">
        <h2>Skills Set</h2>
        <h3>Soft Skills</h3>
        <li>Energetic and responsible</li>
        <li>Fast learner and Eager to learn</li>
        <li>Able to handle many task at once and be a problem solver</li>
        <li>Continual improvement</li>
        <li>Having interpersonal skills to work effectively with others</li>
      </section>

      <section className="section">
        <h3>Languages</h3>
        <ul>
          <li>English - Upper intermediate</li>
          <li>Chinese - For airline business</li>
        </ul>
      </section>

      <section className="section">
        <h3>HARD SKILL</h3>
        <ul>
          <li>Python</li>
          <li>Basic - Typescript</li>
          <li>Basic - React</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </section>

      <h2>EDUCATION</h2>
      <table>
        <tbody>
          <tr className="first-row">
            <th>School/University</th>
            <th>Major</th>
            <th>Since-To</th>
          </tr>
          <tr>
            <td>Suandusit University</td>
            <td>Airline business management</td>
            <td>2017 - 2020</td>
          </tr>
          <tr>
            <td>St Marry’s College</td>
            <td>Science - Math Major</td>
            <td>2005 - 2016</td>
          </tr>
        </tbody>
      </table>

      <h2>WORK EXPERIENCE</h2>
      <table>
        <tbody>
          <tr className="first-row">
            <td>Company</td>
            <td>Position</td>
            <td>Since-To</td>
          </tr>
          <tr>
            <td>Bangkok flight service (BFS)</td>
            <td>Passenger Service Agent</td>
            <td>Oct 2022 - Dec 2022</td>
          </tr>
          <tr>
            <td>Bangkok flight service (BFS)</td>
            <td>Support Passenger Service Agent (Internship)</td>
            <td>Nov 2019 - Feb 2020</td>
          </tr>
          <tr>
            <td>Government Saving Bank</td>
            <td>Part-time Credit officer</td>
            <td>March 2017 - June 2017</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Resume;
