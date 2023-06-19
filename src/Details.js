import { Button, Image, Rate, Tag } from 'antd'
import React, { useState } from 'react'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { Fade } from 'react-reveal'

function Details({ data }) {
  const [drop, setDrop] = useState(false)

  return (
    <div className='w-full h-full p-5 md:p-10 md:space-x-5 space-y-3 md:space-y-0 md:flex items-center'>
      <div className='h-full md:w-[20%]'>
        <Image alt={data?.Title} src={data?.Poster} />
      </div>
      <div className='w-full h-full md:w-[50%]'>
        <div className='w-full space-y-3 '>
          <p className='text-3xl md:text-5xl ff_prism'>{data?.Title}</p>
          <div className='md:flex justify-between md:space-x-3 items-center'>
            <p className='text-slate-300'>Released : <span className='text-lg text-white'>{data?.Released}</span></p>
            <Button
              size="large"
              type='text'
              onClick={() => setDrop(!drop)}
              className="p-0 text-white flex space-x-3 !items-center hover:!text-slate-300"
            >
              <p>{drop ? "View less" : "View more"}</p>          
              {drop ? <AiOutlineUp /> : <AiOutlineDown />}
            </Button>
          </div>
        </div>
        {drop && (
          <Fade bottom>
            <div className='w-full text-slate-300 h-[300px] space-y-3 overflow-y-auto scrollbar-thin scrollbar-thumb-white overflow-x-hidden scrollbar-thumb-rounded-full'>
              <p className='text-lg text-white'>{data?.Plot}</p>
              <div>
                <p className='text-white'>Genre: </p>
                {data?.Genre?.split(",")?.map((gen) => (<Tag key={gen} className='text-white'>{gen}</Tag>))}
              </div>
              <div className='md:grid grid-cols-3 gap-3'>
                <p>Type : <span className='text-white'>{data?.Type}</span></p>
                <p>Duration : <span className='text-white'>{data?.Runtime}</span></p>
                <p>Language : <span className='text-white'>{data?.Language}</span></p>
                <p>Country : <span className='text-white'>{data?.Country}</span></p>
                <p>Director : <span className='text-white'>{data?.Director}</span></p>
                <p>Rated : <span className='text-white'>{data?.Rated}</span></p>
                <p>Box-Office : <span className='text-white'>{data?.BoxOffice}</span></p>
                <p>Production : <span className='text-white'>{data?.Production}</span></p>
                <p>Website : <span className='text-white'>{data?.Website}</span></p>
              </div>
              <p>Writer : <span className='text-white'>{data?.Writer}</span></p>
              <p>Actor(s) : <span className='text-white'>{data?.Actors}</span></p>
              <p>Award(s) : <span className='text-white'>{data?.Awards}</span></p>
            </div>
          </Fade>
        )}

      </div>
      <div className='w-full h-full md:w-[30%] text-slate-300 space-y-3'>
        <p className='text-xl text-white'>Ratings</p>
        <div className='flex items-center space-x-3 text-white'>
          <p>{data?.imdbRating}</p>
          <Rate disabled defaultValue={Number(data?.imdbRating)} />
        </div>
        <div className='md:grid grid-cols-2 gap-3'>
          <p>Meta-Score : <span className='text-white text-lg'>{data?.Metascore}</span></p>
          <p>Votes : <span className='text-white text-lg'>{data?.imdbVotes}</span></p>
        </div>
        <div className='space-y-3'>
          {data?.Ratings?.map((rate) => (
            <p>{rate?.Source} : <span className='text-white text-lg'>{rate?.Value}</span></p>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Details