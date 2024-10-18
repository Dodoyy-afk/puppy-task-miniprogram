Page({
    data: {
        _puppy_white_id: getApp().global_data._puppy_white_id,
        _puppy_yellow_id: getApp().global_data._puppy_yellow_id,

        searching_content: "",

        task_list: [1],
        task_pending: [
            {
                _puppy_id: "IDwhite",
                name: "做饭",
                credit: "10",
                date: "2024-10-18"
            },
            {
                _puppy_id: "IDyellow",
                name: "拖地",
                credit: "10",
                date: "2024-10-18"
            }
        ],
        task_done: [],

        slide_buttons: [
            {name: "mark", text: "标记", src: ""},
            {name: "resolve", text: "完成", src: ""},
            {name: "delete", text: "删除", src: ""},
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

    },

    onSearch(res) {
        console.log(res)
    }
})