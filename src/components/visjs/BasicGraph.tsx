import { useEffect, useRef } from "react";
import { Network } from "vis-network";
import type { Network as NetworkType, Node, Edge, Options } from "vis-network";

const BasicGraph = () => {

  let network: NetworkType;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nodes: Node[] = []
    for (let i = 0; i < 10; i++) {
      nodes.push({ id: i, label: `Node ${i}` })
    }
    const edges: Edge[] = [
      { from: 1, to: 3 }
    ]
    const options: Options = {
      physics: {
        barnesHut: {
          gravitationalConstant: -4000,
        },
      },
      interaction: {
        multiselect: true,
      },
    };

    if (!network && ref.current) {
      network = new Network(
        ref.current,
        {
          nodes: nodes,
          edges: edges,
        },
        options
      );
    }
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }} ref={ref} />
  );
};

export default BasicGraph;
