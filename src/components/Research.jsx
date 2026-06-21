import "./Sections.css";
import PageHeader from "./PageHeader";
import ResearchItem from "./ResearchItem";
import research from "../data/research";

export default function Research() {
  return (
    <section id="research" className="research">
      <PageHeader
        eyebrow="Academic Work"
        title="Research"
        description="Theory and experiments at the intersection of machine learning, stochastic processes, and scientific computing."
      />
      <div className="research-list">
        {research.map((item) => (
          <ResearchItem key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
