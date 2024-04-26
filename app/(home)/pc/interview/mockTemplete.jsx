const Content = () => {
  const handleSubmit = async () => {
    console.log("提交");
  };

  return (
    <section className="mt-10 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <button type="submit" className="submit_btn">
            取消
          </button>
          <button type="submit" className="submit_btn">
            确定
          </button>
        </form>

        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          <button
            onClick={() => {
              console.log('点击删除了')
            }}
            className="delete_btn"
          >
            删除
          </button>
          <div className="copy_btn" onClick={() => console.log('点击复制了')}>
            复制
          </div>
          <p className="flex-1 text-blue-500 truncate font-medium text-sm">
            文章链接
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="my-10 max-w-full flex justify-center items-center">
        <p className="font-inter font-bold text-black text-center">
          <span className="font-normal text-gray-700">执行出错！</span>
        </p>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-gray-600 text-xl">
            标题 <span className="blue_gradient">副标题</span>
          </h2>
          <div className="summary_box">
            <p>文章总结</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
