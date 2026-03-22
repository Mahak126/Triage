import fs from 'fs';
import path from 'path';

const SRC_DIR = 'C:\\Users\\alank\\OneDrive\\Desktop\\Om Codes\\Triage\\src';

const replacements = {
  "'#e0e5ec'": "'var(--bg)'",
  '"#e0e5ec"': '"var(--bg)"',
  '#e0e5ec': 'var(--bg)',
  "'#2d4059'": "'var(--text-primary)'",
  '"#2d4059"': '"var(--text-primary)"',
  '#2d4059': 'var(--text-primary)',
  "'#8fa1b3'": "'var(--text-secondary)'",
  '"#8fa1b3"': '"var(--text-secondary)"',
  '#8fa1b3': 'var(--text-secondary)',
  '#a3b1c6': 'var(--shadow-dark)',
  '#ffffff': 'var(--shadow-light)',
  "'#ff6b6b'": "'var(--red-alert)'",
  '"#ff6b6b"': '"var(--red-alert)"',
  '#ff6b6b': 'var(--red-alert)',
  "'#20c997'": "'var(--green-alert)'",
  '"#20c997"': '"var(--green-alert)"',
  '#20c997': 'var(--green-alert)',
};

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      
      // Careful with replacement to avoid double replacing if var() already there
      for (const [hex, cssVar] of Object.entries(replacements)) {
        // Use a regex to make sure we do global replacement, ignoring case
        const regex = new RegExp(hex, 'gi');
        if (regex.test(content)) {
          content = content.replace(regex, cssVar);
          changed = true;
        }
      }

      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated', fullPath);
      }
    }
  }
}

processDirectory(SRC_DIR);
console.log('Done!');
