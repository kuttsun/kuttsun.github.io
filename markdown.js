var mdEls = document.querySelectorAll('.markdown');
for(var i in mdEls){
    var mdEl = mdEls[i];
    var converted = document.createElement('div');
    converted.className = 'marked';
    converted.innerHTML = marked(mdEl.value);
    mdEl.parentNode.replaceChild(converted, mdEl);
}
