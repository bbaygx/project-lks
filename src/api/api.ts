import { SignUpFormSchema } from "@/schemas/schema";
import axios from "axios";
import * as z from "zod";

interface postAIRequestType {
  result: string;
}
export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export const postAIRequest = async (message: string) => {
  try {
    const data = await axios.post(
      `${BACKEND_BASE_URL}/v1/api/kouai`,
      {
        prompt: message,
      },
      {
        withCredentials: true,
      }
    );

    return data.data as postAIRequestType;
  } catch (error) {}
};

export const SignUpForm = async (values: any) => {
  try {
    const data = await axios.post(`${BACKEND_BASE_URL}/auth/sign-up`, values, {
      withCredentials: true,
    });

    return data.data as postAIRequestType;
  } catch (error) {
    return error;
  }
};

export const LogOutUser = async () => {
  try {
    const data = await axios.delete(`${BACKEND_BASE_URL}/auth/logout`, {
      withCredentials: true,
    });
    const response = data.data;
    return response;
  } catch (error) {
    return error;
  }
};

export const SignInForm = async (values: any) => {
  try {
    const data = await axios.post(`${BACKEND_BASE_URL}/auth/sign-in`, values, {
      withCredentials: true,
    });

    return data.data as postAIRequestType;
  } catch (error) {
    return error;
  }
};

export const ChatWithAI = async (message: string) => {
  try {
    const data = await axios.post(`${BACKEND_BASE_URL}/ai`, message, {
      withCredentials: true,
    });

    return data.data as { message: string; data: string };
  } catch (error) {
    return error;
  }
};

export const getStatusAuth = async () => {
  try {
    const response = await axios.get(`${BACKEND_BASE_URL}/auth/status`, {
      withCredentials: true,
    });
    const data = await response.data;

    return data;
  } catch (error) {
    return error;
  }
};
