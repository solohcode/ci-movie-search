import { message } from "antd";
import axios from "axios";
import { useMutation } from "react-query";


const getMovieData = (params) => axios.get("https://www.omdbapi.com/?apikey=2c323833&plot=full", { params })
.then(({ data }) => Promise.resolve(data))
.catch((response) => Promise.reject(response));

export default function useGetMovieData() {
  return useMutation(
  (params) => getMovieData(params),
  {
    retry: false,
    mutationKey: "get:movie-details-data",
    onError: err => message.error(String(err)),
    onSuccess: res => {if(res?.Response?.toLowerCase()?.includes("false")) message.error(res?.Error)},
  }
)}