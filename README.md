# YT-Local Auto Dashboard

A modern, responsive dashboard application for managing and auto-uploading videos to YouTube. Built with React and Vite, featuring a clean UI with Tailwind CSS.

## 🚀 Features

- **Video Management Dashboard**: Intuitive interface for managing video uploads
- **Upload Queue System**: Queue videos for automatic upload to YouTube
- **Real-time Status Tracking**: Monitor upload progress with status indicators
- **Video Metadata Editor**: Add titles, descriptions, and tags for your videos
- **Folder Watch Path**: Configure local folder paths to watch for new videos
- **Activity History**: View recent upload activity and status

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **ESLint** - Code linting

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/prudhvi-nelaturi/yt-dashboard.git
cd yt-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## 📁 Project Structure

```
yt-dashboard/
├── src/
│   ├── App.jsx          # Main dashboard component
│   ├── App.css          # Component styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🎨 Features Overview

### Dashboard
- Clean, modern sidebar navigation
- Video upload area with drag-and-drop support
- Form inputs for video metadata (title, description, tags)
- Character counter for descriptions (5000 character limit)

### Status Tracking
- Real-time upload status indicators
- Status types: Uploading, Pending, Finished
- Visual icons for each status state

### Settings
- Configurable watch folder path
- Easy path modification through settings button

## 🔮 Future Enhancements

- [ ] YouTube API integration for actual uploads
- [ ] File drag-and-drop functionality
- [ ] Video preview and thumbnail generation
- [ ] Scheduled uploads
- [ ] Multiple YouTube account support
- [ ] Upload progress tracking
- [ ] Error handling and retry mechanisms
- [ ] Video metadata templates
- [ ] Bulk upload support

## 📝 License

This project is private and proprietary.

## 👤 Author

**Prudhvi Nelaturi**
- GitHub: [@prudhvi-nelaturi](https://github.com/prudhvi-nelaturi)

## 🤝 Contributing

This is a personal project. Contributions and suggestions are welcome!

---

Made with ❤️ using React and Vite
