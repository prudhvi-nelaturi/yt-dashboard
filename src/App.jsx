import React, { useState } from 'react';
import { Upload, Settings, List, CheckCircle, Clock, Loader2 } from 'lucide-react';

export default function Dashboard() {
  const [desc, setDesc] = useState("");
  const [path, setPath] = useState("C:/Videos/Uploads");

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6 flex flex-col gap-8">
        <h1 className="text-xl font-bold tracking-tight">YT-Local <span className="text-red-500">Auto</span></h1>
        <nav className="flex flex-col gap-4">
          <button className="flex items-center gap-3 text-blue-400 font-medium"><Upload size={20}/> Dashboard</button>
          <button className="flex items-center gap-3 text-slate-400 hover:text-white transition"><List size={20}/> History</button>
          <button className="flex items-center gap-3 text-slate-400 hover:text-white transition"><Settings size={20}/> Settings</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-10">
      <header className="mb-8 flex justify-between items-center">
  <h2 className="text-3xl font-bold">Video Manager</h2>
  <div className="flex flex-col items-end gap-2">
    <div className="text-sm bg-white border px-4 py-2 rounded-lg shadow-sm flex items-center gap-3">
      Watching: <code className="text-blue-600 font-mono font-bold">{path}</code>
      <button 
        onClick={() => {
          const newPath = prompt("Enter local folder path to watch:", path);
          if (newPath) setPath(newPath);
        }}
        className="p-1 hover:bg-slate-100 rounded transition text-slate-400 hover:text-blue-600"
        title="Change Watch Path"
      >
        <Settings size={14} />
      </button>
    </div>
  </div>
</header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload & Form Section */}
          <section className="lg:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-2xl border-2 border-dashed border-slate-200 hover:border-blue-400 transition flex flex-col items-center justify-center h-48 group cursor-pointer">
              <Upload className="text-slate-400 group-hover:text-blue-500 mb-2" size={40} />
              <p className="text-slate-500">Drag and drop video files or <span className="text-blue-600 font-semibold">browse</span></p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
              <input type="text" placeholder="Video Title" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              <div className="relative">
                <textarea 
                  placeholder="Description" 
                  maxLength={5000}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <span className="absolute bottom-3 right-3 text-xs text-slate-400">{desc.length}/5000</span>
              </div>
              <input type="text" placeholder="Tags (comma separated)" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">Queue for Upload</button>
            </div>
          </section>

          {/* Status Table */}
          <section className="bg-white p-6 rounded-xl shadow-sm border h-fit">
            <h3 className="font-bold mb-4 flex items-center gap-2"><Clock size={18}/> Recent Activity</h3>
            <div className="space-y-4">
              <StatusRow title="Project_Alpha.mp4" status="Uploading" icon={<Loader2 className="animate-spin text-blue-500"/>} />
              <StatusRow title="Dev_Vlog_01.mp4" status="Pending" icon={<Clock className="text-amber-500"/>} />
              <StatusRow title="Java_Tutorial.mp4" status="Finished" icon={<CheckCircle className="text-emerald-500"/>} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function StatusRow({ title, status, icon }) {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
      <div className="truncate pr-4">
        <p className="text-sm font-medium truncate">{title}</p>
        <p className="text-xs text-slate-500">{status}</p>
      </div>
      {icon}
    </div>
  );
}