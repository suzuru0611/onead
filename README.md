#### version 20240722
#
## 請依照以下連結 demo 實做，切換開發者工具手機模式，試著實做 demo 一樣的視覺
#### https://staging-occ.onead.tw/api/v1/packs/9382/preview
####  video、banner 等素材可從 https://staging-occ.onead.tw/api/v1/packs/9382/l.xml 找到
#### 其它: ./補充說明.png ./補充說明2.png

#
### 必要實做功能描述
* 用 base64 將音量鍵放在程式碼
* 點擊音量鍵需要有聲音
* 點擊圖片都能導到網址 https://www.onead.com.tw/
* 滑動 touch move 展開看[補充說明](補充說明.png) banner[補充說明2](補充說明2.png)
* 影片預設靜音
* 影片可視時自動播放
* 請利用影片長度計算 50% 長度時，執行 console.log('video current 50% duration ')

### 必要開發環境建置描述
* npm 初始化開發環境，設定好 package.json
* grunt/gulp/webpack 擇一，設定程式打包壓縮產出結果至 build 資料夾
* 程式放 src 資料夾