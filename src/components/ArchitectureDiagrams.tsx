import { useState } from "react";
import diagram1 from "@/assets/benchy-diagram1.svg";
import diagram2 from "@/assets/benchy-diagram2.svg";
import diagram3 from "@/assets/benchy-diagram3.svg";

const diagrams = [
  { id: 1, src: diagram1, label: "Overview" },
  { id: 2, src: diagram2, label: "Task Flow" },
  { id: 3, src: diagram3, label: "Components" },
];

const ArchitectureDiagrams = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-4">
      <div className="flex gap-1 border-b border-border">
        {diagrams.map((diagram, index) => (
          <button
            key={diagram.id}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 font-mono text-sm transition-colors ${
              activeTab === index
                ? "border-b-2 border-primary text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {diagram.label}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-md border border-border bg-card p-6">
        <img
          src={diagrams[activeTab].src}
          alt={`Benchy architecture - ${diagrams[activeTab].label}`}
          className="mx-auto max-w-full"
        />
      </div>
    </div>
  );
};

export default ArchitectureDiagrams;