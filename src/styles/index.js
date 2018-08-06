import { css } from 'styled-components';

export const Normalize = css`
  button,hr,input{overflow:visible}audio,canvas,progress,video{display:inline-block}progress,sub,sup{vertical-align:baseline}input[type=checkbox],input[type=radio],legend{box-sizing:border-box;padding:0}html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}input[type=reset],input[type=submit],button,html input[type=button]{-webkit-appearance:button}input[type=button]::-moz-focus-inner,input[type=reset]::-moz-focus-inner,input[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}input[type=button]:-moz-focusring,input[type=reset]:-moz-focusring,input[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{padding:.35em .75em .625em}legend{color:inherit;display:table;max-width:100%;white-space:normal}textarea{overflow:auto}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;outline-offset:-2px}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}*[hidden],template{display:none}
`;

export const DefaultStyles = css`
  html, body { height: 100%; width: 100%; margin: 0 }

  html {
    box-sizing: border-box;
    overflow: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font: normal 100%/1.65 'Helvetica', sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: #eee;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  #root {
    height: 100%;
    display: flex;
    align-items: center;
  }

  canvas {
    border: 1px solid #000;
    position: absolute;
  }

  #game-layer {
    z-index: 2;
  }

  #background-layer {
    z-index: 1;
  }

  #viewport {
    overflow: hidden;
    margin: 0 auto;
    position: relative;
  }
`;
