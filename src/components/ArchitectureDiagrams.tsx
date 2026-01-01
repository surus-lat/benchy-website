import { useState } from "react";
import diagram1 from "@/assets/benchy-diagram1.svg";
import diagram2 from "@/assets/benchy-diagram2.svg";
import diagram3 from "@/assets/benchy-diagram3.svg";

const diagrams = [
  { id: 1, src: diagram1, label: "Overview", caption: "High-level system architecture" },
  { id: 2, src: diagram2, label: "Task Flow", caption: "How tasks are processed" },
  { id: 3, src: diagram3, label: "Components", caption: "Core component relationships" },
];

const ArchitectureDiagrams = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-6">
      {/* Pill-style tabs */}
      <div className="flex justify-center gap-2">
        {diagrams.map((diagram, index) => (
          <button
            key={diagram.id}
            onClick={() => setActiveTab(index)}
            className={`rounded-full px-5 py-2 font-mono text-sm transition-all ${
              activeTab === index
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
            }`}
          >
            {diagram.label}
          </button>
        ))}
      </div>
      
      {/* Diagram display */}
      <div className="rounded-xl bg-card p-8">
        <img
          src={diagrams[activeTab].src}
          alt={`Benchy architecture - ${diagrams[activeTab].label}`}
          className="mx-auto max-w-full"
        />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          {diagrams[activeTab].caption}
        </p>
      </div>
    </div>
  );
};

export default ArchitectureDiagrams;
