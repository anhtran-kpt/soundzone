import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Dashboard Cards */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Card {item}</h2>
                <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-500">Nội dung</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
