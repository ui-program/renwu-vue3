import { request } from "@/utils/request";

export interface QueryFeedTagDTO {
  category_id?: number;
}

export const queryTags = (params: QueryFeedTagDTO) => {
  return request<{}>({
    url: "/feed/queryTags",
    method: "POST",
    data: params
  });
}

export const queryCategoryList = (params: {}) => {
  return request<{}>({
    url: "/feed/queryCategoryList",
    method: "POST",
    data: params
  });
}

export interface RemoveFeedDTO {
  id?: number;
}

export const remove = (params: RemoveFeedDTO) => {
  return request<{}>({
    url: "/feed/remove",
    method: "POST",
    data: params
  });
}

export interface CreateFeedDTO {
  title: string;
  content: string;
  images: string;
  category_id: number;
}

export const create = (params: CreateFeedDTO) => {
  return request<{}>({
    url: "/feed/create",
    method: "POST",
    data: params
  });
}

export interface QueryFeedDTO {
  pageSize?: number;
  pageIndex?: number;
  skip?: number;
  title?: string;
  category_id?: string;
}

export const queryList = (params: QueryFeedDTO) => {
  return request<{}>({
    url: "/feed/queryList",
    method: "POST",
    data: params
  });
}