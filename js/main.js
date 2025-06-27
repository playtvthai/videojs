// สมมติว่ามีไฟล์ js/videos.json เก็บข้อมูล playlist
fetch('js/videos.json')
  .then(res => res.json())
  .then(videos => {
    const playlistDiv = document.getElementById('playlist');
    playlistDiv.innerHTML = '';
    videos.forEach(video => {
      const item = document.createElement('div');
      item.className = 'playlist-item';
      item.innerHTML = `
        <img src="${video.thumbnail}" class="playlist-thumbnail" alt="${video.name}">
        <div class="playlist-name">${video.name}</div>
      `;
      item.onclick = () => {
        document.getElementById('videosrc').src = video.videoUrl;
        document.getElementById('videoPlayer').load();
        document.getElementById('selectedFile').textContent = video.name;
      };
      playlistDiv.appendChild(item);
    });
  });
