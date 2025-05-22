import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { Network } from "vis-network";
import type { Network as NetworkType, Node, Edge, Options } from "vis-network";

let network: NetworkType;

const NetworkGraph = () => {
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

    // Network が存在しない場合の処理
    if (!network && ref.current) {
      // Network Instance を作成して、DataをSetする => new Network(Dom領域, Data(Nodes & Edges), Options)
      network = new Network(
        ref.current,
        {
          nodes: nodes,
          edges: edges,
        },
        options
      );
    }

    // Click イベントハンドラ を追加する
    // network.on("click", (params: { nodes: number[] }) => {
    //   if (params.nodes.length > 0) {
    //     // クリックした Node のIDを取得する
    //     const nodeId = params.nodes[0];
    //     /** クリックした Node のIDから、該当の Nodeを取得する */
    //     const node = nodes.get(nodeId);
    //     // URLが存在する場合の処理
    //     if (node?.url) {
    //       /** クリックしたノードのURLを取得して、Openする */
    //       window.open(node.url, "_blank");
    //     }
    //   }
    // });
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: 800,
        backgroundColor: '#f5ebf7',
        boxShadow: 2,
      }}
    >
      <div style={{ height: "100%", width: "100%" }} ref={ref} />
    </Box>
  );
};

export default NetworkGraph;
