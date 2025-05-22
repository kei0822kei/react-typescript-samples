import { useEffect, useRef } from "react";
import { Network } from "vis-network";
import type { Node, Edge, Options } from "vis-network"

let network: any;

/** Network図 の Component */
const NetworkGraph = () => {
  /** DOMを参照できるように useRef を使用して Element を取得する */
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
      /** physics オプションは、グラフの物理的シミュレーションに関する設定を指定します。*/
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
    <div>
      {/* Network図 を表示する領域 */}
      <div style={{ height: 800, width: "100%" }} ref={ref} />
    </div>
  );
};

export default NetworkGraph;
