import domtoimage from "dom-to-image";
// base64转blob
// 转blob
const convertBase64ToBlob = (base64: string, type: string) => {
//   console.log(base64);
  let data = "";
  if (base64.indexOf(",") >= 0) {
    data = base64.split(",")[1];
  } else {
    data = base64;
  }

  let bytes = window.atob(data);
  let ab = new ArrayBuffer(bytes.length);
  let ia = new Uint8Array(ab);
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], { type: type });
};
// imgDom --> base64
function getBase64Image(img: any) {
  let canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  let ctx = canvas.getContext("2d");
  ctx?.drawImage(img, 0, 0, img.width, img.height);
  let dataURL = canvas.toDataURL("image/png");
  return dataURL.split(",")[1];
  // return dataURL.replace("data:image/png;base64,", "");
}

export const copy = (data: string | HTMLElement) => {
  return new Promise(async (resolve, reject) => {
    if (!document.hasFocus()) return resolve("无权限");
    if (typeof data === "string" && /^https?:\/\//.test(data)) {
    //   console.log(data);

      let image = new Image();
      image.crossOrigin = "anonymous"; // 支持跨域链接

      image.src = data + "?=" + Math.random();
      // image.src = ima
      image.onload = async function () {
        let blob = convertBase64ToBlob(getBase64Image(image), "image/png");
        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              ["image/png"]: blob,
            }),
          ]);
          resolve("copy success");
        } catch (err) {
          reject(err);
        }
      };
    } else if (typeof data === "string" && /^data:image\/(png|jpeg|webp);base64,/.test(data)) {
      let blob = convertBase64ToBlob(data, "image/png");
      try {
        await navigator.clipboard.write([
          new ClipboardItem({
            ["image/png"]: blob,
          }),
        ]);
        resolve("copy success");
      } catch (err) {
        reject(err);
      }
    } else if(typeof data === "string") {
        resolve('copy failed, data error')
    } else {
    //   console.log(data.nodeName);
      if (data.nodeName === "IMG") {
        let blob = convertBase64ToBlob(getBase64Image(data), "image/png");
        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              ["image/png"]: blob,
            }),
          ]);
          resolve("copy success");
        } catch (err) {
          reject(err);
        }
      } else {
        let blob = await domtoimage.toBlob(data);
        try {
          await navigator.clipboard.write([
            new ClipboardItem({
              ["image/png"]: blob,
            }),
          ]);
          resolve("copy success");
        } catch (err) {
          reject(err);
        }
      }
    }
  });
};
