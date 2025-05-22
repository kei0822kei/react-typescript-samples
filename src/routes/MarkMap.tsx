import React, { useRef, useEffect, memo } from 'react';
import { Markmap, deriveOptions } from 'markmap-view';
import type { IMarkmapOptions } from 'markmap-view';

// Markmapのノードの型定義 (このファイル内に直接定義)
interface MarkmapNode {
  content: string;
  depth: number;
  children: MarkmapNode[];
  // 必要であれば、ノードにカスタムプロパティを追加できます
}

// Markmapとして表示するJSONデータをTypeScriptオブジェクトとして直接定義
const myInlineMarkmapData: MarkmapNode = {
  "content": "社内コミュニケーション改善案",
  "depth": 0,
  "children": [
    {
      "content": "現状の課題",
      "depth": 1,
      "children": [
        { "content": "情報共有の遅延", "depth": 2, "children": [] },
        { "content": "部署間の連携不足", "depth": 2, "children": [] },
        { "content": "会議の非効率性", "depth": 2, "children": [] }
      ]
    },
    {
      "content": "具体的な改善策",
      "depth": 1,
      "children": [
        {
          "content": "ツールの導入",
          "depth": 2,
          "children": [
            { "content": "Slack/Teamsの活用", "depth": 3, "children": [] },
            { "content": "プロジェクト管理ツールの導入", "depth": 3, "children": [] }
          ]
        },
        {
          "content": "社内イベントの促進",
          "depth": 2,
          "children": [
            { "content": "ランチ会", "depth": 3, "children": [] },
            { "content": "部署交流会", "depth": 3, "children": [] }
          ]
        },
        { "content": "会議ルールの見直し", "depth": 2, "children": [] }
      ]
    },
    {
      "content": "期待される効果",
      "depth": 1,
      "children": [
        { "content": "業務効率向上", "depth": 2, "children": [] },
        { "content": "従業員満足度アップ", "depth": 2, "children": [] }
      ]
    }
  ]
};

interface InlineMarkmapProps {
  /** Markmapの表示オプション (任意) */
  options?: IMarkmapOptions;
}

const MarkMap: React.FC<InlineMarkmapProps> = ({ options }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const markmapRef = useRef<Markmap | null>(null);

  // Markmapインスタンスの初期化とクリーンアップ
  // このEffectはコンポーネントのマウント時に一度だけ実行されます
  useEffect(() => {
    if (svgRef.current && !markmapRef.current) {
      markmapRef.current = Markmap.create(
        svgRef.current,
        { ...deriveOptions({}), ...options } // デフォルトオプションとカスタムオプションをマージ
      );
      // 初回レンダリング時にデータを設定
      markmapRef.current.setData(myInlineMarkmapData);
      markmapRef.current.fit();
    }

    // クリーンアップ関数: コンポーネントがアンマウントされるときにMarkmapインスタンスを破棄
    return () => {
      if (markmapRef.current) {
        markmapRef.current.destroy();
        markmapRef.current = null;
      }
    };
  }, [options]); // optionsが変更されたらMarkmapインスタンスを再生成する

  // もしデータを外部から動的に渡したい場合は、ここにデータ更新用のuseEffectを追加します。
  // 今回は固定データなので不要です。

  return (
    <div style={{ width: '100%', height: '600px', border: '1px solid #ddd', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      {/* MarkmapがレンダリングされるSVG要素 */}
      <svg ref={svgRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default MarkMap
