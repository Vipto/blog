const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('==================================================');
console.log('   VIPTO BLOG — BUILD & DEPENDENCY RESOLVER');
console.log('==================================================');

function run(cmd) {
  console.log(`> ${cmd}`);
  return execSync(cmd, { stdio: 'inherit' });
}

// Step 1: Clean lock/partial modules safely
console.log('\n[1/4] Checking and clearing node_modules if needed...');
if (fs.existsSync('node_modules')) {
  try {
    // Attempt graceful install first with prefer-offline
    console.log('Trying npm install with --prefer-offline --no-audit --no-fund...');
    run('npm.cmd install --prefer-offline --no-audit --no-fund');
    console.log('✓ npm install succeeded!');
  } catch (e) {
    console.log('Retrying with full npm install...');
    run('npm.cmd install --no-audit --no-fund');
  }
} else {
  run('npm.cmd install --prefer-offline --no-audit --no-fund');
}

// Step 2: Verify Key Packages
console.log('\n[2/4] Verifying packages...');
try {
  const nextPkg = require('next/package.json');
  console.log('✓ Next.js:', nextPkg.version);
  const reactPkg = require('react/package.json');
  console.log('✓ React:', reactPkg.version);
  const lucidePkg = require('lucide-react/package.json');
  console.log('✓ Lucide React:', lucidePkg.version);
} catch (err) {
  console.error('Package verification error:', err.message);
}

// Step 3: Run Type Check & Next.js Build
console.log('\n[3/4] Building Next.js application...');
try {
  run('npm.cmd run build');
  console.log('\n==================================================');
  console.log('🎉 SUCCESS: VIPTO WEBSITE BUILT FLAWLESSLY!');
  console.log('==================================================');
} catch (err) {
  console.error('Build failure:', err.message);
  process.exit(1);
}
