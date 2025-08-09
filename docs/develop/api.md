# API 列表

LLOneBot 实现了 OneBot 11 以及 go-cqhttp 的大部分 API

接口详细示例: [点击跳转](https://llonebot.apifox.cn)

## 连接方式支持情况
| 连接方式           |可用|
|----------------|:-:| 
| HTTP 接口调用      | ✔ |
| HTTP 事件上报      | ✔ |
| HTTP POST 快速操作 | ✔ |
| 正向 WS 连接       | ✔ |
| 反向 WS 连接       | ✔ |

## API 支持情况

### OneBot 11

::: tip
详细用法参阅 [OneBot 11 文档](https://github.com/botuniverse/onebot-11/blob/master/api/public.md) 或 [go-cqhttp 文档](https://docs.go-cqhttp.org/api/)
:::

| 功能         |     API    | 可用 | 备注 |
|------------| -------------  |:-:| -------------- |
| 发送私聊消息     |   send_private_msg | ✔ | 不支持主动临时会话 |
| 发送群聊消息     |   send_group_msg | ✔ |
| 发送消息       |   send_msg | ✔ |
| 撤回消息       |   delete_msg | ✔ |
| 获取消息     |   get_msg | ✔ |
| 获取合并转发内容 | get_forward_msg | ✔ |
| 发送好友赞      |   send_like | ✔ | |
| 群组踢人        |   set_group_kick | ✔ |
| 群单人禁言        |   set_group_ban | ✔ |
| 群匿名用户禁言      |   set_group_anonymous_ban | ❌ |
| 群全员禁言       |   set_group_whole_ban | ✔ |
| 设置群管理员      |   set_group_admin | ✔ |
| 群设置匿名      |   set_group_anonymous | ❌ |
| 设置群名片      |   set_group_card | ✔ |
| 设置群名       |   set_group_name | ✔ |
| 退出群组         |   set_group_leave | ✔ |
| 处理加好友请求     |   set_friend_add_request | ✔ |
| 处理加群请求／邀请     |   set_group_add_request | ✔ |
| 获取登录号信息 |   get_login_info | ✔ |
| 获取陌生人信息    |   get_stranger_info | ✔ |
| 获取好友列表     |   get_friend_list | ✔ |
| 获取群信息      |   get_group_info | ✔ |
| 获取群列表      |   get_group_list | ✔ |
| 获取群成员信息    |   get_group_member_info | ✔ |
| 获取群成员列表    |   get_group_member_list | ✔ |
| 获取群荣誉信息    | get_group_honor_info | ✔ |
| 获取 Cookies |  get_cookies | ✔ |
| 获取 CSRF Token |  get_csrf_token | ✔ |
| 获取 QQ 相关接口凭证 |  get_credentials | ✔ |
| 获取语音     |   get_record | ✔ |
| 获取图片信息     |   get_image | ✔ |
| 检查是否可以发送图片   |   can_send_image | ✔ |
| 检查是否可以发送语音   |   can_send_record | ✔ |
| 获取状态       |   get_status | ✔ |
| 获取版本信息     |   get_version_info | ✔ |
| 重启      | set_restart | ✔ |
| 清理缓存       | clean_cache | ✔ |
| 设置群组专属头衔 | set_group_special_title | ✔ |

### Go-CQHTTP

::: tip
详细用法参阅 [go-cqhttp 文档](https://docs.go-cqhttp.org/api/)
:::

| 功能 |     API    |可用|
| --- | -------------  |:--:|
| 设置登录号资料 | set_qq_profile | ✔ |
| 删除好友 | delete_friend | ✔ |
| 标记消息已读 | mark_msg_as_read | ✔ |
| 发送合并转发 ( 群聊 ) | send_group_forward_msg | ✔ |
| 发送合并转发 ( 好友 ) | send_private_forward_msg | ✔ |
| 获取群消息历史记录 | get_group_msg_history | ✔ |
| 图片 OCR | ocr_image | ✔ |
| 获取群系统消息 | get_group_system_msg | ✔ |
| 获取精华消息列表 | get_essence_msg_list | ✔ |
| 获取群 @全体成员 剩余次数 | get_group_at_all_remain | ✔ |
| 设置群头像 | set_group_portrait | ✔ |
| 设置精华消息 | set_essence_msg | ✔ |
| 移出精华消息 | delete_essence_msg | ✔ |
| 发送群公告 | _send_group_notice | ✔ |
| 获取群公告 | _get_group_notice | ✔ |
| 上传群文件 | upload_group_file | ✔ |
| 删除群文件 | delete_group_file | ✔ |
| 创建群文件文件夹 | create_group_file_folder | ✔ |
| 删除群文件文件夹 | delete_group_folder | ✔ |
| 获取群文件系统信息 | get_group_file_system_info | ✔ |
| 获取群根目录文件列表 | get_group_root_files | ✔ |
| 获取群子目录文件列表 | get_group_files_by_folder | ✔ |
| 获取群文件资源链接 | get_group_file_url | ✔ |
| 上传私聊文件 | upload_private_file | ✔ |
| 下载文件到缓存目录 | download_file | ✔ |
| 对事件执行快速操作 | .handle_quick_operation | ✔ |

### LLOneBot

::: tip
详细用法参阅 <https://llonebot.apifox.cn>
:::

| 功能             | API                          |可用|
|------------------|------------------------------|:--:|
| 设置头像           | set_qq_avatar                | ✔ |
| 获取文件信息         | get_file                     | ✔ |
| 转发单条信息到私聊      | forward_friend_single_msg    | ✔ |
| 转发单条信息到群聊      | forward_group_single_msg     | ✔ |
| 设置消息的表情回应      | set_msg_emoji_like           | ✔ |
| 获取好友分类列表       | get_friends_with_category    | ✔ |
| 设置自身在线状态       | set_online_status            | ✔ |
| 获取自身点赞列表       | get_profile_like             | ✔ |
| 发送合并转发消息       | send_forward_msg             | ✔ |
| 获取收藏表情          | fetch_custom_face            | ✔ |
| 获取好友历史消息记录    | get_friend_msg_history       | ✔ |
| 获取表情回应列表       | fetch_emoji_like             | ✔ |
| 获取官方机器人 QQ 号区间 | get_robot_uin_range          | ✔ |
| 好友戳一戳          | friend_poke                  | ✔ |
| 群组戳一戳          | group_poke                   | ✔ |
| 设置好友备注         | set_friend_remark            | ✔ |
| 移动好友到分组        | set_friend_category          | ✔ |
| 设置群备注          | set_group_remark             | ✔ |
| 设置群消息接收方式    | set_group_msg_mask           | ✔ |
| 移动群文件           | move_group_file             | ✔ |
| 获取群禁言列表       | get_group_shut_list           | ✔ |
| 重命名群文件文件夹名  | rename_group_file_folder      | ✔ |
| 取消消息表情回应     | unset_msg_emoji_like         | ✔ |
| 戳一戳              | send_poke                    | ✔ |
| 语音消息转文本      | voice_msg_to_text            | ✔ |
| 获取 rkey          | get_rkey                     | ✔ |
| 上传闪传文件        | upload_flash_file            | ✔ |
| 下载闪传文件        | download_flash_file          | ✔ |
| 获取闪传文件详情    | get_flash_file_info          | ✔ |
| 获取推荐表情        | get_recommend_face           | ✔ |
| 批量踢出群成员      | batch_delete_group_member    | ✔ |
| 获取群 Ai 语音可用声色列表 | get_ai_characters    | ✔ |
| 发送群 Ai 语音      | send_group_ai_record        | ✔ |
