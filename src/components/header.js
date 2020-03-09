import React from "react"

export default function Header() {
  return (
    <header className="flex justify-end items-center pt-5 pr-10 text-sm text-purple-800">
      <div className="mr-4">
        A{" "}
        <span
          className="inline-block text-yellow-600"
          style={{ transform: "rotate(-27deg)" }}
        >
          real
        </span>{" "}
        <span
          className="inline-block text-red-600"
          style={{ transform: "rotate(-67deg)" }}
        >
          fun
        </span>{" "}
        <span
          className="inline-block text-blue-600"
          style={{ transform: "rotate(-17deg)" }}
        >
          course
        </span>{" "}
        by{" "}
        <a
          href="https://twitter.com/chrisoncode"
          className="text-purple-400  hover:text-purple-200 hover:underline"
        >
          @ChrisOnCode
        </a>
        , the creator of{" "}
        <a
          href="https://scotch.io"
          className="text-purple-400 hover:text-purple-200 hover:underline"
        >
          Scotch.io
        </a>
        .
      </div>
      {/* <a href="https://courses.chrisoncode.io/">Purchase</a> */}
      {/* <div className="bg-blue-300 text-blue-600 py-2 px-3 rounded-md flex items-center">
        <span>Already purchased?</span>
        <a
          href="https://courses.chrisoncode.io/"
          className="ml-3 bg-blue-700 text-blue-200 rounded shadow py-2 px-3 hover:bg-blue-600"
        >
          Login
        </a>
      </div> */}
    </header>
  )
}
