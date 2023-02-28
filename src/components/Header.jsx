import { Button } from '@mui/material'
import React from 'react'
import AddIcon from "@mui/icons-material/Add";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-black text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <Link to={"/"}>
        <span>
          Filmy<span className="text-white">Verse</span>
        </span>
      </Link>
      <Link to={"/addMovie"}>
        <h1 className="text-lg item">
          <Button>
            <AddIcon className="mr-1" /> <span>Add New</span>
          </Button>
        </h1>
      </Link>
    </div>
  );
}

export default Header
