import { shortestDistanceNode } from "./shortestDistanceNode";
import { statesGraph } from "./statesGraph";

export const findingShortestPathDijkstrasAlgorithm = (
  initialNode,
  finalNode
) => {
  const graph = statesGraph;

  let distances = {};
  distances[finalNode] = "Infinity";
  distances = Object.assign(distances, graph[initialNode]);

  let parents = { endNode: null };
  for (let child in graph[initialNode]) {
    parents[child] = initialNode;
  }

  let visited = [];
  let node = shortestDistanceNode(distances, visited);

  while (node) {
    let distance = distances[node];
    let children = graph[node];

    for (let child in children) {
      if (String(child) === String(initialNode)) {
        continue;
      } else {
        let newDistance = distance + children[child];
        if (!distances[child] || distances[child] > newDistance) {
          distances[child] = newDistance;
          parents[child] = node;
        }
      }
    }

    visited.push(node);
    node = shortestDistanceNode(distances, visited);
  }

  let shortestPath = [finalNode];
  let parent = parents[finalNode];

  while (parent) {
    shortestPath.push(parent);
    parent = parents[parent];
  }

  shortestPath.reverse();

  let results = {
    distance: distances[finalNode],
    path: shortestPath,
  };

  return results;
};
