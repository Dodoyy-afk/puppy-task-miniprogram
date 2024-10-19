Page({
    data: {
        _puppy_white_id: getApp().global_data._puppy_white_id,
        _puppy_yellow_id: getApp().global_data._puppy_yellow_id,

        product_list: [
            {
                publisher: "IDwhite",
                name: "按摩券",
                description: "享受15分钟按摩时间～",
                credit: "50",
                date: "2024-10-18"
            },
            {
                publisher: "IDyellow",
                name: "宵夜券",
                description: "给小白做宵夜并陪她吃～",
                credit: "60",
                date: "2024-10-18"
            }
        ],

        slide_buttons:[
            {name: "exchange", text: "兑换", src: ""},
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})