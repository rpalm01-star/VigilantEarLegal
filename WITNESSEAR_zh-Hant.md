# Witness Ear — 可選 24 小時聲音日誌與 PDF 報告

**Witness Ear** 是 **Vigilant Ear** 的可選功能。它在裝置上儲存應用已分類的周圍聲音的簡短日誌，以便在需要書面記錄時匯出簡單的 **PDF Summary Report**——而不僅僅依賴實時地圖。它記錄的是聲音**事件**，而非音訊或對話。

它**預設關閉**、**免費**，並設計為在您需要之前不打擾日常使用。

---

## 它是什麼

當 Vigilant Ear 正在監測時，它已在分類環境聲音（警報、鬧鐘、車輛、與語音相關的類別等）。開啟 Witness Ear 後會額外完成：

- 在手機上將**最近的分類結果**儲存最多 **24 小時**。
- 可將這些事件 **Export** 為 **PDF Summary Report**，透過 Mail、Files、AirDrop 等分享。
- 可隨時用垃圾桶控制元件**刪除**日誌。將 Witness Ear **關閉**只會**暫停**記錄——已記錄的內容會保留（並仍在 24 小時後過期清除），因此您可以暫時停用而不丟失當天資料。

沒有單獨的 Witness Ear「應用模式」或專用介面。控制位於 **Preferences → SOUND JOURNAL**：**Witness Ear** 開關（日誌中有事件時旁邊有小型**垃圾桶**），以及帶 **Export** 的 **PDF Summary Report** 行。

報告列出**時間**、**置信度**、**峰值電平 (dBFS)**、**測得的方向**、**哪部手機聽到**（本機或已連結的 Constellation 對等裝置），以及按聲音族分組的**聲音標籤**。它是**模式識別與情境感知輔助**，不是經認證的噪聲計。

---

## 為什麼可能需要它

當記憶和實時圓點不夠時，人們會使用簡短書面日誌：

| 場景 | Witness Ear 如何幫助 |
|------|----------------------|
| **鄰里 / HOA / 房東溝通** | 一份帶日期的列表，說明*應用標註了什麼、何時發生*（一夜或一天），作為對話起點——而非法庭級計量。 |
| **「是每晚都有，還是隻有一次？」** | 滾動 24 小時，便於核對近期情況，無需永久歸檔。 |
| **多機家庭（Constellation）** | 已連結手機透過**本地 mesh** 共享所聞。共享檢測也可寫入日誌，使報告能顯示**哪部手機**聽到了事件——不僅是本麥克風。 |
| **無障礙 / 情境日誌** | 在一段嘈雜時段後，可發給家人或支援聯絡人的簡單匯出。 |

若從不需要 PDF，請保持 Witness Ear **關閉**。檢測與提醒仍與之前完全一樣。

---

## 如何使用（iPhone / iPad）

### 1. 開啟

1. 開啟 **Preferences**（操作扇形選單或選單中的鈴鐺 / Customizations 路徑）。
2. 找到 **SOUND JOURNAL** 分割槽。
3. 將 **Witness Ear** 設為**開**。  
   - 點名稱旁的 **ⓘ** 可檢視應用內簡短說明。
4. 照常讓 Vigilant Ear 繼續監測（麥克風對您關心的聲音保持開啟）。

開啟期間，達到應用置信度下限的分類會追加到**本地**日誌（每個標籤有短間隔，以免重複淹沒檔案）。

### 2. 匯出 PDF

1. 留在 **SOUND JOURNAL**。
2. 在 **PDF Summary Report** 行點 **Export**。  
   - 點該行 **ⓘ** 可瞭解 PDF 內容。
3. 等待系統**分享表**，然後儲存或傳送檔案（`WitnessEar-Report-….pdf`）。

若日誌為空，Export 會提示最近 24 小時無事件——請開啟 Witness Ear 並等到分類器至少觸發一次。

### 3. 暫停或刪除日誌

- **暫停：** 關閉 **Witness Ear** 開關。停止記錄；已記錄內容**保留**，並仍在 24 小時後過期。再次開啟即可恢復。
- **刪除：** 點 **Witness Ear** 行上的小型**紅色垃圾桶**（僅在日誌有事件時顯示）。會啟動短暫的 **Cancel (5)…(1)** 倒計時——再點可取消，或等倒計時結束以立即刪除全部。

### 4. Constellation（可選）

若 **Constellation** 已與 mesh 上的其他手機連結：

- 手機已為實時地圖與多機檢視**共享許多非語音檢測**。
- 在 Witness Ear **開啟**時，**對等共享**檢測可**合併到本機日誌**，並在 PDF 的 **Heard by** 中顯示為對等裝置名稱 vs **this phone**。

每部手機仍在裝置上保留**自己的**日誌檔案。**沒有云端 Witness Ear 歸檔**。要在一臺裝置上獲得儘量完整的多機 PDF，該裝置需在連結且記錄的同時，其他裝置正在共享。

---

## PDF 包含內容（示意結構）

具體版式可能演變；目標是便於透過 PDF 或列印紙閱讀的報告。

```
WITNESS EAR — 24-Hour Sound Journal
Generated Aug 7, 09:30  ·  Window Aug 6, 10:00 – Aug 7, 09:30
Sources: this phone + Constellation peers.  Repeats within 30 s are logged once.

[summary tiles]     classifier samples · episodes (60 s gap) · sound groups · span covered
[Activity by hour]  bar chart of samples per hour
[Sound groups]      raw labels coalesced by profile family (Music, Vehicles, …)
[Locations]         L1, L2, … — positions grouped within ~110 m, with accuracy notes
[Devices]           P1 (this phone, model · iOS · app build), P2 … (linked peers + model)

Episodes
#   Start         Length   Samples   Peak     Sounds              By
1   Aug 7, 01:44  10m 40s  17        −12 dB   Music, Animals +4   P1, P2

Episode Source Feeds (oldest first)
Time        Conf   dBFS   Dir    By   Sound
08:12:03    87%    −21    —      P1   Emergency & alarms · Siren
08:12:04    71%    −25    207°   P2   Emergency & alarms · Siren
08:14:10    64%    −34    —      P1   Household & speech · Knock

Method & Limits …

Integrity
SHA-256 of the N journal rows exported in this window (JSON, sorted keys):
a1b2c3… (full hex digest)
Location accuracy / simulated-GPS flags / device-state notes / exporting device / time base…

Attestation

I, _______________, attest that … Signature / Date lines for ink after print.
```

每頁內容背後有淡淡的 Wingdings 水印，頁尾含 Wingdings 標識、「© 2026 Wingdings, Inc. All rights reserved. · Patent Pending」以及頁碼——便於初步核對他人交給您的 PDF 是否像真實匯出。

**如何閱讀**

- **Classifier samples** — 已儲存的視窗數（不是「城市裡警報響了多少次」）。
- **Distinct episodes** — 約一分鐘安靜間隔分隔的樣本段；長時間連續聲音可能樣本很多但片段很少。
- **Conf** — 模型置信度（0–100%），**不是**分貝 SPL。
- **dBFS** — 事件附近的峰值麥克風電平，相對該手機的數字滿量程（0 = 麥克風能錄到的最響）。適合比較時刻；**不是**校準的 dB SPL。
- **Dir** — 聲音的絕對羅盤方位/方向（0° = 北），**僅**在雙麥克風解實際測得時顯示；「—」表示未測。絕不會根據手機朝向推斷。
- **By** — **Devices** 部分的裝置標識（P1 = 匯出手機，P2… = 已連結對等裝置），與 **Locations** 中的 L 編號對應。
- **Integrity hash** — 用於生成 PDF 的裝置端日誌指紋；有助於發現匯出後對事件表的篡改。
- **Attestation** — 列印後可選的手寫簽名欄（您對持有/位置作出擔保）。

---

## 資料隱私

| 主題 | 政策 |
|------|------|
| **預設** | **關閉。** 在您選擇加入前不會建立 Witness Ear 日誌。 |
| **資料位置** | **僅本裝置**，位於應用私有的 **Application Support** 沙盒（見下文）。 |
| **儲存內容** | 分類後設資料：時間、標籤、置信度、應用已有的位置/航向（如有）、合併 mesh 事件時的可選對等 id。**不是**為日誌做的全天連續錄音，也不是口述文字轉寫（或翻譯）。 |
| **保留** | **滾動 24 小時。** 更舊的行會被清理。 |
| **關閉時** | 記錄**暫停**；已存條目保留，並仍在 24 小時後過期。 |
| **刪除控制元件** | Witness Ear 行上的垃圾桶（日誌有事件時顯示），帶可取消倒計時。 |
| **上傳** | Witness Ear **不會**將日誌上傳到 Wingdings 或 Witness Ear 雲端。 |
| **Export** | **由您**選擇是否分享 PDF（Mail、Files、AirDrop 等）。一旦分享，該副本不在應用控制範圍內。 |
| **Constellation** | 實時檢測的 mesh 共享是您已連結手機之間的**本地網路**產品功能。合併的日誌行仍留在接收手機上，直到您匯出或清除。 |
| **兒童 / 敏感用途** | 請勿用日誌識別或追蹤個人。它用於**地點、時間與聲音類別**，而非個人檔案。 |

### 「Application Support」指什麼

**Application Support** 是僅屬於本機 Vigilant Ear 的私有資料夾。它**不是**雲盤、**不是**公開的「Files」相簿，也**不是**發給支援的郵件。在標準 iOS 規則下，其他應用無法讀取。

在設有**裝置密碼**（或生物識別）的 iPhone 上，iOS 使用硬體支援的保護對**應用資料進行靜態加密**。Witness Ear 不上傳日誌，也不在其上再加一層應用管理的加密。裝置鎖定時的訪問遵循 Apple 標準資料保護類別（通常在開機後首次解鎖前受保護，除非適用更強設定）。備份（加密的電腦備份 / iCloud 備份規則）與「放在手機磁碟上」是分開的。

---

## 在糾紛中使用本報告

Witness Ear 可生成聲學後設資料的**可驗證數字賬本**（裝置端分類器標註了什麼、何時、哪部手機貢獻）——有助於與鄰居、房東、HOA 或調解人進行**非正式**溝通。它**不能**替代經認證的 Class 1/2 測量或法律顧問。

**實務步驟：**

1. 在您關心的時段保持 **Witness Ear 開啟**（最多保留 24 小時）。
2. **Export** PDF；保留原始檔案，不要透過會改寫 PDF 的編輯器重新儲存。
3. 如需紙質記錄則**列印**；用墨水手寫完成 **Attestation** 欄（姓名、地點、簽名、日期）。
4. 向接收方指出 **Integrity** 部分：日誌行的 **SHA-256** 指紋。之後從**同一份未改動的裝置端日誌**重新匯出應匹配；在 PDF 編輯器中改事件表不會正確更新該雜湊，除非攻擊者也從匹配的源資料重建。
5. 明確說明：這是**應用生成的後設資料**，時間為**裝置時鐘**，電平**不是法定 SPL**，標籤可能有誤。
6. 我們**目前**不運營公開的「上傳 PDF 驗證簽名」網站。雜湊是**自包含的完整性說明**，不是 Wingdings 雲端證明。

**請勿**捏造事件、裁剪完整性區塊，或聲稱 PDF 是經認證的噪聲測量。

---

## 免責宣告

1. **不是經認證儀器。** 手機麥克風**不是** Class 1/2 聲級計。置信度分數及相關電平均為**相對**、未校準，**不得**作為執法、罰款或法定計量的絕對 dBA/dBC 出示。在誠實使用時，報告仍可作為聲學後設資料的**可驗證數字賬本**。

2. **不保證完整。** 日誌僅包含監測開啟且 Witness Ear **開啟**時，**裝置端分類器**所標註的內容。安靜時段、麥克風靜音、應用未執行、低置信度或重複限流可能導致空白。沒有某一行**不能**證明聲音從未發生。

3. **標籤可能有誤。** 機器學習引擎可能誤分類。「Siren」行表示當時模型的最高猜測——不能保證是緊急車輛。請將 PDF 視為**輔助筆記**，而非事實標準。

4. **不是安全裝置。** Vigilant Ear / Witness Ear 是**情境感知與無障礙輔助**。它們不能替代人的判斷、經認證的警報或官方應急服務。

5. **證據與糾紛。** 若與房東、HOA 或機構分享 PDF，請如實說明其性質：有保留期限、由使用者匯出、帶裝置端完整性雜湊的**應用生成分類日誌**。請勿改動事件表或捏造事件。我們不提供法律意見；錄音與證據的地方法規各異——如有疑問，請諮詢合格專業人士。

6. **多機報告。** 對等行依賴 Constellation 連通與共享規則（例如非語音來源）。消費級手機的時鐘與 GPS 有誤差；「同一晚」的多機一致是有用情境，而非實驗室級計時。

7. **時間基準。** 時間戳使用**裝置牆上時鐘**，使用者可更改。PDF 會註明這一點；當前產品不會自動與網路時間交叉校驗。

8. **分享由您負責。** 一旦 AirDrop 或電郵報告，接收方可保留副本。請只匯出您打算分享的內容。

---

## 平臺說明

- **iOS / iPadOS：** Witness Ear 控制元件如上所述位於 **Preferences → SOUND JOURNAL**。

---

## 須知

- 保持 Witness Ear **關閉**不會增加手機 CPU 或電池消耗。
- **開啟**會增加輕度本地儲存，以及為報告偶爾寫入事件。
- **Export** 直接生成 PDF，無需單獨使用者選單。
- 日常提醒與方向請用主 Vigilant Ear 地圖與 HUD；需要最近一天聲音事件的**可攜書面快照**時再使用 Witness Ear。

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
