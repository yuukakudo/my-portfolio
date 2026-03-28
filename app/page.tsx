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
    </main>
  );
}