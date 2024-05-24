## 事件详细说明

见 <https://docs.go-cqhttp.org/event>

## 上报事件支持情况

| 事件类型    | 可用 | 备注 |
|---------|:--:|:--:|
| 消息      | ✔ | |
| 好友消息撤回  | ✔ | |
| 群消息撤回   | ✔ | |
| 好友请求    | ✔ | |
| 邀请加群请求  | ✔ | |
| 加群请求    | ✔ | 需要管理员权限 |
| 管理变动    | ✔ | 需要管理员权限 |
| 群成员增加   | ✔ | |
| 群成员减少   | ✔ | |
| 群文件上传   | ✔ | |
| 群禁言     | ✔ | |
| 群成员名片变更 | ✔ | |
| 群成员头衔变更 | ✔ | |
| 群内戳一戳   | ✔ | 暂时只支持 Windows 版本的LLOneBot， 残缺状态，识别不了谁戳的，戳的谁 |
| 好友戳一戳   | ✔ | 暂时只支持 Windows 版本的LLOneBot |
| 群红包运气王  | ❌ | |
| 群成员荣誉变更 | ❌ | |
| 生命周期    | ✔ | 目前只有 ws 的 connect |
| ws心跳    | ✔ | |
| 表情回应  | ✔ | |


## 表情回应上报
```json5
{
    "time": 1714491493,
    "self_id": 123456,
    "post_type": "notice",
    "group_id": 12312312,
    "user_id": 1231312,
    "notice_type": "group_msg_emoji_like",
    "message_id": -2147476175,
    "likes": [
        {
            "emoji_id": "76",
            "count": 1
        }
    ]
}
```
emoji_id 参考 <https://bot.q.qq.com/wiki/develop/api-v2/openapi/emoji/model.html#EmojiType>

## 表情回应发送

参考 [扩展api](./extends_api.md)