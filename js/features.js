    document.getElementById('btn-blog')
    .addEventListener('click', function () {
        window.location.href = '/blog.html';
        console.log('clicked blog')
    });    

document.getElementById('btn-show-donation-section')
    .addEventListener('click', function () {
        document.getElementById('btn-show-donation-section').classList.add('bg-[#B4F461]');
        document.getElementById('btn-show-donation-section').classList.remove('text-[rgba(17,17,17,0.7)]');
        document.getElementById('btn-show-donation-section').classList.add('text-[#111111]');
        document.getElementById('btn-show-history-section').classList.remove('bg-[#B4F461]');
        document.getElementById('btn-show-history-section').classList.remove('text-[#111111]');
        document.getElementById('btn-show-history-section').classList.add('text-[rgba(17,17,17,0.7)]');
        showSectionById('donation-section');
    });

document.getElementById('btn-show-history-section')
    .addEventListener('click', function () {
        document.getElementById('btn-show-history-section').classList.add('bg-[#B4F461]');
        document.getElementById('btn-show-history-section').classList.remove('text-[rgba(17,17,17,0.7)]');
        document.getElementById('btn-show-history-section').classList.add('text-[#111111]');
        document.getElementById('btn-show-donation-section').classList.remove('bg-[#B4F461]');
        document.getElementById('btn-show-donation-section').classList.remove('text-[#111111]');
        document.getElementById('btn-show-donation-section').classList.add('text-[rgba(17,17,17,0.7)]');
        showSectionById('history-section');
    });

