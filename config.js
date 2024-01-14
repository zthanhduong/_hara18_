// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "To: Hara",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "Mừng sinh nhật tuổi 24 của bạn.",  // 同上...
        "Mong bạn có một ngày thật vui, và cả cho tuổi 24 nữa.",
        "Thật tiếc vì đã không thể gặp bạn hôm nay,",
        "nhưng mình vẫn vui vì đã được đồng hành trong quá trình trưởng thành của bạn.",
        "Những món quá nhỏ nhỏ trong hộp,",
        "mình cũng không dám chắc nó đẹp hay phù hợp với bạn không.",
        "Nhưng mình mong bạn luôn giữ ấm được cơ thể,",
        "nên hãy coi đó như một lời nhắc mỗi khi thấy nó nhé.",
        "Mong sớm được gặp lại bạn!",
        "Your Soulmate: zthanhduong~~",
    ],
   /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "Bấm vô đây nè!!!",
        play: "Chào bạn.",
        bannar_coming: "Nhớ ngày này chứ?",
        balloons_flying: "Ngày bạn đã đến với thế giới này...",
        cake_fadein: "Một ngày đáng để nhớ đến phải không?",
        light_candle: "Vậy nên tặng một món quà nho nhỏ.",
        wish_message: "Gửi đến bạn một chút hạnh phúc cho một ngày đáng nhớ...",
        story: "Bắt đầu nào...",
    }
};
