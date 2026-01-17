"use client";

import { MindMap, MindMapControls } from "@/registry/mindmap";
import { ExampleCard } from "./example-card";

const organizationalData = {
  nodeData: {
    id: "root",
    topic: "TechCorp Inc.",
    root: true,
    children: [
      {
        id: "ceo",
        topic: "CEO",
        direction: 0,
        children: [
          {
            id: "cto",
            topic: "CTO",
            children: [
              { id: "dev", topic: "Development Team" },
              { id: "qa", topic: "QA Team" },
            ],
          },
          {
            id: "cfo",
            topic: "CFO",
            children: [
              { id: "accounting", topic: "Accounting" },
              { id: "finance", topic: "Finance" },
            ],
          },
        ],
      },
      {
        id: "coo",
        topic: "COO",
        direction: 1,
        children: [
          {
            id: "hr",
            topic: "HR",
            children: [
              { id: "recruiting", topic: "Recruiting" },
              { id: "training", topic: "Training" },
            ],
          },
          {
            id: "ops",
            topic: "Operations",
            children: [
              { id: "logistics", topic: "Logistics" },
              { id: "support", topic: "Support" },
            ],
          },
        ],
      },
    ],
  },
};

export function OrganizationalChart() {
  return (
    <ExampleCard
      label="Organizational Chart"
      className="aspect-square sm:col-span-2 sm:aspect-video lg:aspect-auto lg:h-[330px]"
      delay="delay-400"
    >
      <MindMap
        data={organizationalData}
        direction={1}
        className="h-full"
      >
        <MindMapControls position="top-right" />
      </MindMap>
    </ExampleCard>
  );
}
