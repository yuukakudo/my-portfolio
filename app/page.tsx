export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      {/* 自己紹介セクション */}
      <section className="py-12 border-b">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl">
            👤 {/* ここに人型アイコン */}
          </div>
          <div>
            <h1 className="text-3xl font-bold">あなたの名前</h1>
            <p className="text-gray-600">エンジニア歴：◯年</p>
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-4 text-blue-600">
          「開発から管理まで、効率と品質を追求するシステムエンジニア」
        </h2>
        
        <p className="leading-relaxed text-gray-800">
          現在はシステムエンジニアとして、Webアプリケーションの製造工程を中心に担っています。「開発」そのものが好きなので、休日も新しい技術を試したり、個人のプロダクト開発を楽しんでいます。<br />
          現場で磨いた技術とコミュニケーション力を活かし、ただ動くものを作るのではなく、関わる人が驚くような効率的で気の利いた価値を提供できるよう、探求心を忘れずに取り組んでいます。
        </p>
      </section>

      {/* 資格セクション */}
      <section className="py-12">
        <h3 className="text-2xl font-bold mb-6">Qualifications & Learning</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>基本情報技術者試験</li>
          <li>情報活用試験1級</li>
          <li>SEA/J</li>
          <li>情報セキュリティマネジメント</li>
        </ul>
        <p className="mt-4 font-semibold text-blue-500 italic">
          Currently Learning: Java Silver/Gold, AWS SAA
        </p>
      </section>
      {/* 制作実績・サンプルセクション */}
      <section className="py-12 border-t">
        <h3 className="text-2xl font-bold mb-8 text-gray-800">Works / Samples</h3>
        
        {/* カードのグリッドレイアウト（スマホ1列、PC3列） */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* サンプルカード1：ポートフォリオサイト自体 */}
          <div className="group border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-40 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center text-gray-400">
              {/* ここに将来的にスクリーンショット画像を入れます */}
              My Portfolio
            </div>
            <div className="p-4">
              <h4 className="font-bold text-lg mb-2">エンジニアポートフォリオ</h4>
              <p className="text-sm text-gray-600 mb-4">
                自身のスキルと実績を可視化。Next.js (App Router) を採用し、Vercelで自動デプロイ環境を構築。
              </p>
              <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Next.js</span>
                <span className="bg-sky-100 text-sky-700 px-2 py-1 rounded">Tailwind CSS</span>
                <span className="bg-black text-white px-2 py-1 rounded">Vercel</span>
              </div>
            </div>
          </div>

          {/* サンプルカード2：Coming Soon（枠だけ用意しておく） */}
          <div className="border rounded-xl overflow-hidden shadow-sm border-dashed border-gray-300 flex flex-col items-center justify-center p-8 text-gray-400">
            <p className="text-sm italic">Next Project Coming Soon...</p>
            <p className="text-xs mt-2">（Webアプリ制作中）</p>
          </div>

        </div>
      </section>

      {/* SNS・コンタクトセクション */}
      <section className="py-12 border-t text-center">
        <h3 className="text-2xl font-bold mb-6">Contact</h3>
        <div className="flex justify-center gap-6">
          <a href="https://x.com/あなたのユーザーID" className="text-blue-500 hover:underline font-bold">X (Twitter)</a>
          <a href="mailto:your-email@example.com" className="text-gray-600 hover:underline font-bold">Email</a>
        </div>
      </section>
    </main>
  );
}