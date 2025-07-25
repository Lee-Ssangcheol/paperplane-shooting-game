const fs = require('fs');
const path = require('path');

// 콘솔 인코딩을 UTF-8로 설정
if (process.platform === 'win32') {
    require('child_process').execSync('chcp 65001', { stdio: 'ignore' });
}

// package.json 파일 경로
const packagePath = path.join(__dirname, '..', 'package.json');

try {
    // package.json 파일 읽기
    const packageData = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    // 현재 날짜와 시간 생성
    const now = new Date();
    const date = now.getFullYear() + 
                 String(now.getMonth() + 1).padStart(2, '0') + 
                 String(now.getDate()).padStart(2, '0');
    const time = String(now.getHours()).padStart(2, '0') + 
                 String(now.getMinutes()).padStart(2, '0');
    
    // 새 버전 생성
    const newVersion = `1.0.0-${date}-${time}`;
    
    // 버전 업데이트
    packageData.version = newVersion;
    
    // package.json 파일에 저장
    fs.writeFileSync(packagePath, JSON.stringify(packageData, null, 2));
    
    console.log(`✅ Version updated to: ${newVersion}`);
    console.log(`📅 Date: ${date}`);
    console.log(`⏰ Time: ${time}`);
    
} catch (error) {
    console.error('❌ Error updating version:', error.message);
    process.exit(1);
} 