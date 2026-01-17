"use client";

import { MindMap, MindMapControls } from "@/registry/mindmap";
import { ExampleCard } from "./example-card";

const projectPlanningData = {
  nodeData: {
    id: "root",
    topic: "Website Redesign",
    root: true,
    children: [
      {
        id: "research",
        topic: "Research",
        direction: 0,
        children: [
          { id: "user-research", topic: "User Research", tags: ["Week 1"] },
          { id: "competitor", topic: "Competitor Analysis", tags: ["Week 1"] },
        ],
      },
      {
        id: "design",
        topic: "Design",
        direction: 0,
        children: [
          { id: "wireframes", topic: "Wireframes", tags: ["Week 2"] },
          { id: "mockups", topic: "Mockups", tags: ["Week 3"] },
          { id: "prototype", topic: "Prototype", tags: ["Week 4"] },
        ],
      },
      {
        id: "development",
        topic: "Development",
        direction: 1,
        children: [
          { id: "frontend", topic: "Frontend", tags: ["Week 5-6"] },
          { id: "backend", topic: "Backend", tags: ["Week 5-6"] },
          { id: "testing", topic: "Testing", tags: ["Week 7"] },
        ],
      },
      {
        id: "launch",
        topic: "Launch",
        direction: 1,
        children: [
          { id: "deployment", topic: "Deployment", tags: ["Week 8"] },
          { id: "monitoring", topic: "Monitoring", tags: ["Ongoing"] },
        ],
      },
    ],
  },
};

export function ProjectPlanning() {
  return (
    <ExampleCard label="Project Planning" className="aspect-square" delay="delay-500">
      <MindMap
        data={projectPlanningData}
        direction={1}
        className="h-full"
      >
        <MindMapControls position="top-right" showExport={false} />
      </MindMap>
    </ExampleCard>
  );
}
