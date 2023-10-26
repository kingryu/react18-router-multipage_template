export function newEl(tag, className, parent) {
  let el = document.createElement(tag)
  el.className = className
  if(parent) parent.appendChild(el)
  return el
}

// 新建一个div
export function newDiv(className, parent, html) {
  let el = newEl('div',className,parent)
  if(html) el.innerHTML = html
  return el
}

export function showToast(content,time=2000){
  let m = newDiv('toast', document.body);
  m.innerHTML = content;
  m.style.cssText = "max-width:70vw;min-width:50vw;padding:20px 30px;color:white;line-height:1.5em;text-align:center;border-radius:14px;position: fixed;top: 50%;left: 50%;transform:translate(-50%, -50%);z-index:999999;background:rgba(0,0,0,.7);";
  setTimeout(function() {
    let d = 0.5;
    m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
    m.style.opacity = '0';
    setTimeout(function() { document.body.removeChild(m) }, d * 1000);
  }, time);
}