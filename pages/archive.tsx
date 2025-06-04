import Head from "next/head";

export default function Archive() {
  return (
    <>
      <Head>
        <title>Shibora Archive</title>
      </Head>
      <main className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">📦 Shibora Project Archive</h1>
        <p className="text-gray-400 mb-8">ศูนย์รวมไฟล์สำคัญทั้งหมดของ SHIBORA AI</p>

        <ul className="space-y-4 text-lg">
          <li>
            🔗 <a href="https://github.com/inner-shibora/project-archive" className="text-blue-400 hover:underline" target="_blank">GitHub: Project Archive</a>
          </li>
          <li>
            ☁️ <a href="https://drive.google.com/drive/folders/1H6KJgTZUu1LgVwYwXArlRR8pL4XlK4TA?usp=share_link" className="text-blue-400 hover:underline" target="_blank">Google Drive: Archive Folder</a>
          </li>
          <li>
            📄 <a href="/docs/Shibora_Project_Plan.pdf" className="text-blue-400 hover:underline" target="_blank">ดาวน์โหลดแผนงาน Archive (.PDF)</a>
          </li>
        </ul>
      </main>
    </>
  );
}
