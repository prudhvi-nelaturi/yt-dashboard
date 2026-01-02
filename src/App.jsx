import React, { useState } from 'react';
import { Upload, Settings, List, CheckCircle, Clock, Loader2, FileVideo } from 'lucide-react';

export default function Dashboard() {
  const [desc, setDesc] = useState("");
  const [path, setPath] = useState("/Users/prudhvi/Videos");
  const [selectedFile, setSelectedFile] = useState(null); // New state for the file

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      setSelectedFile(file);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) setSelectedFile(file);
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar - Same as before */}
      <aside className="w-64 bg-slate-900 text-white p-6 flex flex-col gap-8">
        <h1 className="text-xl font-bold tracking-tight">YT-Local <span className="text-red-500">Auto</span></h1>
        <nav className="flex flex-col gap-4">
          <button className="flex items-center gap-3 text-blue-400 font-medium"><Upload size={20}/> Dashboard</button>
          <button className="flex items-center gap-3 text-slate-400 hover:text-white transition"><List size={20}/> History</button>
          <button className="flex items-center gap-3 text-slate-400 hover:text-white transition"><Settings size={20}/> Settings</button>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-10">
        <header className="mb-8 flex justify-between items-center">
          <h2 className="text-3xl font-bold">Video Manager</h2>
          <div className="text-sm bg-white border px-4 py-2 rounded-lg shadow-sm flex items-center gap-2">
            Watching: <code className="text-blue-600 font-mono">{path}</code>
            <button onClick={() => setPath(prompt("New Path:", path))}><Settings size={14}/></button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 space-y-6">
            
            {/* Drag & Drop Area */}
            <div 
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleFileDrop}
              className={`bg-white p-8 rounded-2xl border-2 border-dashed transition flex flex-col items-center justify-center h-48 cursor-pointer 
                ${selectedFile ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 hover:border-blue-400'}`}
            >
              <input type="file" id="fileInput" hidden accept="video/*" onChange={handleFileSelect} />
              <label htmlFor="fileInput" className="flex flex-col items-center cursor-pointer">
                {selectedFile ? (
                  <>
                    <FileVideo className="text-emerald-500 mb-2" size={40} />
                    <p className="text-emerald-700 font-medium">{selectedFile.name}</p>
                    <p className="text-xs text-emerald-600">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </>
                ) : (
                  <>
                    <Upload className="text-slate-400 mb-2" size={40} />
                    <p className="text-slate-500">Drag videos or <span className="text-blue-600 font-semibold">browse</span></p>
                  </>
                )}
              </label>
            </div>

            {/* Form Fields */}
            <div className="bg-white p-6 rounded-xl shadow-sm border space-y-4">
              <input type="text" placeholder="Video Title" className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              <div className="relative">
                <textarea 
                  placeholder="Description" 
                  maxLength={5000}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full p-3 border rounded-lg h-32 outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute bottom-3 right-3 text-xs text-slate-400">{desc.length}/5000</span>
              </div>
              <input type="text" placeholder="Tags" className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition disabled:bg-slate-300" disabled={!selectedFile}>
                Queue for Upload
              </button>
            </div>
          </section>

          {/* Status Table */}
          <section className="bg-white p-6 rounded-xl shadow-sm border h-fit">
            <h3 className="font-bold mb-4 flex items-center gap-2"><Clock size={18}/> Activity</h3>
            <div className="space-y-4">
              <StatusRow title="Project_Alpha.mp4" status="Uploading" icon={<Loader2 className="animate-spin text-blue-500"/>} />
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