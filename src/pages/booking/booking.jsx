import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Chair from "../../modules/chair/chair";
import { bookingTicketAPI, fetchRoomListApi } from "../../services/booking";

export default function Booking() {
  const [danhSachGhe, setDanhSachGhe] = useState([]);
  const [roomList, setRoomList] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchRoomList();
  }, []);

  const fetchRoomList = async () => {
    const result = await fetchRoomListApi(params.maLichChieu);

    setRoomList(result.data.content);
  };

  const handleSelect = (selectedChair) => {
    const data = [...danhSachGhe];

    const idx = data.findIndex((ele) => ele.tenGhe === selectedChair.tenGhe);

    if (idx !== -1) {
      data.splice(idx, 1);
    } else {
      data.push(selectedChair);
    }

    setDanhSachGhe(data);
  };

  const handleBookingTicket = async () => {
    const danhSachVe = danhSachGhe.map((ele) => {
      return {
        maGhe: ele.maGhe,
        giaVe: ele.giaVe,
      };
    });

    const submitData = {
      maLichChieu: params.maLichChieu,
      danhSachVe,
    };

    await bookingTicketAPI(submitData);

    alert("Đặt thành công");

    navigate("/");
  };

  return roomList ? (
    <div className="row w-75 mx-auto my-5">
      <div className="col-8">
        {roomList.danhSachGhe.map((ele, idx) => {
          return (
            <React.Fragment key={ele.tenGhe}>
              <Chair handleSelect={handleSelect} item={ele} />
              {(idx + 1) % 16 === 0 && <br />}
            </React.Fragment>
          );
        })}
      </div>
      <div className="col-4">
        <img
          className="img-fluid"
          src={roomList.thongTinPhim.hinhAnh}
          alt="image"
        />
        <h4>Tên phim: {roomList.thongTinPhim.tenPhim}</h4>
        <h5>Mô tả: {roomList.thongTinPhim.moTa}</h5>
        <p>
          Ghế:
          {danhSachGhe.map((ele) => (
            <span key={ele.maGhe} className="m-1 badge badge-success">
              {ele.tenGhe}
            </span>
          ))}
        </p>
        <p>
          Tổng tiền:
          {danhSachGhe
            .reduce((previousValue, currentValue) => {
              previousValue += currentValue.giaVe;

              return previousValue;
            }, 0)
            .toLocaleString()}
        </p>
        <button onClick={handleBookingTicket} className="btn btn-warning">
          Đặt vé
        </button>
      </div>
    </div>
  ) : (
    "Loading..."
  );
}
