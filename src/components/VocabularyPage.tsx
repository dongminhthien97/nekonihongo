import { useState } from "react";
import { Volume2 } from "lucide-react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface VocabularyPageProps {
  onNavigate: (page: string) => void;
}

const vocabularyData = [
  { japanese: "猫", romaji: "neko", vietnamese: "Con mèo", category: "動物" },
  { japanese: "本", romaji: "hon", vietnamese: "Quyển sách", category: "学校" },
  { japanese: "学校", romaji: "gakkou", vietnamese: "Trường học", category: "学校" },
  { japanese: "先生", romaji: "sensei", vietnamese: "Giáo viên", category: "人" },
  { japanese: "友達", romaji: "tomodachi", vietnamese: "Bạn bè", category: "人" },
  { japanese: "食べる", romaji: "taberu", vietnamese: "Ăn", category: "動詞" },
  { japanese: "飲む", romaji: "nomu", vietnamese: "Uống", category: "動詞" },
  { japanese: "行く", romaji: "iku", vietnamese: "Đi", category: "動詞" },
  { japanese: "来る", romaji: "kuru", vietnamese: "Đến", category: "動詞" },
  { japanese: "見る", romaji: "miru", vietnamese: "Nhìn", category: "動詞" },
  { japanese: "聞く", romaji: "kiku", vietnamese: "Nghe", category: "動詞" },
  { japanese: "話す", romaji: "hanasu", vietnamese: "Nói", category: "動詞" },
];

export function VocabularyPage({ onNavigate }: VocabularyPageProps) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlaySound = (index: number) => {
    setPlayingIndex(index);
    setTimeout(() => setPlayingIndex(null), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF6E9] via-[#FFC7EA]/20 to-[#C7FFF1]/30">
      {/* Navigation */}
      <Navigation currentPage="vocabulary" onNavigate={onNavigate} />

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-gray-800">
            Học Từ Vựng Tiếng Nhật 📚
          </h2>
          <p className="text-xl text-gray-600">
            Nhấn vào nút loa để nghe phát âm nhé! 🔊
          </p>
        </div>

        {/* Vocabulary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {vocabularyData.map((word, index) => (
            <div
              key={index}
              className="group bg-white rounded-[24px] p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col space-y-4">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#FFC7EA]/30 to-[#D8C8FF]/30 rounded-full text-sm text-gray-700">
                    {word.category}
                  </span>
                  <span className="text-2xl group-hover:animate-wiggle">🐾</span>
                </div>

                {/* Japanese Word */}
                <div className="text-center py-4">
                  <div className="text-5xl mb-2 text-gray-800">{word.japanese}</div>
                  <div className="text-lg text-gray-500">{word.romaji}</div>
                </div>

                {/* Vietnamese Meaning */}
                <div className="text-center py-2 bg-gradient-to-r from-[#FFF6E9] to-[#C7FFF1]/20 rounded-[16px]">
                  <p className="text-xl text-gray-700">{word.vietnamese}</p>
                </div>

                {/* Play Sound Button */}
                <button
                  onClick={() => handlePlaySound(index)}
                  className={`flex items-center justify-center gap-2 py-3 rounded-[16px] transition-all duration-300 ${
                    playingIndex === index
                      ? "bg-gradient-to-r from-[#FFC7EA] to-[#D8C8FF] text-white scale-110"
                      : "bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-[#FFC7EA]/50 hover:to-[#D8C8FF]/50"
                  }`}
                >
                  <Volume2
                    className={`w-5 h-5 ${playingIndex === index ? "animate-shake" : ""}`}
                  />
                  <span>Phát âm</span>
                  <span className={`${playingIndex === index ? "animate-bounce-cat" : ""}`}>
                    {playingIndex === index ? "😸" : "🔊"}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-16 space-y-4">
          <div className="flex justify-center gap-4">
            <span className="text-3xl animate-float">🌸</span>
            <span className="text-3xl animate-float delay-1">⭐</span>
            <span className="text-3xl animate-float delay-2">🎀</span>
          </div>
          <p className="text-lg text-gray-600">
            Tuyệt vời! Tiếp tục học thêm nhé! 💪✨
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px); }
          75% { transform: translateX(3px); }
        }

        @keyframes bounce-cat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-5px) scale(1.2); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-wiggle {
          animation: wiggle 0.5s ease-in-out;
        }

        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }

        .animate-bounce-cat {
          animation: bounce-cat 0.5s ease-in-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-1 {
          animation-delay: 0.3s;
        }

        .delay-2 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
}