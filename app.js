let parent = document.getElementById('shareCon');
let svg = document.getElementById('svg')
const showCase = document.getElementById('showCase');
const social = document.getElementById('social');
const showCaseDesk = document.getElementById('showCaseDesk');
showCase.addEventListener('click', function (e) {
    parent.style.display = 'flex';
})
svg.addEventListener('click', function (e) {
    parent.style.display = 'none';
})

showCaseDesk.addEventListener('mouseover', function (e) {
    social.style.display = 'flex';
})
social.addEventListener('mouseover', function (e) {
    social.style.display = 'flex';
})
showCaseDesk.addEventListener('mouseout', function (e) {
    social.style.display = 'none';
})
social.addEventListener('mouseout', function (e) {
    social.style.display = 'none';
})