//全屏按钮点击的回调
export const fullScreen = () => {
  //DOM对象的一个属性:可以用来判断当前是不是全屏模式[全屏:true,不是全屏:false]
  const full = document.fullscreenElement;
  //切换为全屏模式
  if (!full) {
    //文档根节点的方法requestFullscreen,实现全屏模式
    document.documentElement.requestFullscreen();
  } else {
    //变为不是全屏模式->退出全屏模式
    document.exitFullscreen();
  }
};

//切换系统暗黑主题
export const toggleDark = (dark: boolean) => {
  //body加个dark类名
  if (dark) {
    document.body.classList.add("dark");
    document.documentElement.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.documentElement.classList.remove("dark");
  }
};
