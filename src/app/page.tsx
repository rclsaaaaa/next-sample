'use client'

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

// 技術スタックのデータ
const techStack = {
  languages: [
    { name: "Python", overview: "汎用性が高く、自動化やデータ分析に最適", difficulty: "易しい" },
    { name: "JavaScript", overview: "フロントエンドとバックエンド両方で不可欠なWeb開発言語", difficulty: "中程度" },
    { name: "Java", overview: "エンタープライズアプリケーションやAndroid開発で広く使用", difficulty: "中程度" },
    { name: "C++", overview: "システムプログラミングやゲーム開発に強力な言語", difficulty: "難しい" },
    { name: "Go", overview: "並行プログラミングやクラウドサービスに効率的", difficulty: "中程度" },
    { name: "Rust", overview: "安全性とパフォーマンスに焦点を当てた、システムプログラミングに適した言語", difficulty: "難しい" },
  ],
  libraries: [
    { name: "React", overview: "ユーザーインターフェース構築のためのJavaScriptライブラリ", difficulty: "中程度" },
    { name: "TensorFlow", overview: "機械学習と深層学習のためのオープンソースライブラリ", difficulty: "難しい" },
    { name: "NumPy", overview: "Pythonの科学計算ライブラリ", difficulty: "中程度" },
  ],
  frameworks: [
    { name: "Django", overview: "Pythonの高水準Webフレームワーク", difficulty: "中程度" },
    { name: "Spring Boot", overview: "Javaベースのアプリケーション開発を簡素化するフレームワーク", difficulty: "中程度" },
    { name: "Vue.js", overview: "プログレッシブなJavaScriptフレームワーク", difficulty: "中程度" },
  ]
}

export default function ModernTechStackGuide() {
  const [selectedCategory, setSelectedCategory] = useState("languages")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 難易度に応じたバッジの色を決定する関数
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "易しい":
        return "bg-green-500";
      case "中程度":
        return "bg-yellow-500";
      case "難しい":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* ヘッダー */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Tech Stack Guide</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle menu"
          >
            {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      <div className="flex flex-1 relative">
        {/* サイドバー */}
        <aside
          className={`fixed md:absolute top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } z-20`}
        >
          <nav className="p-4 pt-20">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">カテゴリ</h2>
            <div className="space-y-2">
              {Object.keys(techStack).map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => {
                    setSelectedCategory(category)
                    if (isMobile) setIsSidebarOpen(false)
                  }}
                  className="w-full justify-start"
                >
                  {category === "languages" ? "プログラミング言語" :
                    category === "libraries" ? "ライブラリ" : "フレームワーク"}
                </Button>
              ))}
            </div>
          </nav>
        </aside>


        {/* オーバーレイ */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* メインコンテンツ */}
        <main className="flex-1 p-4 md:p-8 pt-16">
          <Card className="w-full bg-white dark:bg-gray-800 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-gray-800 dark:text-white">
                システムエンジニアのための技術スタック
              </CardTitle>
              <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                学習すべき重要な{selectedCategory === "languages" ? "言語" : selectedCategory === "libraries" ? "ライブラリ" : "フレームワーク"}のリスト
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">名前</TableHead>
                    <TableHead>概要</TableHead>
                    <TableHead className="w-[150px]">学習難易度</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {techStack[selectedCategory as keyof typeof techStack].map((tech, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{tech.name}</TableCell>
                      <TableCell>{tech.overview}</TableCell>
                      <TableCell>
                        <Badge className={`${getDifficultyColor(tech.difficulty)}`}>
                          {tech.difficulty}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>

      <footer className="bg-white dark:bg-gray-800 shadow-md mt-8 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© 2024 システムエンジニアリング技術スタックガイド</p>
        </div>
      </footer>
    </div>
  );
}