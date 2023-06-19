import { useState } from "react";
import { Button,  DatePicker, Form, Input, Select, Tooltip } from "antd";
import RubberBand from 'react-reveal/RubberBand';
import { Fade, Slide } from 'react-reveal'
import { BsSearchHeart } from "react-icons/bs"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"
import { useTypewriter } from 'react-simple-typewriter'
import useGetMovieData from "./hooks/useGetData";
import Details from "./Details";

function Home() {
  // state for more inputs 
  const [drop, setDrop] = useState(false)

  // placeholder type writer 
  const placeholder = useTypewriter({
    words: [
      "Search for any movie of choice...",
      "Search for any movie series...",
      "Search for any movie episode...",
    ],
    loop: true,
  })

  // api hook call 
  const {
    data,
    mutate,
    isLoading,
  } = useGetMovieData()

  return (
    <Fade big>
      <div className={`home_top text-white ${!(data && !data?.Response?.toLowerCase()?.includes("false")) ? "flex justify-center items-center" : "pt-10"}`}>
        <Form className="w-full !h-full flex flex-col !p-0" onFinish={mutate}>
          <RubberBand>
            <div className="w-[90%] md:!w-[50%] mx-auto">
              <div className="!w-full md:!w-[105%] flex">
                <Form.Item name="t" className="!w-full">
                  <Input
                    size="large"
                    placeholder={String(placeholder[0])}
                    className="w-full md:text-3xl bg-transparent placeholder:text-white text-white md:py-[21px] rounded-none rounded-l-lg"
                  />
                </Form.Item>
                <div className="flex md:block">
                  <Tooltip title="click to search">
                    <Button
                      size="large"
                      type="primary"
                      htmlType="submit"
                      icon={<BsSearchHeart />}
                      loading={isLoading}
                      className="text-white border border-white hover:border-[#4096ff] !rounded-none md:!rounded-tr-lg"
                    />
                  </Tooltip>
                  <Tooltip title="more options" placement="bottom">
                    <Button
                      size="large"
                      type="primary"
                      onClick={() => setDrop(!drop)}
                      icon={drop ? <AiOutlineUp /> : <AiOutlineDown />}
                      className="text-white border border-white hover:border-[#4096ff] !rounded-none !rounded-r-lg md:!rounded-none  md:!rounded-br-lg"
                    />
                  </Tooltip>
                </div>
              </div>
              {drop && (
                <Slide bottom>
                  <div className="w-full mx-auto space-x-1 flex justify-between">
                    <Form.Item name="type" className="w-full">
                      <Select
                        allowClear
                        placeholder="select type"
                        className="w-full !text-white !bg-transparent placeholder:!text-red-700"
                      >
                        <Select.Option value="movie">Movie</Select.Option>
                        <Select.Option value="series">Series</Select.Option>
                        <Select.Option value="episode">Episode</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item name="y" className="w-full">
                      <DatePicker
                        allowClear
                        picker="year"
                        placeholder="release date"
                        className="w-full !text-white placeholder:!text-white"
                      />
                    </Form.Item>
                  </div>
                </Slide>
              )}
            </div>
          </RubberBand>
          {(data && !data?.Response?.toLowerCase()?.includes("false")) && (
            <Fade bottom>
              <div className="w-full h-full md:h-[70vh] md:absolute bottom-0 bg-[rgba(0,0,0,0.7)] text-white overflow-y-auto scrollbar-thin scrollbar-thumb-white overflow-x-hidden scrollbar-thumb-rounded-full">
                <Details data={data} />
              </div>
            </Fade>
          )}
        </Form>
      </div>
    </Fade>
  );
}

export default Home;
