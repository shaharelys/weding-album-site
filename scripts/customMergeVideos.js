/**
 * customMergeVideos.js
 * 
 * A utility script to concatenate selected videos into a single video file.
 * You can customize which videos to include by editing the videoSelection array.
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Path to the ffmpeg executable (from ffmpeg-static package)
let ffmpegPath;
try {
  ffmpegPath = require('ffmpeg-static');
} catch (err) {
  console.error('Please install ffmpeg-static package: npm install ffmpeg-static --save-dev');
  process.exit(1);
}

// Define the paths
const projectRoot = path.resolve(__dirname, '../wedding-albums');
const videosDir = path.join(projectRoot, 'public', 'images', 'Video Premium Album_files');
const outputFile = path.join(videosDir, 'combined_hero_video.mp4');

// Available videos - order matters! Videos will be concatenated in this order
const availableVideos = [
  'Nostalgic Wedding Album.mp4',
  'couple.mp4',
  'happy_couple_balcony.mp4'
];

// CUSTOMIZE HERE: Set to true for videos you want to include, false for videos to exclude
const videoSelection = {
  'Nostalgic Wedding Album.mp4': true,  // Set to true to include, false to exclude
  'couple.mp4': true,                   // Set to true to include, false to exclude
  'happy_couple_balcony.mp4': true      // Set to true to include, false to exclude
};

// Filter videos based on selection
const selectedVideos = availableVideos.filter(video => videoSelection[video]);

// Create a temporary file with the list of videos
const tempFilePath = path.join(__dirname, 'temp_file_list.txt');
let fileContent = '';

// Check if the videos exist and create the file content
console.log('Selected videos to merge:');
selectedVideos.forEach((video, index) => {
  const videoPath = path.join(videosDir, video);
  if (fs.existsSync(videoPath)) {
    fileContent += `file '${videoPath}'\n`;
    console.log(` ${index + 1}. ${video}`);  // Numbered list to clearly show order
  } else {
    console.error(`Warning: Selected video file not found: ${videoPath}`);
  }
});

if (selectedVideos.length === 0) {
  console.error('Error: No videos selected for merging. Please update the videoSelection object.');
  process.exit(1);
}

// Write the file list
fs.writeFileSync(tempFilePath, fileContent);

console.log(`\nMerging ${selectedVideos.length} videos...`);
console.log(`Output will be saved to: ${outputFile}`);

// Execute FFmpeg command to concatenate videos
const ffmpeg = spawn(ffmpegPath, [
  '-f', 'concat',
  '-safe', '0',
  '-i', tempFilePath,
  '-c', 'copy',
  '-y', // Overwrite output file if it exists
  outputFile
]);

// Handle FFmpeg process events
ffmpeg.stdout.on('data', data => {
  console.log(`stdout: ${data}`);
});

ffmpeg.stderr.on('data', data => {
  console.error(`${data}`);
});

ffmpeg.on('close', code => {
  // Clean up the temporary file
  fs.unlinkSync(tempFilePath);
  
  if (code === 0) {
    console.log(`Success! Videos have been merged into: ${outputFile}`);
    console.log('You can now update your code to use this single video file.');
  } else {
    console.error(`FFmpeg process exited with code ${code}`);
  }
});