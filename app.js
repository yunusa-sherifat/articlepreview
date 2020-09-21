let parent = document.getElementById('shareCon');
let svg = document.getElementById('svg')
const showCase = document.getElementById('showCase');
showCase.addEventListener('click', function (e) {
    parent.style.display = 'flex';
})
svg.addEventListener('click', function (e) {
    parent.style.display = 'none';
})
