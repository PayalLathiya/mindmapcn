"use client";

import { OrganizationalChart } from "./organizational-chart";
import { ProjectPlanning } from "./project-planning";
import { KnowledgeGraph } from "./knowledge-graph";
import { Brainstorming } from "./brainstorming";
import { DecisionTree } from "./decision-tree";

export function Examples() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in delay-400">
      {/* Widget 1: Organizational Chart */}
      <OrganizationalChart />

      {/* Widget 2: Project Planning */}
      <ProjectPlanning />

      {/* Widget 3: Knowledge Graph */}
      <KnowledgeGraph />

      {/* Widget 4: Brainstorming */}
      <Brainstorming />

      {/* Widget 5: Decision Tree */}
      <DecisionTree />
    </div>
  );
}
