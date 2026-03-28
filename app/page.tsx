export default function Home() {
  return (
    // 横揺れ防止とテキスト選択色の設定。touch-pan-yで自然なスクロールを維持。
    <main className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden selection:bg-blue-100 touch-pan-y">
      
      {/* 1. 自己紹介セクション */}
      <section className="py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col items-center md:items-start">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-10 md:mb-12 w-full justify-center md:justify-start">
            {/* スマホでアイコンを少し小さく */}
            <div className="w-28 h-28 md:w-36 md:h-36 bg-gray-50 rounded-full flex items-center justify-center text-5xl md:text-7xl shadow-inner border border-gray-100 flex-shrink-0">
              👤
            </div>
            <div className="text-center md:text-left">
              {/* 名前と肩書きのサイズをスマホ用に微調整 */}
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3 text-gray-900">工藤 悠花</h1>
              <p className="text-xl md:text-2xl text-blue-500 font-bold">エンジニア歴：2年</p>
            </div>
          </div>
          
          <div className="w-full text-center md:text-left"> 
            {/* キャッチコピー：スマホではtext-xl、PCではtext-4xlを維持 */}
            <h2 className="text-xl md:text-4xl font-bold mb-8 md:mb-10 text-gray-900 leading-tight md:break-keep">
              「開発から管理まで、効率と品質を追求するシステムエンジニア」
            </h2>
            {/* 本文：スマホでは標準的なtext-base、PCではゆったりのtext-xl */}
            <div className="max-w-5xl text-base md:text-xl leading-relaxed text-gray-600 space-y-4 md:space-y-6">
              <p>
                現在はシステムエンジニアとして、Webアプリケーションの製造工程を中心に担っています。<br className="hidden md:block" />
                「開発」そのものが好きなので、休日も新しい技術を試したり、個人のプロダクト開発を楽しんでいます。
              </p>
              <p>
                現場で磨いた技術とコミュニケーション力を活かし、ただ動くものを作るのではなく、<br className="hidden md:block" />
                関わる人が驚くような効率的で気の利いた価値を提供できるよう、探求心を忘れずに取り組んでいます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. スキルセクション */}
      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-center md:text-left">
          <div className="mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center md:justify-start gap-3">
              <span className="w-1.5 h-8 md:w-2 md:h-10 bg-blue-600 rounded-full"></span>
              Tech Stack
            </h3>
            <p className="text-lg md:text-xl text-gray-500 italic">実務経験のある技術と、現在習得中のモダンな技術スタック</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-left">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
              <h4 className="font-bold text-blue-600 mb-6 md:mb-8 text-xl md:text-2xl flex items-center gap-2">Professional Skills</h4>
              <ul className="space-y-4 md:space-y-6 text-gray-600">
                <li className="flex flex-col border-b border-gray-50 pb-3 md:pb-4">
                  <span className="font-bold text-gray-900 text-base md:text-lg mb-1">Languages</span>
                  <span className="text-sm md:text-lg">Java, JavaScript</span>
                </li>
                <li className="flex flex-col border-b border-gray-50 pb-3 md:pb-4">
                  <span className="font-bold text-gray-900 text-base md:text-lg mb-1">Frameworks</span>
                  <span className="text-sm md:text-lg">Spring Boot, (業務使用技術)</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-gray-900 text-base md:text-lg mb-1">Others</span>
                  <span className="text-sm md:text-lg">SQL, システム設計, PMO業務支援</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
              <h4 className="font-bold text-indigo-600 mb-6 md:mb-8 text-xl md:text-2xl flex items-center gap-2">Personal Development</h4>
              <ul className="space-y-4 md:space-y-6 text-gray-600">
                <li className="flex flex-col border-b border-gray-50 pb-3 md:pb-4">
                  <span className="font-bold text-gray-900 text-base md:text-lg mb-1">Frontend</span>
                  <span className="text-sm md:text-lg">React, Next.js (App Router)</span>
                </li>
                <li className="flex flex-col border-b border-gray-50 pb-3 md:pb-4">
                  <span className="font-bold text-gray-900 text-base md:text-lg mb-1">Styling</span>
                  <span className="text-sm md:text-lg">Tailwind CSS</span>
                </li>
                <li className="flex flex-col">
                  <span className="font-bold text-gray-900 text-base md:text-lg mb-1">Infrastructure</span>
                  <span className="text-sm md:text-lg">Vercel, AWS (Learning)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 資格セクション */}
      <section className="py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center md:text-left mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center md:justify-start gap-3">
              <span className="w-1.5 h-8 md:w-2 md:h-10 bg-green-500 rounded-full"></span>
              Qualifications
            </h3>
            <p className="text-lg md:text-xl text-gray-500 italic">客観的なスキルの証明と、現在取り組んでいる学習事項</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left">
            {[
              "基本情報技術者試験",
              "情報活用試験1級",
              "SEA/J",
              "情報セキュリティマネジメント"
            ].map((cert) => (
              <div key={cert} className="flex items-center gap-3 md:gap-4 p-5 md:p-6 bg-gray-50 rounded-2xl border border-gray-100 font-bold text-gray-700 text-lg md:text-xl shadow-sm">
                <span className="text-green-500">✓</span> {cert}
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-12 p-8 md:p-10 bg-blue-50 rounded-3xl border border-blue-100 text-center md:text-left">
            <p className="text-xs md:text-sm font-black text-blue-400 uppercase tracking-[0.2em] mb-2 md:mb-3">Goal / Learning</p>
            <p className="text-2xl md:text-3xl font-bold text-blue-800 italic">
              Java Silver / Gold, AWS SAA
            </p>
          </div>
        </div>
      </section>

      {/* 4. 案件実績 */}
      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center md:text-left mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center md:justify-start gap-3">
              <span className="w-1.5 h-8 md:w-2 md:h-10 bg-blue-600 rounded-full"></span>
              Work Experience
            </h3>
            <p className="text-lg md:text-xl text-gray-500 italic">実務におけるプロジェクト実績</p>
          </div>
          
          <div className="space-y-8 md:space-y-10">
            {/* 案件1 */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 text-left">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                <div className="lg:col-span-3">
                  <span className="text-xs md:text-sm font-black text-blue-400 uppercase tracking-widest block mb-1 md:mb-2">2024.02 - Present</span>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900">Webシステム製造・保守</h4>
                </div>
                <div className="lg:col-span-9 lg:border-l border-gray-100 lg:pl-12">
                  <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">大規模基幹システムの機能追加およびリファクタリング</p>
                  <p className="text-base md:text-xl leading-relaxed text-gray-600 mb-6 md:mb-8 max-w-5xl">
                    Java/Spring Bootを用いたAPIの実装から、フロントエンドの細かな改修まで幅広く担当。<br className="hidden md:block" />
                    既存コードの課題を見つけ、保守性の高い設計への改善も積極的に提案・実行しています。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 bg-gray-50 p-6 md:p-8 rounded-2xl">
                    <div>
                      <span className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase mb-1 md:mb-3">Role / Process</span>
                      <p className="text-gray-800 font-bold text-base md:text-lg">詳細設計 / 製造 / テスト</p>
                    </div>
                    <div>
                      <span className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase mb-1 md:mb-3">Tech Stack</span>
                      <p className="text-gray-800 font-bold text-base md:text-lg">Java, SQL, Git, JUnit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 案件2 */}
            <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 text-left">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                <div className="lg:col-span-3">
                  <span className="text-xs md:text-sm font-black text-indigo-400 uppercase tracking-widest block mb-1 md:mb-2">2026.02 - Ongoing</span>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900">PMO業務支援</h4>
                </div>
                <div className="lg:col-span-9 lg:border-l border-gray-100 lg:pl-12">
                  <p className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">エンジニア視点での進捗・課題管理の効率化</p>
                  <p className="text-base md:text-xl leading-relaxed text-gray-600 mb-6 md:mb-8 max-w-5xl">
                    開発現場の状況を的確に把握し、仕様調整や進捗管理の精度を高める支援を行っています。<br className="hidden md:block" />
                    管理側と開発側の橋渡しとして、プロジェクト全体の円滑な進行をサポートしています。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 bg-gray-50 p-6 md:p-8 rounded-2xl">
                    <div>
                      <span className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase mb-1 md:mb-3">Focus Area</span>
                      <p className="text-gray-800 font-bold text-base md:text-lg">進捗管理 / 課題解決 / 仕様調整</p>
                    </div>
                    <div>
                      <span className="block text-[10px] md:text-xs font-bold text-gray-400 uppercase mb-1 md:mb-3">Soft Skills</span>
                      <p className="text-gray-800 font-bold text-base md:text-lg">ドキュメント作成 / 調整力</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 制作サンプル */}
      <section className="py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center md:text-left mb-12 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center md:justify-start gap-3">
              <span className="w-1.5 h-8 md:w-2 md:h-10 bg-purple-500 rounded-full"></span>
              Showcase / Demos
            </h3>
            <p className="text-lg md:text-xl text-gray-500 italic">個人開発・技術スタックの実験場</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-left">
            <div className="group bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-500">
              <div className="h-48 md:h-64 bg-gray-900 flex flex-col items-center justify-center text-white relative">
                <span className="text-2xl md:text-3xl font-mono mb-2 text-center">&lt; Portfolio Site /&gt;</span>
                <span className="text-xs md:text-sm opacity-50">Next.js + Tailwind CSS</span>
              </div>
              <div className="p-8 md:p-10">
                <h4 className="font-bold text-xl md:text-2xl mb-3 md:mb-4 group-hover:text-blue-600 transition-colors">エンジニアポートフォリオ</h4>
                <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  本サイトそのもののデモ。Next.jsのApp Routerを活用し、PCでの視認性とスマホでの操作性を両立させたモダンな設計です。
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {["Next.js", "Tailwind CSS", "Vercel"].map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-500 text-[10px] md:text-sm font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-[2rem] md:rounded-[2.5rem] flex flex-col items-center justify-center p-8 md:p-12 text-gray-400 min-h-[300px] md:min-h-[400px] bg-gray-50/50">
              <span className="text-4xl md:text-6xl mb-4 md:mb-6">🏗️</span>
              <p className="text-xl md:text-2xl font-medium italic text-center">Coming Soon...</p>
              <p className="text-xs md:text-sm mt-2 text-gray-300">新しいWebアプリを制作中です</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. コンタクト */}
      <section id="contact" className="py-20 md:py-32 text-center bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 tracking-tight">Contact</h3>
          <p className="text-lg md:text-xl text-gray-500 mb-10 md:mb-16 leading-relaxed max-w-2xl mx-auto">
            ホームページ制作等のご依頼や、技術的なご相談など、<br className="hidden md:block" />
            下記SNSのDMまたはメールより、お気軽にお声がけください。
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <a href="https://x.com/あなたのID" target="_blank" rel="noopener noreferrer" 
               className="w-full max-w-[280px] px-6 py-4 md:px-8 md:py-5 rounded-full bg-gray-900 text-white font-bold text-lg md:text-xl hover:bg-black hover:-translate-y-1 transition-all shadow-xl shadow-gray-100 flex items-center justify-center gap-3">
              <span>𝕏</span> X (Twitter)
            </a>
            <a href="https://instagram.com/あなたのID" target="_blank" rel="noopener noreferrer" 
               className="w-full max-w-[280px] px-6 py-4 md:px-8 md:py-5 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white font-bold text-lg md:text-xl hover:opacity-90 hover:-translate-y-1 transition-all shadow-xl shadow-red-100 flex items-center justify-center gap-3">
              <span>📸</span> Instagram
            </a>
            <a href="mailto:your-email@example.com" 
               className="w-full max-w-[280px] px-6 py-4 md:px-8 md:py-5 rounded-full bg-white border-2 border-gray-200 text-gray-700 font-bold text-lg md:text-xl hover:bg-gray-50 hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
              <span>✉️</span> Email
            </a>
          </div>
        </div>
      </section>
      
      <footer className="py-10 md:py-12 bg-gray-900 text-gray-500 text-center text-sm md:text-base border-t border-gray-800">
        &copy; 2026 yuuka_kudo. All rights reserved.
      </footer>
    </main>
  );
}