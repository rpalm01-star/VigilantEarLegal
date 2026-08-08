# Witness Ear — 可选 24 小时声音日志与 PDF 报告

**Witness Ear** 是 **Vigilant Ear** 的可选功能。它在设备上保存应用已分类的周围声音的简短日志，以便在需要书面记录时导出简单的 **PDF Summary Report**——而不仅仅依赖实时地图。它记录的是声音**事件**，而非音频或对话。

它**默认关闭**、**免费**，并设计为在您需要之前不打扰日常使用。

---

## 它是什么

当 Vigilant Ear 正在监测时，它已在分类环境声音（警报、闹钟、车辆、与语音相关的类别等）。开启 Witness Ear 后会额外完成：

- 在手机上将**最近的分类结果**保存最多 **24 小时**。
- 可将这些事件 **Export** 为 **PDF Summary Report**，通过 Mail、Files、AirDrop 等分享。
- 可随时用垃圾桶控件**删除**日志。将 Witness Ear **关闭**只会**暂停**记录——已记录的内容会保留（并仍在 24 小时后过期清除），因此您可以暂时停用而不丢失当天数据。

没有单独的 Witness Ear「应用模式」或专用界面。控制位于 **Preferences → SOUND JOURNAL**：**Witness Ear** 开关（日志中有事件时旁边有小型**垃圾桶**），以及带 **Export** 的 **PDF Summary Report** 行。

报告列出**时间**、**置信度**、**峰值电平 (dBFS)**、**测得的方向**、**哪部手机听到**（本机或已链接的 Constellation 对等设备），以及按声音族分组的**声音标签**。它是**模式识别与情境感知辅助**，不是经认证的噪声计。

---

## 为什么可能需要它

当记忆和实时圆点不够时，人们会使用简短书面日志：

| 场景 | Witness Ear 如何帮助 |
|------|----------------------|
| **邻里 / HOA / 房东沟通** | 一份带日期的列表，说明*应用标注了什么、何时发生*（一夜或一天），作为对话起点——而非法庭级计量。 |
| **「是每晚都有，还是只有一次？」** | 滚动 24 小时，便于核对近期情况，无需永久归档。 |
| **多机家庭（Constellation）** | 已链接手机通过**本地 mesh** 共享所闻。共享检测也可写入日志，使报告能显示**哪部手机**听到了事件——不仅是本麦克风。 |
| **无障碍 / 情境日志** | 在一段嘈杂时段后，可发给家人或支持联系人的简单导出。 |

若从不需要 PDF，请保持 Witness Ear **关闭**。检测与提醒仍与之前完全一样。

---

## 如何使用（iPhone / iPad）

### 1. 开启

1. 打开 **Preferences**（操作扇形菜单或菜单中的铃铛 / Customizations 路径）。
2. 找到 **SOUND JOURNAL** 分区。
3. 将 **Witness Ear** 设为**开**。  
   - 点名称旁的 **ⓘ** 可查看应用内简短说明。
4. 照常让 Vigilant Ear 继续监测（麦克风对您关心的声音保持开启）。

开启期间，达到应用置信度下限的分类会追加到**本地**日志（每个标签有短间隔，以免重复淹没文件）。

### 2. 导出 PDF

1. 留在 **SOUND JOURNAL**。
2. 在 **PDF Summary Report** 行点 **Export**。  
   - 点该行 **ⓘ** 可了解 PDF 内容。
3. 等待系统**分享表**，然后保存或发送文件（`WitnessEar-Report-….pdf`）。

若日志为空，Export 会提示最近 24 小时无事件——请开启 Witness Ear 并等到分类器至少触发一次。

### 3. 暂停或删除日志

- **暂停：** 关闭 **Witness Ear** 开关。停止记录；已记录内容**保留**，并仍在 24 小时后过期。再次打开即可恢复。
- **删除：** 点 **Witness Ear** 行上的小型**红色垃圾桶**（仅在日志有事件时显示）。会启动短暂的 **Cancel (5)…(1)** 倒计时——再点可取消，或等倒计时结束以立即删除全部。

### 4. Constellation（可选）

若 **Constellation** 已与 mesh 上的其他手机链接：

- 手机已为实时地图与多机视图**共享许多非语音检测**。
- 在 Witness Ear **开启**时，**对等共享**检测可**合并到本机日志**，并在 PDF 的 **Heard by** 中显示为对等设备名称 vs **this phone**。

每部手机仍在设备上保留**自己的**日志文件。**没有云端 Witness Ear 归档**。要在一台设备上获得尽量完整的多机 PDF，该设备需在链接且记录的同时，其他设备正在共享。

---

## PDF 包含内容（示意结构）

具体版式可能演变；目标是便于通过 PDF 或打印纸阅读的报告。

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

每页内容背后有淡淡的 Wingdings 水印，页脚含 Wingdings 标识、「© 2026 Wingdings, Inc. All rights reserved. · Patent Pending」以及页码——便于初步核对他人交给您的 PDF 是否像真实导出。

**如何阅读**

- **Classifier samples** — 已存储的窗口数（不是「城市里警报响了多少次」）。
- **Distinct episodes** — 约一分钟安静间隔分隔的样本段；长时间连续声音可能样本很多但片段很少。
- **Conf** — 模型置信度（0–100%），**不是**分贝 SPL。
- **dBFS** — 事件附近的峰值麦克风电平，相对该手机的数字满量程（0 = 麦克风能录到的最响）。适合比较时刻；**不是**校准的 dB SPL。
- **Dir** — 声音的绝对罗盘方位/方向（0° = 北），**仅**在双麦克风解实际测得时显示；「—」表示未测。绝不会根据手机朝向推断。
- **By** — **Devices** 部分的设备标识（P1 = 导出手机，P2… = 已链接对等设备），与 **Locations** 中的 L 编号对应。
- **Integrity hash** — 用于生成 PDF 的设备端日志指纹；有助于发现导出后对事件表的篡改。
- **Attestation** — 打印后可选的手写签名栏（您对持有/位置作出担保）。

---

## 数据隐私

| 主题 | 政策 |
|------|------|
| **默认** | **关闭。** 在您选择加入前不会建立 Witness Ear 日志。 |
| **数据位置** | **仅本设备**，位于应用私有的 **Application Support** 沙盒（见下文）。 |
| **存储内容** | 分类元数据：时间、标签、置信度、应用已有的位置/航向（如有）、合并 mesh 事件时的可选对等 id。**不是**为日志做的全天连续录音，也不是口述文字转写（或翻译）。 |
| **保留** | **滚动 24 小时。** 更旧的行会被清理。 |
| **关闭时** | 记录**暂停**；已存条目保留，并仍在 24 小时后过期。 |
| **删除控件** | Witness Ear 行上的垃圾桶（日志有事件时显示），带可取消倒计时。 |
| **上传** | Witness Ear **不会**将日志上传到 Wingdings 或 Witness Ear 云端。 |
| **Export** | **由您**选择是否分享 PDF（Mail、Files、AirDrop 等）。一旦分享，该副本不在应用控制范围内。 |
| **Constellation** | 实时检测的 mesh 共享是您已链接手机之间的**本地网络**产品功能。合并的日志行仍留在接收手机上，直到您导出或清除。 |
| **儿童 / 敏感用途** | 请勿用日志识别或追踪个人。它用于**地点、时间与声音类别**，而非个人档案。 |

### 「Application Support」指什么

**Application Support** 是仅属于本机 Vigilant Ear 的私有文件夹。它**不是**云盘、**不是**公开的「Files」相册，也**不是**发给支持的邮件。在正常 iOS 规则下，其他应用无法读取。

在设有**设备密码**（或生物识别）的 iPhone 上，iOS 使用硬件支持的保护对**应用数据进行静态加密**。Witness Ear 不上传日志，也不在其上再加一层应用管理的加密。设备锁定时的访问遵循 Apple 标准数据保护类别（通常在开机后首次解锁前受保护，除非适用更强设置）。备份（加密的电脑备份 / iCloud 备份规则）与「放在手机磁盘上」是分开的。

---

## 在纠纷中使用本报告

Witness Ear 可生成声学元数据的**可验证数字账本**（设备端分类器标注了什么、何时、哪部手机贡献）——有助于与邻居、房东、HOA 或调解人进行**非正式**沟通。它**不能**替代经认证的 Class 1/2 测量或法律顾问。

**实务步骤：**

1. 在您关心的时段保持 **Witness Ear 开启**（最多保留 24 小时）。
2. **Export** PDF；保留原始文件，不要通过会改写 PDF 的编辑器重新保存。
3. 如需纸质记录则**打印**；用墨水手写完成 **Attestation** 栏（姓名、地点、签名、日期）。
4. 向接收方指出 **Integrity** 部分：日志行的 **SHA-256** 指纹。之后从**同一份未改动的设备端日志**重新导出应匹配；在 PDF 编辑器中改事件表不会正确更新该哈希，除非攻击者也从匹配的源数据重建。
5. 明确说明：这是**应用生成的元数据**，时间为**设备时钟**，电平**不是法定 SPL**，标签可能有误。
6. 我们**目前**不运营公开的「上传 PDF 验证签名」网站。哈希是**自包含的完整性说明**，不是 Wingdings 云端证明。

**请勿**捏造事件、裁剪完整性区块，或声称 PDF 是经认证的噪声测量。

---

## 免责声明

1. **不是经认证仪器。** 手机麦克风**不是** Class 1/2 声级计。置信度分数及相关电平均为**相对**、未校准，**不得**作为执法、罚款或法定计量的绝对 dBA/dBC 出示。在诚实使用时，报告仍可作为声学元数据的**可验证数字账本**。

2. **不保证完整。** 日志仅包含监测开启且 Witness Ear **开启**时，**设备端分类器**所标注的内容。安静时段、麦克风静音、应用未运行、低置信度或重复限流可能导致空白。没有某一行**不能**证明声音从未发生。

3. **标签可能有误。** 机器学习引擎可能误分类。「Siren」行表示当时模型的最高猜测——不能保证是紧急车辆。请将 PDF 视为**辅助笔记**，而非事实标准。

4. **不是安全设备。** Vigilant Ear / Witness Ear 是**情境感知与无障碍辅助**。它们不能替代人的判断、经认证的警报或官方应急服务。

5. **证据与纠纷。** 若与房东、HOA 或机构分享 PDF，请如实说明其性质：有保留期限、由用户导出、带设备端完整性哈希的**应用生成分类日志**。请勿改动事件表或捏造事件。我们不提供法律意见；录音与证据的地方法规各异——如有疑问，请咨询合格专业人士。

6. **多机报告。** 对等行依赖 Constellation 连通与共享规则（例如非语音来源）。消费级手机的时钟与 GPS 有误差；「同一晚」的多机一致是有用情境，而非实验室级计时。

7. **时间基准。** 时间戳使用**设备墙上时钟**，用户可更改。PDF 会注明这一点；当前产品不会自动与网络时间交叉校验。

8. **分享由您负责。** 一旦 AirDrop 或电邮报告，接收方可保留副本。请只导出您打算分享的内容。

---

## 平台说明

- **iOS / iPadOS：** Witness Ear 控件如上所述位于 **Preferences → SOUND JOURNAL**。

---

## 须知

- 保持 Witness Ear **关闭**不会增加手机 CPU 或电池消耗。
- **开启**会增加轻度本地存储，以及为报告偶尔写入事件。
- **Export** 直接生成 PDF，无需单独用户菜单。
- 日常提醒与方向请用主 Vigilant Ear 地图与 HUD；需要最近一天声音事件的**可携书面快照**时再使用 Witness Ear。

---

<p align="center">
  <img src="https://raw.githubusercontent.com/rpalm01-star/VigilantEarLegal/main/wingdings-logo.png" alt="Wingdings, Inc." width="102" /><br /><br />
  <strong>© 2026 Wingdings, Inc.</strong><br />
  All rights reserved.<br />
  Patent Pending
</p>
