import { request } from "../configs/axios";

const fetchRoomListApi = (showTimeId) => {
  return request({
    url: `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showTimeId}`,
    method: "get",
  });
};

const bookingTicketAPI = (data) => {
  return request({
    url: `/QuanLyDatVe/DatVe`,
    method: "POST",
    data,
  });
};
export { fetchRoomListApi, bookingTicketAPI };
