document.getElementById('diceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const type = parseInt(document.getElementById('diceType').value, 10);
    const count = parseInt(document.getElementById('diceCount').value, 10);
    if (isNaN(count) || count < 1 || count > 100) {
        document.getElementById('resultArea').innerHTML = '<div class="alart-danger">個数は1～100で指定してください</div>';
        return;
    }
    let results = [];
    let total = 0;
    for (let i = 0; i < count; i++) {
        const roll = Math.floor(Math.random() * type) + 1;
        results.push(roll);
        total += roll;
    }
    let html = `<h3>結果</h3><ul>`;
    results.forEach((r, i) => {
        html += `<li>${i + 1}個目: ${r}</li>`;
    });
    html += `</ul><strong>合計: ${total}</strong>`;
    document.getElementById('resultArea').innerHTML = html;
});