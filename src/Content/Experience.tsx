import Widecard from "../component/Widecard";
const Experience: React.FC = () => {
  return (
    <div className="condiv">
      <h1 className="subtopic">Experience</h1>
      <Widecard
        school="Bangkok Flight Services(BFS)"
        major="Passenger Service Agent"
        from="Oct 2022"
        to="Dec 2022"
      />
      <Widecard
        school="Bangkok Flight Services(BFS)"
        major="Support Passenger Service Agent"
        from="Nov 2019"
        to="Feb 2020"
      />
      <Widecard
        school="Government Saving Bank"
        major="Part-time Credit officer"
        from="March 2017"
        to="June 2017"
      />
    </div>
  );
};
export default Experience;
