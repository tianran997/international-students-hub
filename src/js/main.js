const apiUrl = 'https://script.google.com/macros/s/AKfycbxCvCfgPZV63JD6fRgpJqnfUMKytcgvXz12a7WKVAFiXZq2ZD9xDngglNNqOdd3Up9ybg/exec'; // 替换为你的API地址

function formatDate(isoString) {
    if (!isoString) return '';
    const date = new Date(isoString);
    // 输出为 YYYY-MM-DD
    return date.toLocaleDateString('en-CA'); // 或 'zh-CN' 显示为 2025/8/5
}

fetch(apiUrl)
.then(res => res.json())
.then(data => {
    const list = document.getElementById('stories-list');
    if (!data.length) {
        list.innerHTML = '<p class="text-muted">No stories yet.</p>';
        return;
    }
    list.innerHTML = data.map(story => `
        <div style="border-left:4px solid #4b2e83;padding-left:16px;margin-bottom:24px;">
            <div style="color:#22223b;margin:8px 0 0 0;">${story['Share Your Story'] || ''}</div>
            <div style="font-size:0.9em;color:#888;">
                ${formatDate(story['Timestamp'])}
            </div>
        </div>
    `).join('');
});