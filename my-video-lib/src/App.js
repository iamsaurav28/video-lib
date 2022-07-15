import "./styles.css";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import { VideoPlayer } from "./Components/VideoPlayer";
import { Container } from "./Components/Container";
import { WatchLater } from "./Components/WatchLater";
import { LikedVideos } from "./Components/LikedVideo";
import { History } from "./Components/History";


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/likedVideos" element={<LikedVideos />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
}
