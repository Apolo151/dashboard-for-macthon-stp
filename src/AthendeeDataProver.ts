import { DataProvider, fetchUtils, GetManyReferenceParams, GetManyReferenceResult, QueryFunctionContext, RaRecord, UpdateManyParams, UpdateManyResult } from "react-admin";

const API_URL = import.meta.env.VITE_BASE_URL;
const httpClient = fetchUtils.fetchJson;

const AttendeeDataProvider: DataProvider = {
  getList: async (resource) => {
    const url = `${API_URL}/${resource}/all`;
    const { json } = await httpClient(url, {
      headers: new Headers({
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      }),
    });
    return {
      data: json.data.map((item: any) => ({
        ...item,
        id: item.SSN || item.id,
      })),
      total: json.data.length,
    };
  },

  getOne: async (resource, params) => {
    const url = `${API_URL}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      headers: new Headers({
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      }),
    });
    return { data: { ...json.data, id: json.data.SSN } };
  },

  create: async (resource, params) => {
    const url = `${API_URL}/${resource}/add`;
    console.log(params);
    const { json } = await httpClient(url, {
      method: "POST",
      body: JSON.stringify(params.data),
      headers: new Headers({
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      }),
    });
    return { data: { ...json.data, id: json.data.SSN } };
  },

  update: async (resource, params) => {
    const url = `${API_URL}/${resource}/${params.id}`;
    if (!params.data.comments) params.data.comments = "";
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
      headers: new Headers({
        authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      }),
    });
    return { data: { ...json.data, id: json.data.SSN } };
  },

  delete: async (resource, params) => {
    console.log(params);
    const url = `${API_URL}/${resource}/one/${params.id}`;
    const { json } = await httpClient(url, {
      method: "DELETE",
      headers: new Headers({
        authorization: "Bearer " + localStorage.getItem("token"),
      }),
    });
    return { data: { ...json.data, id: json.data.SSN } };
  },

  getMany: async (resource, params) => {
    const url = `${API_URL}/${resource}?ids=${params.ids.join(",")}`;
    const { json } = await httpClient(url);
    return { data: json };
  },
  getManyReference: function <RecordType extends RaRecord = any>(
    resource: string,
    params: GetManyReferenceParams & QueryFunctionContext,
  ): Promise<GetManyReferenceResult<RecordType>> {
    throw new Error("Function not implemented.");
  },
  updateMany: function <RecordType extends RaRecord = any>(
    resource: string,
    params: UpdateManyParams,
  ): Promise<UpdateManyResult<RecordType>> {
    throw new Error("Function not implemented.");
  },
  deleteMany: async (resource, params) => {
    console.log("DeleteMany called with:", resource, params.ids);

    const url = `${API_URL}/${resource}/many`;
    const { json } = await httpClient(url, {
      method: "DELETE",
      body: JSON.stringify({ ids: params.ids }),
      headers: new Headers({
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      }),
    });
    return { data: params.ids }; 
  },
};

export default AttendeeDataProvider;
