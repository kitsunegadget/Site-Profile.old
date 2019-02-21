var root = new Vue({
    el: "#root",
    data: {
        aboutText: "\
            Kitsune Gadget は旧名の Garakuta Gadget: 役に立つかわからない道具を生み出すものの、\
            その中から面白いモノが生み出せることを期待して名付けられています。（きつねかわいい）\
        ",
        products: [
            {
                id: 0,
                title: "Page Tweeter",
                text: "Twitterボタンが無いページでも簡単にリンク共有できるようにした Google Chrome 拡張機能。",
                text_alt: "A Chrome Extention. You can share any web page that no Tweet button."
            },
            {
                id: 1,
                title: "Quick Change Proxy",
                text: "プロキシ接続をよりすばやくを目的にしたタスクトレイ常駐型のアプリケーション。",
                text_alt: "This apprication purpose is Proxy change quickly."
            },
            {
                id: 2,
                title: "Orig Image View Link",
                text: "Tweetdeck でオリジナルサイズの画像にワンタップでリンク出来るようにした Google Chrome 拡張機能。",
                text_alt: "A Chrome Extention. You can see Orig size image link on Tweetdeck."
            },
            {
                id: 3,
                title: "",
                text: "",
                text_alt: ""
            }
        ],
        socials: [
            {
                id: 0,
                url: "https://twitter.com/kitsunegadget",
                img: "imgs/Twitter_Social_Icon_Rounded_Square_White.png"
            },
            {
                id: 1,
                url: "https://github.com/kitsunegadget",
                img: "imgs/GitHub-Mark-Light-120px-plus.png"
            },
            {
                id: 2,
                url: "https://kitsune-gadget.hatenablog.com",
                img: "imgs/hatenablog-logo-fff.svg"
            }
        ]
    }
});