import { useState, useEffect, useRef } from "react";
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
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    tabsRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  };

  // Preload all diagrams on mount
  useEffect(() => {
    diagrams.forEach((diagram) => {
      const img = new Image();
      img.src = diagram.src;
    });
  }, []);

  return (
    <div className="space-y-6">
      {/* Pill-style tabs */}
      <div className="flex justify-center gap-2 scroll-mt-24" ref={tabsRef}>
        {diagrams.map((diagram, index) => (
          <button
            key={diagram.id}
            onClick={() => handleTabClick(index)}
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
      
      {/* Diagram display - all rendered, visibility toggled */}
      <div className="p-4">
        {diagrams.map((diagram, index) => (
          <img
            key={diagram.id}
            src={diagram.src}
            alt={`Benchy architecture - ${diagram.label}`}
            className={`mx-auto max-w-full max-h-[65vh] w-auto h-auto ${activeTab !== index ? "hidden" : ""}`}
            style={{ filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08))" }}
          />
        ))}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          {diagrams[activeTab].caption}
        </p>
      </div>
    </div>
  );
};

export default ArchitectureDiagrams;
