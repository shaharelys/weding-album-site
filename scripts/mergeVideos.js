/**
 * mergeVideos.js
 * 
 * A utility script to concatenate multiple videos into a single video file
 * using FFmpeg. This script is designed to combine the hero videos in the
 * wedding-albums project.
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Path to the ffmpeg executable (requires ffmpeg to be installed on your system)
const ffmpegPath = 'ffmpeg';

// Configure paths - fixed to match the correct project structure
const publicDir = path.join(__dirname, '../public');
const inputDir = path.join(publicDir, 'images/Video Premium Album_files');
const outputDir = path.join(inputDir);

// Video files to concatenate - including the new "happy_couple_balcony" video
const videos = [
  path.join(inputDir, 'Nostalgic Wedding Album.mp4'),
  path.join(inputDir, 'couple.mp4'),
  path.join(inputDir, 'happy_couple_balcony.mp4')
];

// Output file name
const outputFile = path.join(outputDir, 'combined_hero_video.mp4');

// Create a temporary file list for FFmpeg
const tempFilePath = path.join(__dirname, 'temp_file_list.txt');
const fileContent = videos.map(video => `file '${video}'`).join('\n');

fs.writeFileSync(tempFilePath, fileContent);

console.log('Starting video merge process...');
console.log(`Input videos: ${videos.join(', ')}`);
console.log(`Output video: ${outputFile}`);

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
    console.log('You can now use this combined video file in your website.');
  } else {
    console.error(`FFmpeg process exited with code ${code}`);
  }
});