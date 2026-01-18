"use client";

import { MindMap, MindMapControls } from "@/registry/mindmap";
import { ExampleCard } from "./example-card";

const decisionTreeData = {
  nodeData: {
    id: "root",
    topic: "Choose Tech Stack",
    root: true,
    children: [
      {
        id: "type",
        topic: "Project Type?",
        direction: 0,
        children: [
          {
            id: "web-app",
            topic: "Web App",
            children: [
              {
                id: "react",
                topic: "React + Next.js",
                style: { background: "#10b981", color: "#fff" },
              },
              {
                id: "vue",
                topic: "Vue + Nuxt",
                style: { background: "#10b981", color: "#fff" },
              },
            ],
          },
          {
            id: "mobile",
            topic: "Mobile App",
            children: [
              {
                id: "rn",
                topic: "React Native",
                style: { background: "#10b981", color: "#fff" },
              },
              {
                id: "flutter",
                topic: "Flutter",
                style: { background: "#10b981", color: "#fff" },
              },
            ],
          },
        ],
      },
      {
        id: "scale",
        topic: "Scale?",
        direction: 1,
        children: [
          {
            id: "small",
            topic: "Small/MVP",
            children: [
              {
                id: "serverless",
                topic: "Serverless",
                style: { background: "#3b82f6", color: "#fff" },
              },
            ],
          },
          {
            id: "large",
            topic: "Large/Enterprise",
            children: [
              {
                id: "microservices",
                topic: "Microservices",
                style: { background: "#3b82f6", color: "#fff" },
              },
            ],
          },
        ],
      },
    ],
  },
};

export function DecisionTree({ className }: { className?: string }) {
  return (
    <ExampleCard
      label="Decision Tree"
      className={className}
      delay="delay-800"
    >
      <MindMap
        data={decisionTreeData}
        direction={1}
        className="h-full"
      >
        <MindMapControls position="top-right" showExport={false} />
      </MindMap>
    </ExampleCard>
  );
}
