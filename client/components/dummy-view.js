import React from 'react'

const arr = new Array(10).fill(null).map((it, index) => `Item ${index}`)
const Dummy = () => {
  return (
    <div className="bg-black text-white min-h-screen w-screen">
      <nav className="w-full bg-red-700 z-20 fixed h-auto py-2">
        {/*       div.flex.justify-between>div+div */}

        <div className="flex justify-between w-full">
          <div className="flex flex-wrap items-center">
            {/*  a>span.text-xl.pl-2>i.fa.fa-info-circle
             */}
            <div className="border-r-2 w-48 box-border border-white border-solid">
              <a href="http://google.com">
                <span className="text-2xl  pl-2 text-white">
                  <i className="fa fa-info-circle mr-2" />
                  Cry Time
                </span>
              </a>{' '}
            </div>

            <div className="border-r-2 pl-2 pr-2 border-white border-solid">
              <a href="http://google.com">
                <span className="text-2xl pl-2 text-white">
                  <i className="fa fa-user mr-2" />
                  Cry Time # 2
                </span>
              </a>
            </div>
          </div>
          <div>3</div>
        </div>
      </nav>
      {/* div.h-full.flex>div.w-48+div.flex.flex-grow
       */}
      <div className="h-screen pt-12  flex">
        <div className="flex flex-shrink-0 flex-col w-48 ">
          {arr.map((it) => {
            return (
              <div key={it} className="p-4 box-border  text-lg border-b-2 border-r-2 border-white">
                {it}
              </div>
            )
          })}
        </div>
        <div className="flex flex-basis-0 h-auto flex-shrink-1 flex-wrap justify-center content-start">
          {arr.map((it) => {
            return (
              <div key={it} className="p-4 h-20 m-4 w-20 bg-white text-black border-white">
                {it}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)