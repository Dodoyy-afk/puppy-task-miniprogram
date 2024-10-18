Page({

    /**
     * 页面的初始数据
     */
    data: {
        puppy_white: '',
        puppy_white_credit: 0,
        puppy_white_todo: 0,
        puppy_yellow: '',
        puppy_yellow_credit: 0,
        puppy_yellow_todo: 0,
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
    async onShow() {
        this.setData({
            puppy_white: getApp().global_data.puppy_white,
            puppy_yellow: getApp().global_data.puppy_yellow
        })
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