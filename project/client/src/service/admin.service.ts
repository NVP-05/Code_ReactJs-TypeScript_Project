import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Userdb } from "../interface";

export const getAllUser: any = createAsyncThunk(
    "user/getAllUser",
    async () => {
      const res = await axios.get("http://localhost:8080/users");
      return res.data;
    }
  );
  
  export const block: any = createAsyncThunk(
    "user/block",
    async (id: number) => {
      const res = await axios.patch(`http://localhost:8080/users/${id}`, {status: false});
      return res.data;
    }
  );
  
  export const unBlock: any = createAsyncThunk(
    "user/unBlock",
    async (id: number) => {
      const res = await axios.patch(`http://localhost:8080/users/${id}`, {status: true});
      return res.data;
    }
  );