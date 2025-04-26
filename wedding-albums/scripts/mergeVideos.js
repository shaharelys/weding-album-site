/**
 * mergeVideos.js
 * 
 * A utility script to concatenate multiple videos into a single video file
 * using FFmpeg. This script is designed to combine the hero videos in the
 * wedding-albums project.
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Define the paths
const projectRoot = path.resolve(__dirname, '..');
const videosDir = path.join(projectRoot, 'public', 'images', 'Video Premium Album_files');
const outputFile = path.join(videosDir, 'combined_hero_video.mp4');

// List of videos to merge - include the new happy_couple_balcony.mp4
const videoFiles = [
  'Nostalgic Wedding Album.mp4',
  'couple.mp4',
  'happy_couple_balcony.mp4',
  'video_men.mp4'
];

// Create a temporary file with the list of videos
const tempFilePath = path.join(__dirname, 'temp_file_list.txt');
let fileContent = '';

// Check if the videos exist and create the file content
videoFiles.forEach(video => {
  const videoPath = path.join(videosDir, video);
  if (fs.existsSync(videoPath)) {
    fileContent += `file '${videoPath}'\n`;
  } else {
    console.error(`Warning: Video file not found: ${videoPath}`);
  }
});

// Write the file list
fs.writeFileSync(tempFilePath, fileContent);

console.log('Merging videos...');
console.log('Files to merge:', fileContent);

try {
  // Run FFmpeg command to concatenate the videos
  const command = `ffmpeg -y -f concat -safe 0 -i "${tempFilePath}" -c:v copy -c:a aac "${outputFile}"`;
  console.log(`Executing command: ${command}`);
  execSync(command, { stdio: 'inherit' });
  console.log(`Videos successfully merged to ${outputFile}`);
} catch (error) {
  console.error('Error during video merging:', error);
} finally {
  // Clean up the temporary file
  if (fs.existsSync(tempFilePath)) {
    fs.unlinkSync(tempFilePath);
    console.log('Temporary file list removed');
  }
}