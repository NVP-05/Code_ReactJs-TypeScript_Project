import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function PersonalPage() {
  return (
    <div className="flex">
      <div>
        <Header></Header>
      </div>
      <div className="flex flex-col items-center min-h-screen py-10">
        <div className="bg-white shadow-md rounded-full w-24 h-24 overflow-hidden">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/nvp-05.appspot.com/o/image%2FIMG_5111.JPG.jpg?alt=media&token=5460d0b5-94e7-4dc7-9e68-7a02fe036068"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-xl font-semibold mt-4">nvp.005</h1>
        <div className="mt-2 flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded-full">
            Chỉnh sửa trang cá nhân
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-full">
            Xem kho lưu trữ
          </button>
        </div>
        <div className="mt-4 flex space-x-8">
          <div className="text-center">
            <span className="font-semibold">0</span>
            <p className="text-gray-500">bài viết</p>
          </div>
          <div className="text-center">
            <span className="font-semibold">26</span>
            <p className="text-gray-500">người theo dõi</p>
          </div>
          <div className="text-center">
            <span className="font-semibold">29</span>
            <p className="text-gray-500">đang theo dõi</p>
          </div>
        </div>
        <div className="mt-8">
          <button className="flex flex-col items-center text-gray-500">
            <div className="bg-gray-200 p-8 rounded-full">+</div>
            <p className="mt-2">Mới</p>
          </button>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-500">
            Khi bạn chia sẻ ảnh, ảnh sẽ xuất hiện trên trang cá nhân của bạn.
          </p>
          <button className="mt-4 text-blue-500">
            Chia sẻ ảnh đầu tiên của bạn
          </button>
        </div>
        <div className="mt-7">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
