
const NDD = {
    load(m) {
        const s = document.getElementById('stage');
        if(m === 'clinic') {
            s.innerHTML = '<div class="hero-card"><h2>🏥 العيادة الذكية</h2><p>العصب الطبي نشط. أدخل بيانات التشخيص:</p><textarea style="width:100%;height:150px;background:#000;color:#0f0;border:1px solid var(--gold);padding:15px;border-radius:10px;"></textarea><br><button style="background:var(--gold);padding:10px 25px;border:none;border-radius:5px;font-weight:bold;cursor:pointer;margin-top:15px;">بدء تحليل العصب</button></div>';
        } else if(m === 'pages') {
            let g = '<div class="grid">';
            for(let i=1; i<=151; i++) g += `<div class="node">وحدة ${i}</div>`;
            s.innerHTML = '<div class="hero-card"><h2>📑 الـ 151 وحدة السيادية</h2>' + g + '</div></div>';
        } else if(m === 'finance') {
            s.innerHTML = '<div class="hero-card"><h2>💰 مركز الاستثمار CVIP</h2><p>إدارة المحافظ والسيولة اللانهائية. الوحدات الـ 151 تقوم بالمعالجة الآن...</p><button style="background:var(--gold);padding:10px 25px;border:none;border-radius:5px;font-weight:bold;cursor:pointer;">توليد كشف الحساب الإمبراطوري</button></div>';
        } else { location.reload(); }
    }
};
