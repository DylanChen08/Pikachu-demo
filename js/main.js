!function() {
  function writeCodes(prefix, code, fn) {
    let container = document.querySelector("#code");
    let styleTag = document.querySelector("#styleTag");
    let n = 0;

    let interval = setInterval(() => {
      n = n + 1;
      container.innerHTML = code.substring(0, n);
      styleTag.innerHTML = code.substring(0, n);
      container.scrollTop=container.scrollHeight;
      if (n > code.length) {
        window.clearInterval(interval);
        fn && fn.call();
      }
    }, 1);
  }

  let code = `
body {
    border: 1px solid #ffdc2b;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.code-wrapper {
    flex: 1;
    height: 50%;
    border: 1px solid red;
}
.preview-wrapper {
    flex: 1;
    height: 50%;
    border: 1px solid red;
    display: flex;
    align-items: center;
    justify-content: center;
    background:#ffdc2b;
}
.wrapper {
    width: 100%;
    height: 165px;
    position: relative;
    background: #ffdc2b;
}
.wrapper > :not(:last-child) {
    z-index: 1;
}
.wrapper > .nose {
    width: 0px;
    height: 0px;
    border-width: 11px;
    border-style: solid;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    top: 28px;
    left: 50%;
    margin-left: -11px;
}
.eye {
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    border-radius: 50px;
    position: absolute;
    top: -2px;
}
.eye::before {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #ddd;
    left: 8px;
    top: 2px;
    background: white;
}
.eye.left {
    right: 50%;
    margin-right: 90px;
}
.eye.right {
    left: 50%;
    margin-left: 90px;
}
.face {
    width: 68px;
    height: 68px;
    background: #fc0c1c;
    border-radius: 50%;
    position: absolute;
    top: 85px;
    border: 2px solid black;
}
.face.left {
    left: 50%;
    margin-left: 116px;
}
.face.right {
    right: 50%;
    margin-right: 116px;
}
.upperLip {
    height: 26px;
    width: 80px;
    position: absolute;
    top: 48px;
    border: 3px solid black;
    background: #ffdc2b;
}
.upperLip.left {
    right: 50%;
    border-bottom-left-radius: 40px 26px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}
.upperLip.right {
    left: 50%;
    border-bottom-right-radius: 40px 26px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}
.lowerLip-wrapper {
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -150px;
    height: 110px;
    width: 300px;
    overflow: hidden;
    z-index: 0;
}
.lowerLip {
    height: 3500px;
    width: 300px;
    background: #990513;
    border-radius: 200px/2000px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}
.lowerLip::after {
    content: "";
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 100px;
    background: #fc4a62;
    left: 50%;
    margin-left: -50px;
    border-radius: 50px;
}
 `;
  writeCodes("", code, "");
}.call();
