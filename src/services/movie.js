import { request } from '../configs/axios';
import { BASE_URL, TOKEN_CYBERSOFT } from '../constants/common';

const fetchMovieListApi = () => {
  return request({
    url: '/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
    method: 'GET',
  });
};

const fetchMovieDetailApi = (movieId) => {
  return request({
    url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
    method: 'GET',
  });
};

export { fetchMovieListApi, fetchMovieDetailApi };
