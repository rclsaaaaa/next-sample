import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  // プログラミング言語のデータ
  const languages = [
    { name: "Python", overview: "汎用性が高く、自動化やデータ分析に最適", difficulty: "易しい" },
    { name: "JavaScript", overview: "フロントエンドとバックエンド両方で不可欠なWeb開発言語", difficulty: "中程度" },
    { name: "Java", overview: "エンタープライズアプリケーションやAndroid開発で広く使用", difficulty: "中程度" },
    { name: "C++", overview: "システムプログラミングやゲーム開発に強力な言語", difficulty: "難しい" },
    { name: "Go", overview: "並行プログラミングやクラウドサービスに効率的", difficulty: "中程度" },
    { name: "Rust", overview: "安全性とパフォーマンスに焦点を当てた、システムプログラミングに適した言語", difficulty: "難しい" },
  ];

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
    <div className="flex flex-col min-h-screen p-8 font-sans">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">システムエンジニアのためのプログラミング言語</CardTitle>
          <CardDescription className="text-center">学習すべき重要な言語のリスト</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">言語</TableHead>
                <TableHead>概要</TableHead>
                <TableHead className="w-[150px]">学習難易度</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {languages.map((lang, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{lang.name}</TableCell>
                  <TableCell>{lang.overview}</TableCell>
                  <TableCell>
                    <Badge className={`${getDifficultyColor(lang.difficulty)}`}>
                      {lang.difficulty}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <footer className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© 2024 システムエンジニアリング言語ガイド</p>
      </footer>
    </div>
  );
}