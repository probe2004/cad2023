var tipuesearch = {"pages": [{'title': 'About', 'text': '組別:cad_ag2 \n 41123124的github位置: https://github.com/probe2004/cad2023 \n 41123124的ipv6序號:28 \n copperliaSam設定網址: http://[2001:288:6004:17:2023::2a]:28/ \n https://github.com/mdecycu/cmsite \n 外部阜號:8243 \n 內部阜號:9243 \n s1511位置: https://probe2004.github.io/cad2023/content/index.html \n', 'tags': '', 'url': 'About.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers \xa0 (整數 int(), 浮點數 float()) \n Strings \xa0 (字串) \n print (Python 內建函式, \xa0 print() \xa0 函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt \xa0 動態頁面超文件). \n practice_html.txt \xa0 動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為 \xa0 class \xa0 後, 在範例導入時透過 \xa0 instance \xa0 引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator \xa0 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n Filename: \xa0 .py \xa0 \n \n \n \n Run \xa0 Output \xa0 清除輸出區 清除繪圖區 Reload \n \n \n \n \n \n \n \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n \n \n \n \n \n \n \n \n Filename: \xa0 .py \xa0 \n \n \n \n Run \xa0 Output \xa0 清除輸出區 清除繪圖區 Reload \n \n \n \n \n # Brython code starts from browser import document, html # get output html location brython_div = document["brython_div1"] brython_div <= html.P(id="output_table") # Replace this line with the actual file content file_content = open("https://mde.tw/cadnote/downloads/2a_w12_seat.txt").read() # Create a dictionary to store student numbers and seat numbers seat_map = {} # Process each line of the file content for line in file_content.splitlines(): # Split each line using tabs elements = line.split("\\t") # If the line contains seat information if len(elements) == 2 and "(" in elements[1]: # Extract student number and seat information stud_num = elements[0].strip() seat_info = elements[1].strip() # Add student number and seat information to the dictionary seat_map[stud_num] = seat_info # Find the maximum row and column values max_row = max(int(seat_info[1]) for seat_info in seat_map.values()) max_col = max(int(seat_info[3]) for seat_info in seat_map.values()) # Initialize a 2D list to represent the seating arrangement seating_arrangement = [["空位"] * max_col for _ in range(max_row)] # Populate the seating arrangement with student information for stud_num, seat_info in seat_map.items(): row = int(seat_info[1]) - 1 col = int(seat_info[3]) - 1 seating_arrangement[row][col] = f"座位號: {seat_info}, 學號: {stud_num}" # Display the result in the HTML document result_html = " \n " for row in seating_arrangement: result_html += "" for cell_content in row: result_html += f"" result_html += "" result_html += " \n \n \n \n {cell_content} \n \n \n \n " # Update the HTML content with the result document["output_table"].html = result_html # Brython code ends \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'Replit', 'text': '在mde.tw裡面的w4-5中影片提到關於前置作業設定，前置作業做好之後就可以到replit按下RUN，就會跑出自己倉儲的頁面，可以進行編輯。編輯完之後按下covert轉成靜態，接著回去replit找到commit，輸入自己想要的更新標題之後，再按下push，到github確認有更新之後，到setting的pages打開網頁，確認全部都已經更新完成。 \n 考量到replit在2023年底可能會不給使用。一律改為用s1511進行更新。 \n 連動s1511伺服器進行更新之後，即無法利用replit進行更新，個人猜想原因為近端跟遠端不同步。(replit會要求同步，但輸入之後出現問題) \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 's1511', 'text': '1202更新 成功利用ssh進入s1511 \n 進入步驟，要先把w8的前三篇影片看完做前置作業。要先開啟sftp連接到s1511得伺服其中，開啟ssh登入之後，切換到cad2023，輸入python3 server.py按下enter執行，就可以到google輸入s1511.cycu.org:外部阜號，開啟連結網站了。 \n 設定config的email以及username之後進行git pull整合近端跟遠端的資料一致，再push上去到github確認更新成功。建立public_html資料夾在cad41123124裡面，接著克隆，可以連結"s1511.cycu.org/~cad41123124"的網頁。 \n 在cad41123124中的cad2023設置好acp的設定之後，就可以在動態網站中進行轉靜態acp的動作，acp成功之後也可以在確認github進行更新。 \n 利用s1511端進行更新測試。(因replit無法commit推送) \n \n', 'tags': '', 'url': 's1511.html'}, {'title': 'localhost', 'text': '', 'tags': '', 'url': 'localhost.html'}, {'title': '專案', 'text': '', 'tags': '', 'url': '專案.html'}, {'title': '專案一', 'text': '利用Inventor繪製個零件，最後組裝。 \n 各零件尺寸展示 \n 底座 \n \n 接球的圓盤 \xa0圓盤連接底座的腳架 \xa0圓球本球 \xa0軌道 \n 零件檔案跟模擬結果 \n 模擬結果: https://youtu.be/mh_NbfyHMdk \n \n 依照影片步驟加入ZMQ但未成功。 \n', 'tags': '', 'url': '專案一.html'}, {'title': '專案二', 'text': '零件繪製 \n 底座 \n \n 軌道 \n \n 長連桿 \n \n 短連桿 \n \n 插銷 \n \n 球 \n \n', 'tags': '', 'url': '專案二.html'}, {'title': '斜坡球', 'text': '關於斜坡的一些操作筆記，導入斜坡範例的stl檔到CoppeliaSim中，右鍵選擇add>proximity sensor>ray type來加入位於斜坡中央的感測器。依照影片的步驟完成設定。 \n \n 模擬測試結果 \n', 'tags': '', 'url': '斜坡球.html'}, {'title': '環形軌道', 'text': '利用Inventor繪製個零件，最後組裝。 \n 帶有環形軌道的底座 \n \n 球 \n \n', 'tags': '', 'url': '環形軌道.html'}, {'title': '筆記', 'text': 'Replit前置作業 \n mkdir cad2023 \n cd cad2023 \n git init \n 利用 SciTE 建立 README.md 檔案, 放入後續在 Replit 會需要的 git submodule update 以及 pip install 指令 \n git add README.md \n git commit -m \xa0 "add README.md" \n 利用下列指令將 cmsimde 倉儲設定為本倉儲的子模組且放入 cmsimde 目錄中 \n git submodule add https: //github.com/mdecycu/cmsimde.git cmsimde \n 將 cmsimde 目錄中的 up_dir 內容複製到倉儲根目錄 \n 納入所有變更的內容 \n git add . \n git commit -m \xa0 "add cmsimde as submodule" \n 建立 main 分支, 且設為主分支 \n git branch -M main \n 設定 putty session 名稱為 github.com, 且能以 SSH 連線至 github.com 主機 \n git remote add origin git@github.com:scrum-1/cad2023.git \n git push -u origin main \n \n 維護 cad2023 倉儲與網站 \n Replit + Github \n 可攜環境 + Github \n 自架伺服器 + Github(目前使用) \n \n 利用s1511進入 \n 1)\xa0 如何遠端登入 、2 ) \xa0 如何取放檔案 、3) \xa0 如何與 github 帳號彼此信任 、4) \xa0 如何取下 cad2023 、5) \xa0 如何啟動或關閉 cad2023 倉儲 、6) \xa0 如何連結到動態網站 、7) \xa0 如何設定靜態網站 、8) \xa0 如何連動動態網站改版與靜態網頁 、9) \xa0 如何對資料進行保全 以及 10) \xa0 網路連線協定 等相關議題 \n \n 外部阜號:9243 \n 內部阜號:8243 \n ps:我不小心把群組的阜號跟我自己的用相反了，可是我不會改回來，燒腦到哭出來。 \n \n 筆記幾個常用到的指令"cd切換資料夾"，"cd ..上一頁"，"exit退出"，"pwd現在位置""mkdir建立資料夾"，"ls -l列出資料"，"ls -la詳細列出"，"add加入"，"git push推送資料"，"git pull合併資料"。 \n', 'tags': '', 'url': '筆記.html'}, {'title': '項目自評', 'text': '(O)為是。(X)為否。 \n A: 是否按照進度明確標示倉儲的改版歷程 \n (O) 有標示歷程。 \n B: 是否根據 \xa0 IPv4 與 IPv6 \xa0 網路環境設定進行作法討論 \n (O) 已學會做更改設定並了解環境。 \n C: 是否就 \xa0 Replit、s.cycu.org 與 localhost \xa0 情境下對個人與分組倉儲進行設定操作 \n (O) 順利使用各項方式登入。 \n D: 是否就所分配的 \xa0 CAD 套件 從安裝設定到繪圖提供內容參考 \n (O) 已安裝且流暢使用。 \n E: 是否使用所分配的 CAD 套件完成 專案一零組件繪圖 , 並提供零組件下載 \n (O) 皆繪製零件，可至連結下載。 \n F: 是否將自行繪製的專案一零組件 轉入 CoppeliaSim \n (O) 已轉入進行模擬，雖然結果不太流暢。 \n G: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案一轉入的零組件設定感測器, 並進行 鋼球永動模擬 \n (X) 按照影片步驟加入進行模擬，但未成功。 \n H: 是否實際操作 \xa0 Triangle 軌道系統 的鋼球永動模擬 \n (O) 有按照影片步驟操作並模擬。 \n I: 是否完成 W15 的平面雙 U 迴路上的 鋼球永動系統繪圖、轉檔與系統模擬 \n (O) 已完成繪圖組裝轉檔的動作，但模擬不太理想。 \n J: 是否使用所分配的 CAD 套件完成 專案二 1D 平台零組件繪圖 , 並提供零組件下載 \n (O) 已完成繪圖並展示零件跟組合。 \n K: 是否利用 \xa0 ZMQ Remote API Python \xa0 對專案二轉入的零組件設定感測器, 並進行鋼球永動模擬 \n (X) \n L: 是否針對專案二的 1D 平台鋼球平衡系統所需的 \xa0 PID 控制理論 進行資料收集與 ChatGPT 對答 \n (X) \n', 'tags': '', 'url': '項目自評.html'}, {'title': '小組安排', 'text': '更新小組的名單及作業分配位置，通知組員完成該完成的作業。 \n 關於如何建立網站或是推送、零件繪製等皆放置在小組的網站。 \n https://cad2023ag2.joe012299.repl.co/ \n \n \n', 'tags': '', 'url': '小組安排.html'}]};